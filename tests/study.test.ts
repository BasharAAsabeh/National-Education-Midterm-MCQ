import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { test } from 'node:test';
import { letters, parseBank } from '../src/bank.ts';
import { finishSession, initialState, moveTo, needsReview, outcomeOf, progressFor, questionsFor, respond, restoreState, startSession, toggleFlag } from '../src/study.ts';

const markdown = readFileSync(new URL('../National_Education_MCQ_Quiz_and_Codex_Instructions.md', import.meta.url), 'utf8').replace(/\r\n/g, '\n');
const bank = parseBank(markdown);
const first = bank.chapterQuestions[0];
const wrong = letters.find(letter => letter !== first.answer)!;

test('all 942 source records and their fields are preserved verbatim', () => {
  const source = markdown.split('# QUESTION BANK\n')[1];
  const blocks = source.split(/(?=^### )/m).filter(block => block.startsWith('### '));
  assert.equal(blocks.length, 942);
  assert.deepEqual([bank.coreCount, bank.detailCount, bank.mock.questions.length], [741, 131, 70]);
  assert.deepEqual([...bank.byId.keys()], blocks.map(block => block.split('\n')[0].slice(4)));

  for (const block of blocks) {
    const [heading, prompt, a, b, c, d, answer, explanation, priority, source] = block.split('\n');
    const id = heading.slice(4);
    const parsed = bank.byId.get(id)!;
    assert.equal(parsed.prompt, prompt.slice(10), id);
    assert.deepEqual(parsed.choices, { A: a.slice(3), B: b.slice(3), C: c.slice(3), D: d.slice(3) }, id);
    assert.equal(parsed.answer, answer.slice(8), id);
    assert.equal(parsed.explanation, explanation.slice(13), id);
    assert.equal(parsed.priority, priority.slice(10), id);
    assert.equal(parsed.source, source.slice(8), id);
  }
});

test('missing or invalid data produces an actionable parser error', () => {
  assert.throws(() => parseBank(markdown.replace('### Q01-001', '### Q01-002')), /Expected Q01-001/);
  assert.throws(() => parseBank(markdown.replace('Answer: A', 'Answer: E')), /Q01-001 has an invalid answer letter/);
  assert.throws(() => parseBank(markdown.replace('B. A political party', 'B. Native country or region connected to a person\'s identity')), /Q01-001 needs four distinct options/);
  assert.throws(() => parseBank(markdown.replace(/### M070[\s\S]+$/, '')), /Original mock exam declares 70 questions, but 69 were loaded/);
});

test('home modes and chapter preference expose the requested sets', () => {
  const state = initialState();
  assert.equal(questionsFor(bank, state, 'quick').length, 741);
  assert.equal(questionsFor(bank, state, 'all').length, 872);
  assert.equal(questionsFor(bank, state, 'mock').length, 70);
  assert.equal(questionsFor(bank, state, 'chapter', 'chapter-1').some(question => question.priority === 'detail'), false);
  state.preferences.includeDetails = true;
  assert.equal(questionsFor(bank, state, 'chapter', 'chapter-1').length, bank.chapters[0].questions.length);
});

test('a reveal awards no XP and an unaided retry masters the question without changing first-attempt analytics', () => {
  let state = startSession(initialState(), [first], 'quick');
  state = respond(state, first, { kind: 'revealed' });
  assert.equal(state.xp, 0);
  assert.equal(state.records[first.id].first, 'revealed');
  assert.equal(needsReview(state.records[first.id]), true);
  assert.equal(respond(state, first, { kind: 'choice', choice: first.answer }), state);
  state = startSession(state, questionsFor(bank, state, 'review'), 'review', undefined, () => 0.2);
  assert.notDeepEqual(state.session?.options[first.id], letters);
  state = respond(state, first, { kind: 'choice', choice: first.answer });
  assert.equal(state.records[first.id].mastered, true);
  assert.equal(state.records[first.id].first, 'revealed');
  assert.equal(state.xp, 0);
  assert.deepEqual(progressFor([first], state), { studied: 1, attempted: 0, correct: 0, mastered: 1, flagged: 0, review: 0 });
});

test('wrong attempts, skips, mastery, and first-attempt stats remain distinct', () => {
  let state = startSession(initialState(), [first], 'quick');
  state = respond(state, first, { kind: 'choice', choice: wrong });
  assert.equal(state.records[first.id].first, 'incorrect');
  state = startSession(state, [first], 'review');
  state = respond(state, first, { kind: 'skipped' });
  assert.equal(needsReview(state.records[first.id]), true);
  state = respond(state, first, { kind: 'choice', choice: first.answer });
  assert.equal(state.records[first.id].mastered, true);
  assert.equal(progressFor([first], state).correct, 0);
  state = startSession(state, [first], 'all');
  state = respond(state, first, { kind: 'choice', choice: wrong });
  assert.equal(needsReview(state.records[first.id]), true);
});

test('navigation and reload preserve both shuffles, responses, bookmarks, XP, and streak', () => {
  const set = bank.chapterQuestions.slice(0, 4);
  const initial = initialState();
  initial.preferences.shuffleQuestions = true;
  initial.preferences.shuffleOptions = true;
  let state = startSession(initial, set, 'quick', undefined, () => 0);
  assert.notDeepEqual(state.session?.ids, set.map(question => question.id));
  const id = state.session!.ids[0];
  const question = bank.byId.get(id)!;
  assert.notDeepEqual(state.session?.options[id], letters);
  const displayedPosition = state.session!.options[id].indexOf(question.answer);
  const displayedChoice = state.session!.options[id][displayedPosition];
  state = respond(state, question, { kind: 'choice', choice: displayedChoice });
  assert.equal(state.xp, 10);
  assert.equal(state.streak, 1);
  assert.equal(respond(state, question, { kind: 'choice', choice: question.answer }), state);
  state = toggleFlag(state, id);
  state = moveTo(state, 2);
  assert.deepEqual(restoreState(JSON.stringify(state), bank), state);
  assert.equal(outcomeOf(question, state.session?.responses[id]), 'correct');
  assert.equal(moveTo(state, 0).session?.responses[id].kind, 'choice');
});

test('mock grading excludes revealed items, fills skipped items, and scores once', () => {
  const initial = initialState();
  initial.preferences.delayedMock = true;
  let state = startSession(initial, bank.mock.questions, 'mock');
  const [revealed, correct, incorrect] = bank.mock.questions;
  state = respond(state, revealed, { kind: 'choice', choice: revealed.answer });
  state = respond(state, revealed, { kind: 'revealed' });
  state = moveTo(state, 1);
  state = respond(state, correct, { kind: 'choice', choice: correct.answer });
  state = moveTo(state, 2);
  state = respond(state, incorrect, { kind: 'choice', choice: letters.find(letter => letter !== incorrect.answer)! });
  assert.equal(state.xp, 0);
  state = finishSession(state, bank);
  assert.equal(state.xp, 10);
  assert.equal(state.records[revealed.id].first, 'revealed');
  assert.equal(state.records[correct.id].first, 'correct');
  assert.equal(state.records[incorrect.id].first, 'incorrect');
  assert.equal(Object.values(state.session!.responses).filter(response => response.kind === 'skipped').length, 67);
  assert.equal(finishSession(state, bank), state);
});

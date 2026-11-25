import { useEffect, useRef, useState } from 'react';
import { Bookmark, Check, CircleCheck, CircleMinus, CircleX, Eye, Flame, List, RotateCcw, Trophy, X } from 'lucide-react';
import { letters, type Bank, type Letter } from './bank.ts';
import type { SetStudy } from './App.tsx';
import { finishSession, mockTopic, modeTitle, moveTo, outcomeOf, questionsFor, respond, toggleFlag, type Mode, type Outcome, type StudyState } from './study.ts';

const outcomeLabels: Record<Outcome, string> = { correct: 'Correct', incorrect: 'Incorrect', revealed: 'Revealed', skipped: 'Skipped' };
const outcomeIcons = { correct: CircleCheck, incorrect: CircleX, revealed: Eye, skipped: CircleMinus };

export function Quiz({ bank, state, setState, modalOpen }: { bank: Bank; state: StudyState; setState: SetStudy; modalOpen: boolean }) {
  const session = state.session!;
  const id = session.ids[session.index];
  const question = bank.byId.get(id)!;
  const order = session.options[id];
  const response = session.responses[id];
  const outcome = outcomeOf(question, response);
  const answered = response?.kind === 'choice';
  const feedback = response?.kind === 'revealed' || (answered && !session.delayed);
  const marked = !!state.records[id]?.flagged;
  const mastered = !!state.records[id]?.mastered;
  const last = session.index === session.ids.length - 1;
  const count = session.ids.length;
  const handled = Object.values(session.responses).filter(item => item.kind !== 'skipped').length;
  const sectionTitle = question.section === 'mock' ? 'Original mock exam' : bank.chapters.find(chapter => chapter.id === question.section)?.title;
  const heading = useRef<HTMLHeadingElement>(null);
  const [jump, setJump] = useState(false);
  const [target, setTarget] = useState('');
  const jumpField = useRef<HTMLInputElement>(null);

  useEffect(() => {
    heading.current?.focus({ preventScroll: true });
  }, [session.index, id]);

  useEffect(() => {
    if (jump) jumpField.current?.focus();
  }, [jump]);

  function navigate(index: number) {
    if (index < 0 || index >= count) return;
    setState(current => moveTo(current, index));
    setJump(false);
    window.scrollTo(0, 0);
  }

  function select(choice: Letter) {
    setState(current => respond(current, question, { kind: 'choice', choice }));
  }

  function reveal() {
    setState(current => respond(current, question, { kind: 'revealed' }));
  }

  function advance(skip = false) {
    setState(current => {
      const updated = skip ? respond(current, question, { kind: 'skipped' }) : current;
      return last ? finishSession(updated, bank) : moveTo(updated, session.index + 1);
    });
    setJump(false);
    window.scrollTo(0, 0);
  }

  useEffect(() => {
    function onKey(event: KeyboardEvent) {
      if (modalOpen || event.defaultPrevented || event.altKey || event.ctrlKey || event.metaKey || event.shiftKey || event.repeat) return;
      const target = event.target instanceof Element ? event.target : null;
      if (target?.closest('input, textarea, select, [contenteditable="true"], dialog')) return;
      const key = event.key.toLowerCase();
      if (key === ' ') {
        if (target?.closest('button, a, summary') && !target.closest('.option-button, .reveal-button')) return;
        event.preventDefault();
        reveal();
      } else if (key === 'r') {
        event.preventDefault();
        reveal();
      } else if (/^[1-4]$/.test(key)) {
        event.preventDefault();
        select(order[Number(key) - 1]);
      } else if (key === 'enter' && response && (!target?.closest('button, a, summary') || target.closest('.option-button, .reveal-button'))) {
        event.preventDefault();
        advance();
      } else if (key === 'arrowleft' || key === 'arrowright') {
        event.preventDefault();
        navigate(session.index + (key === 'arrowleft' ? -1 : 1));
      }
    }
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  });

  const StatusIcon = outcomeIcons[outcome];

  return <div className="quiz-layout">
    <section className="quiz-top" aria-label="Session progress">
      <div className="quiz-top-row">
        <div><p className="quiz-mode">{modeTitle(bank, session.mode, session.scope)}</p><h1>Question {session.index + 1} <span>of {count}</span></h1></div>
        <button className="button secondary jump-toggle" aria-expanded={jump} aria-controls="question-jump" onClick={() => { setTarget(String(session.index + 1)); setJump(!jump); }}><List size={18} /><span>Jump to question</span></button>
      </div>
      <progress value={handled} max={count} aria-label={`${handled} of ${count} answered or revealed`} />
      <div className="quiz-progress-meta"><span>{handled} of {count} answered or revealed</span><span><Flame size={15} /> {state.streak} streak</span></div>
      {jump && <form className="jump-form" id="question-jump" onSubmit={event => { event.preventDefault(); if (event.currentTarget.reportValidity()) navigate(Number(target) - 1); }}>
        <label htmlFor="jump-number">Question number</label><input ref={jumpField} id="jump-number" type="number" min="1" max={count} required value={target} onFocus={event => event.target.select()} onChange={event => setTarget(event.target.value)} /><button className="button primary" type="submit">Go</button>
      </form>}
    </section>

    <article className="question-card">
      <div className="question-meta">
        <div className="question-tags"><span className="priority-tag">{question.priority === 'detail' ? 'Detailed' : question.priority === 'core' ? 'Core' : 'Mock exam'}</span><span>{id}</span>{mastered && <span className="mastered-tag"><Check size={14} /> Mastered</span>}</div>
        <button className={`icon-button bookmark-button ${marked ? 'bookmarked' : ''}`} type="button" aria-label={marked ? 'Remove bookmark' : 'Bookmark question'} title={marked ? 'Remove bookmark' : 'Bookmark question'} aria-pressed={marked} onClick={() => setState(current => toggleFlag(current, id))}><Bookmark size={20} fill={marked ? 'currentColor' : 'none'} /></button>
      </div>
      <p className="question-section">{sectionTitle}</p>
      <h2 ref={heading} tabIndex={-1} className="question-prompt">{question.prompt}</h2>
      <div className="options-list" role="group" aria-label="Answer choices">
        {order.map((letter, index) => {
          const selected = answered && response.choice === letter;
          const correct = feedback && letter === question.answer;
          const wrong = feedback && selected && !correct;
          const locked = answered || response?.kind === 'revealed';
          return <button key={letter} className={`option-button ${correct ? 'option-correct' : wrong ? 'option-wrong' : selected ? 'option-selected' : ''}`} aria-disabled={locked} aria-pressed={selected} onClick={() => { if (!locked) select(letter); }}>
            <span className="choice-letter">{letters[index]}</span><span className="choice-text">{question.choices[letter]}</span>
            {correct && <span className="choice-feedback"><Check size={18} /><span>Correct</span></span>}
            {wrong && <span className="choice-feedback"><X size={18} /><span>Incorrect</span></span>}
            {!feedback && selected && <span className="choice-feedback"><Check size={18} /><span>Recorded</span></span>}
          </button>;
        })}
      </div>

      <div className="reveal-row"><button className="button secondary reveal-button" onClick={reveal} aria-expanded={!!feedback} aria-controls="question-feedback" aria-keyshortcuts="Space R"><Eye size={19} />Show Answer</button>{session.mode === 'mock' && <span className="muted">Revealed questions are excluded from your unaided score.</span>}</div>
      <div id="question-feedback" aria-live="polite" aria-atomic="true">
        {feedback && <div className={`feedback-panel ${outcome}`}>
          <strong><StatusIcon size={19} />{outcome === 'correct' ? 'Correct!' : outcome === 'incorrect' ? 'Incorrect. Here’s the answer.' : 'Answer revealed'}</strong>
          <p>{question.explanation}</p><small>Source: {question.source}</small>
        </div>}
        {session.delayed && answered && <p className="recorded-note"><Check size={17} /> Answer recorded. Feedback will appear in your results.</p>}
        {response?.kind === 'skipped' && <p className="recorded-note">Previously skipped. You can still answer or reveal this question.</p>}
      </div>
    </article>

    <nav className="quiz-controls" aria-label="Question controls">
      <button className="button secondary" onClick={() => navigate(session.index - 1)} disabled={session.index === 0}>Previous</button>
      <div><button className="button quiet" onClick={() => advance(true)} disabled={!!response && response.kind !== 'skipped'}>Skip</button><button className="button primary next-button" onClick={() => advance()} disabled={!response}>{last ? 'Finish' : 'Next'}</button></div>
    </nav>
    <div className="keyboard-hints" aria-label="Keyboard shortcuts"><span><kbd>1–4</kbd> Choose</span><span><kbd>Space</kbd> or <kbd>R</kbd> Reveal</span><span><kbd>Enter</kbd> Next</span><span><kbd>←</kbd> <kbd>→</kbd> Navigate</span></div>
  </div>;
}

export function Results({ bank, state, setState, home, launch }: { bank: Bank; state: StudyState; setState: SetStudy; home: () => void; launch: (mode: Mode) => void }) {
  const session = state.session!;
  const isMock = session.mode === 'mock';
  const [filter, setFilter] = useState<'all' | Outcome>('all');
  const [page, setPage] = useState(0);
  const [open, setOpen] = useState<Set<string>>(() => new Set());
  const title = useRef<HTMLHeadingElement>(null);
  const pageSize = 20;

  useEffect(() => { title.current?.focus({ preventScroll: true }); }, []);

  const rows = session.ids.map(id => {
    const question = bank.byId.get(id)!;
    return { question, outcome: outcomeOf(question, session.responses[id]) };
  });
  const counts = { correct: 0, incorrect: 0, revealed: 0, skipped: 0 };
  for (const row of rows) counts[row.outcome]++;
  const visible = filter === 'all' ? rows : rows.filter(row => row.outcome === filter);
  const pageCount = Math.ceil(visible.length / pageSize);
  const reviewCount = questionsFor(bank, state, 'review').length;

  return <div className="quiz-layout results-layout">
    <section className="result-hero">
      <span className="mode-icon mint"><Trophy size={25} /></span>
      <h1 ref={title} tabIndex={-1}>{isMock ? 'Mock Exam Results' : 'Session Complete'}</h1>
      <p>{isMock ? `${counts.correct} of ${session.ids.length} correct without revealing the answer` : `${modeTitle(bank, session.mode, session.scope)} · ${session.ids.length} questions`}</p>
      <div className="result-actions"><button className="button primary" onClick={reviewCount ? () => launch('review') : home}>{reviewCount ? <><RotateCcw size={17} />Review Mistakes</> : 'Back to Study Hub'}</button>{reviewCount > 0 && <button className="button secondary" onClick={home}>Back to Study Hub</button>}</div>
    </section>

    <div className="result-counts" aria-label="Result totals">
      {(Object.keys(counts) as Outcome[]).map(outcome => {
        const Icon = outcomeIcons[outcome];
        return <button type="button" key={outcome} aria-pressed={filter === outcome} className={`result-count ${outcome}`} onClick={() => { setFilter(filter === outcome ? 'all' : outcome); setPage(0); }}><Icon size={19} /><strong>{counts[outcome]}</strong><span>{outcomeLabels[outcome]}</span></button>;
      })}
    </div>

    <section className="result-questions" aria-labelledby="result-question-title">
      <div className="section-heading"><h2 id="result-question-title">Question Results</h2><label className="result-filter"><span>Filter</span><select value={filter} onChange={event => { setFilter(event.target.value as typeof filter); setPage(0); }}><option value="all">All results</option>{(Object.keys(counts) as Outcome[]).map(outcome => <option key={outcome} value={outcome}>{outcomeLabels[outcome]}</option>)}</select></label></div>
      {!visible.length && <p className="empty-results">No questions match this filter.</p>}
      {visible.slice(page * pageSize, (page + 1) * pageSize).map(({ question, outcome }) => {
        const expanded = open.has(question.id);
        const recorded = session.responses[question.id];
        const Icon = outcomeIcons[outcome];
        return <article className="result-row" key={question.id}>
          <div className="result-row-meta"><span className={`result-status ${outcome}`}><Icon size={16} /> {outcomeLabels[outcome]}</span><span>{question.id} · {question.section === 'mock' ? mockTopic(bank, question.id) : bank.chapters.find(chapter => chapter.id === question.section)?.title}</span></div>
          <h3>{question.prompt}</h3>
          {recorded.kind === 'choice' && <p className="result-selection">Your answer: {question.choices[recorded.choice]}</p>}
          <div className="result-row-actions"><button className="button secondary" aria-expanded={expanded} aria-controls={`result-${question.id}`} onClick={() => setOpen(current => new Set(expanded ? [...current].filter(id => id !== question.id) : [...current, question.id]))}><Eye size={17} />{expanded ? 'Hide Answer' : 'Show Answer'}</button><button className={`icon-button bookmark-button ${state.records[question.id]?.flagged ? 'bookmarked' : ''}`} aria-label={`Bookmark ${question.id}`} aria-pressed={!!state.records[question.id]?.flagged} onClick={() => setState(current => toggleFlag(current, question.id))}><Bookmark size={18} fill={state.records[question.id]?.flagged ? 'currentColor' : 'none'} /></button></div>
          {expanded && <div className="feedback-panel correct" id={`result-${question.id}`}><strong><Check size={18} />{question.choices[question.answer]}</strong><p>{question.explanation}</p><small>Source: {question.source}</small></div>}
        </article>;
      })}
      {pageCount > 1 && <nav className="page-controls" aria-label="Result pages"><button className="button secondary" disabled={page === 0} onClick={() => setPage(page - 1)}>Previous</button><span>Page {page + 1} of {pageCount}</span><button className="button secondary" disabled={page + 1 >= pageCount} onClick={() => setPage(page + 1)}>Next</button></nav>}
    </section>
  </div>;
}

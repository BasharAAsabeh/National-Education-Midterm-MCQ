import { letters, type Bank, type Letter, type Question } from './bank.ts';

export const storageKey = 'national-education-quiz:v1';
export type Mode = 'quick' | 'all' | 'chapter' | 'review' | 'flagged' | 'mock';
export type Outcome = 'correct' | 'incorrect' | 'revealed' | 'skipped';

interface RecordEntry {
  first?: Outcome;
  last?: Outcome;
  mastered?: boolean;
  needsMastery?: boolean;
  flagged?: boolean;
}

export type Response = { kind: 'choice'; choice: Letter } | { kind: 'revealed' } | { kind: 'skipped' };

export interface Preferences {
  theme: 'dark' | 'light';
  shuffleQuestions: boolean;
  shuffleOptions: boolean;
  includeDetails: boolean;
  delayedMock: boolean;
}

export interface Session {
  mode: Mode;
  scope?: string;
  ids: string[];
  options: Record<string, Letter[]>;
  responses: Record<string, Response>;
  index: number;
  delayed: boolean;
  finished: boolean;
}

export interface StudyState {
  version: 1;
  records: Record<string, RecordEntry>;
  preferences: Preferences;
  xp: number;
  streak: number;
  session: Session | null;
  view: 'home' | 'study';
}

export function initialState(): StudyState {
  return {
    version: 1,
    records: {},
    preferences: { theme: 'dark', shuffleQuestions: false, shuffleOptions: false, includeDetails: false, delayedMock: false },
    xp: 0,
    streak: 0,
    session: null,
    view: 'home',
  };
}

export function restoreState(raw: string | null, bank: Bank): StudyState {
  if (!raw) return initialState();
  const state: StudyState = JSON.parse(raw);
  if (state?.version !== 1 || !state.records || !state.preferences || !Number.isSafeInteger(state.xp) || !Number.isSafeInteger(state.streak)) {
    throw new Error('Unsupported saved progress format.');
  }
  const { session } = state;
  if (session && (!Array.isArray(session.ids) || !session.ids.length || new Set(session.ids).size !== session.ids.length ||
    !Number.isInteger(session.index) || session.index < 0 || session.index >= session.ids.length ||
    !session.responses || !session.options || session.ids.some(id => {
      const order = session.options[id];
      return !bank.byId.has(id) || !Array.isArray(order) || order.length !== 4 || !letters.every(letter => order.includes(letter));
    }))) {
    throw new Error('Saved session question order could not be restored.');
  }
  return { ...state, preferences: { ...initialState().preferences, ...state.preferences } };
}

export function needsReview(record?: RecordEntry) {
  return !!record && (record.needsMastery || record.last === 'skipped');
}

export function questionsFor(bank: Bank, state: StudyState, mode: Mode, scope?: string): Question[] {
  switch (mode) {
    case 'quick': return bank.chapterQuestions.filter(question => question.priority === 'core');
    case 'all': return bank.chapterQuestions;
    case 'mock': return bank.mock.questions;
    case 'chapter': return bank.chapters.find(chapter => chapter.id === scope)?.questions.filter(question => state.preferences.includeDetails || question.priority === 'core') ?? [];
    case 'review': return [...bank.byId.values()].filter(question => needsReview(state.records[question.id]));
    case 'flagged': return [...bank.byId.values()].filter(question => state.records[question.id]?.flagged);
  }
}

export function modeTitle(bank: Bank, mode: Mode, scope?: string) {
  switch (mode) {
    case 'quick': return 'Quick Study';
    case 'all': return 'All Questions';
    case 'chapter': return bank.chapters.find(chapter => chapter.id === scope)?.title ?? 'Chapter practice';
    case 'review': return 'Review Mistakes';
    case 'flagged': return 'Bookmarks';
    case 'mock': return 'Mock Exam';
  }
}

function shuffled<T>(items: readonly T[], random: () => number): T[] {
  const result = [...items];
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
}

export function startSession(state: StudyState, questions: Question[], mode: Mode, scope?: string, random = Math.random): StudyState {
  if (!questions.length) return state;
  const ids = questions.map(question => question.id);
  return {
    ...state,
    view: 'study',
    session: {
      mode,
      ...(scope ? { scope } : {}),
      ids: state.preferences.shuffleQuestions ? shuffled(ids, random) : ids,
      options: Object.fromEntries(ids.map(id => [id, state.preferences.shuffleOptions || mode === 'review' ? shuffled(letters, random) : [...letters]])),
      responses: {},
      index: 0,
      delayed: mode === 'mock' && state.preferences.delayedMock,
      finished: false,
    },
  };
}

export function outcomeOf(question: Question, response?: Response): Outcome {
  if (!response || response.kind === 'skipped') return 'skipped';
  if (response.kind === 'revealed') return 'revealed';
  return response.choice === question.answer ? 'correct' : 'incorrect';
}

function recordOutcome(state: StudyState, id: string, outcome: Outcome): StudyState {
  const record = state.records[id] ?? {};
  const firstGraded = !record.first || record.first === 'skipped';
  const earned = firstGraded && outcome === 'correct';
  const needsMastery = outcome === 'incorrect' || outcome === 'revealed' || (outcome === 'skipped' && !!record.needsMastery);
  const mastered = !needsMastery && (!!record.mastered || (outcome === 'correct' && !!record.needsMastery));
  return {
    ...state,
    xp: state.xp + (earned ? 10 : 0),
    streak: earned ? state.streak + 1 : firstGraded && (outcome === 'incorrect' || outcome === 'revealed') ? 0 : state.streak,
    records: {
      ...state.records,
      [id]: { ...record, first: firstGraded ? outcome : record.first, last: outcome, mastered, needsMastery },
    },
  };
}

export function respond(state: StudyState, question: Question, response: Response): StudyState {
  const { session } = state;
  if (!session || session.finished || session.ids[session.index] !== question.id) return state;
  const previous = session.responses[question.id];
  const mockReveal = session.mode === 'mock' && response.kind === 'revealed' && previous?.kind === 'choice';
  if (previous && previous.kind !== 'skipped' && !mockReveal) return state;
  if (response.kind === 'skipped' && previous) return state;

  const updated = { ...state, session: { ...session, responses: { ...session.responses, [question.id]: response } } };
  return session.mode === 'mock' ? updated : recordOutcome(updated, question.id, outcomeOf(question, response));
}

export function moveTo(state: StudyState, index: number): StudyState {
  const { session } = state;
  if (!session || session.finished || index < 0 || index >= session.ids.length || session.index === index) return state;
  return { ...state, session: { ...session, index } };
}

export function finishSession(state: StudyState, bank: Bank): StudyState {
  const { session } = state;
  if (!session || session.finished) return state;
  const responses = { ...session.responses };
  let updated = state;
  for (const id of session.ids) {
    const response = responses[id];
    responses[id] = response ?? { kind: 'skipped' };
    if (!response || session.mode === 'mock') updated = recordOutcome(updated, id, outcomeOf(bank.byId.get(id)!, response));
  }
  return { ...updated, session: { ...session, responses, finished: true } };
}

export function toggleFlag(state: StudyState, id: string): StudyState {
  const record = state.records[id] ?? {};
  return { ...state, records: { ...state.records, [id]: { ...record, flagged: !record.flagged } } };
}

export function progressFor(questions: Question[], state: StudyState) {
  return questions.reduce((stats, question) => {
    const record = state.records[question.id];
    if (record?.first === 'correct' || record?.first === 'incorrect') stats.attempted++;
    if (record?.first === 'correct') stats.correct++;
    if (record?.first && record.first !== 'skipped') stats.studied++;
    if (record?.mastered) stats.mastered++;
    if (record?.flagged) stats.flagged++;
    if (needsReview(record)) stats.review++;
    return stats;
  }, { studied: 0, attempted: 0, correct: 0, mastered: 0, flagged: 0, review: 0 });
}

export function mockTopic(bank: Bank, id: string) {
  const ranges = [13, 22, 31, 35, 40, 45, 50, 51, 58, 64];
  const questionNumber = Number(id.slice(1));
  const chapterIndex = ranges.findIndex(end => questionNumber <= end);
  return bank.chapters[chapterIndex < 0 ? 11 : chapterIndex].title;
}

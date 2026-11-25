import { useEffect, useMemo, useRef, useState, type Dispatch, type SetStateAction } from 'react';
import {
  BookOpen, Bookmark, Check, ChevronDown, ChevronRight, CircleHelp, ClipboardList, Flame,
  GraduationCap, Home, Layers3, ListChecks, Menu, Moon, RotateCcw, Settings2, Sun, Target, X, Zap,
} from 'lucide-react';
import type { Bank, Section } from './bank.ts';
import {
  initialState, modeTitle, progressFor, questionsFor, restoreState, startSession, storageKey,
  type Mode, type Preferences, type StudyState,
} from './study.ts';
import { Quiz, Results } from './Quiz.tsx';

export type SetStudy = Dispatch<SetStateAction<StudyState>>;
const number = new Intl.NumberFormat('en');

function loadStudy(bank: Bank) {
  try {
    return { state: restoreState(localStorage.getItem(storageKey), bank), issue: '' };
  } catch {
    return { state: initialState(), issue: 'Saved progress could not be loaded. You can study now, then use Reset Progress to start a new saved record.' };
  }
}

export function App({ bank }: { bank: Bank }) {
  const [loaded] = useState(() => loadStudy(bank));
  const [state, setState] = useState(loaded.state);
  const [storageIssue, setStorageIssue] = useState(loaded.issue);
  const [saveEnabled, setSaveEnabled] = useState(!loaded.issue);
  const [drawer, setDrawer] = useState(false);
  const [dialog, setDialog] = useState<'settings' | 'reset' | null>(null);
  const settingsDialog = useRef<HTMLDialogElement>(null);
  const resetDialog = useRef<HTMLDialogElement>(null);
  const homeTitle = useRef<HTMLHeadingElement>(null);
  const main = useRef<HTMLElement>(null);
  const menuButton = useRef<HTMLButtonElement>(null);
  const closeNavigationButton = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    document.documentElement.dataset.theme = state.preferences.theme;
    document.documentElement.style.colorScheme = state.preferences.theme;
  }, [state.preferences.theme]);

  useEffect(() => {
    if (!saveEnabled) return;
    try {
      localStorage.setItem(storageKey, JSON.stringify(state));
    } catch {
      setStorageIssue('Progress could not be saved in this browser. Keep this page open to retain this session.');
    }
  }, [saveEnabled, state]);

  useEffect(() => {
    const settings = settingsDialog.current;
    const reset = resetDialog.current;
    if (dialog !== 'settings' && settings?.open) settings.close();
    if (dialog !== 'reset' && reset?.open) reset.close();
    if (dialog === 'settings' && !settings?.open) settings?.showModal();
    if (dialog === 'reset' && !reset?.open) reset?.showModal();
  }, [dialog]);

  useEffect(() => {
    if (!drawer) return;
    closeNavigationButton.current?.focus();
    const narrow = window.matchMedia('(max-width: 1050px)');
    const handleResize = () => { if (!narrow.matches) setDrawer(false); };
    narrow.addEventListener('change', handleResize);
    return () => narrow.removeEventListener('change', handleResize);
  }, [drawer]);

  const chapters = useMemo(() => bank.chapters.map(section => ({ section, ...progressFor(section.questions, state) })), [bank, state.records]);
  const overall = useMemo(() => progressFor([...bank.byId.values()], state), [bank, state.records]);
  const accuracy = overall.attempted ? `${Math.round(overall.correct / overall.attempted * 100)}%` : '—';
  const percentage = Math.round(overall.studied / bank.byId.size * 100);
  const session = state.session;

  function updatePreferences(change: Partial<Preferences>) {
    setState(current => ({ ...current, preferences: { ...current.preferences, ...change } }));
  }

  function home() {
    setDrawer(false);
    setState(current => ({ ...current, view: 'home' }));
    window.scrollTo(0, 0);
    requestAnimationFrame(() => homeTitle.current?.focus());
  }

  function closeNavigation() {
    setDrawer(false);
    requestAnimationFrame(() => menuButton.current?.focus());
  }

  function launch(mode: Mode, scope?: string) {
    const questions = questionsFor(bank, state, mode, scope);
    if (!questions.length) return;
    setDrawer(false);
    setState(startSession(state, questions, mode, scope));
    window.scrollTo(0, 0);
  }

  function continueStudy() {
    if (!session || session.finished) {
      launch(state.preferences.includeDetails ? 'all' : 'quick');
      return;
    }
    setDrawer(false);
    setState(current => ({ ...current, view: 'study' }));
    window.scrollTo(0, 0);
  }

  function resetProgress() {
    setState(initialState());
    setStorageIssue('');
    setSaveEnabled(true);
    setDialog(null);
    home();
  }

  const resume = session && !session.finished;
  const active = state.view === 'study' ? session : null;

  return <div className="app-shell">
    <a className="skip-link" tabIndex={drawer ? -1 : undefined} href="#main" onClick={() => main.current?.focus()}>Skip to content</a>
    {drawer && <div className="drawer-backdrop" onClick={closeNavigation} />}
    <aside className={`sidebar ${drawer ? 'drawer-open' : ''}`} id="study-navigation" onKeyDown={event => { if (drawer && event.key === 'Escape') closeNavigation(); }}>
      <div className="sidebar-brand">
        <button className="brand" type="button" onClick={home}>
          <span className="brand-mark"><GraduationCap size={23} aria-hidden="true" /></span>
          <span><strong>National Education</strong><small>Study Quiz</small></span>
        </button>
        <button className="icon-button drawer-close" ref={closeNavigationButton} type="button" aria-label="Close navigation" onClick={closeNavigation}><X size={21} /></button>
      </div>
      <nav className="sidebar-nav" aria-label="Study navigation">
        <button className={`nav-row ${!active ? 'current' : ''}`} aria-current={!active ? 'page' : undefined} onClick={home}><Home size={17} />Overview</button>
        <button className={`nav-row ${active?.mode === 'review' ? 'current' : ''}`} aria-current={active?.mode === 'review' ? 'page' : undefined} onClick={() => launch('review')} disabled={!overall.review}><RotateCcw size={17} />Review Mistakes<span className="nav-count">{overall.review}</span></button>
        <button className={`nav-row ${active?.mode === 'flagged' ? 'current' : ''}`} aria-current={active?.mode === 'flagged' ? 'page' : undefined} onClick={() => launch('flagged')} disabled={!overall.flagged}><Bookmark size={17} />Bookmarks<span className="nav-count">{overall.flagged}</span></button>
        <div className="sidebar-rule" />
        <p className="nav-label">CHAPTERS</p>
        {chapters.map(({ section, studied }) => <button className={`nav-row chapter-nav ${active?.scope === section.id ? 'current' : ''}`} title={section.title} key={section.id} onClick={() => launch('chapter', section.id)} aria-current={active?.scope === section.id ? 'page' : undefined}>
          <span className="chapter-number">{String(section.number).padStart(2, '0')}</span><span className="nav-chapter-title">{shortTitle(section)}</span>
          {studied === section.questions.length && <Check className="chapter-check" size={14} aria-label="Chapter complete" />}
        </button>)}
      </nav>
      <div className="sidebar-bottom">
        <button className="nav-row" onClick={() => { setDrawer(false); setDialog('settings'); }}><Settings2 size={17} />Study Settings</button>
      </div>
    </aside>

    <div className="workspace" inert={drawer || undefined}>
      <header className="topbar">
        <div className="breadcrumb">
          <button className="icon-button menu-button" ref={menuButton} type="button" aria-expanded={drawer} aria-controls="study-navigation" aria-label="Open navigation" onClick={() => setDrawer(true)}><Menu size={21} /></button>
          <BookOpen size={17} className="crumb-book" aria-hidden="true" />
          {active ? <><button className="crumb-link" onClick={home}>Study Hub</button><ChevronRight className="crumb-chevron" size={14} /><span className="crumb-active">{active.finished ? 'Results' : modeTitle(bank, active.mode, active.scope)}</span></> : <span>Study Hub</span>}
        </div>
        <div className="top-actions">
          <span className="top-xp"><Zap size={15} /> {number.format(state.xp)} XP</span>
          <button className="icon-button" type="button" title={state.preferences.theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'} aria-label={state.preferences.theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'} onClick={() => updatePreferences({ theme: state.preferences.theme === 'dark' ? 'light' : 'dark' })}>{state.preferences.theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}</button>
          <button className="icon-button header-settings" type="button" title="Study settings" aria-label="Study settings" onClick={() => setDialog('settings')}><Settings2 size={18} /></button>
        </div>
      </header>

      <main id="main" ref={main} tabIndex={-1} className={active ? 'content quiz-content' : 'content'}>
        {storageIssue && <p className="storage-warning" role="status">{storageIssue}</p>}
        {active ? active.finished ? <Results bank={bank} state={state} setState={setState} home={home} launch={launch} /> : <Quiz key={`${active.mode}:${active.scope ?? ''}`} bank={bank} state={state} setState={setState} modalOpen={!!dialog || drawer} /> : <>
          <section className="hero" aria-labelledby="home-title">
            <div className="hero-copy">
              <h1 id="home-title" tabIndex={-1} ref={homeTitle}>National Education</h1>
              <p>Practice at your own pace with {bank.byId.size} questions, clear explanations, and a full mock exam.</p>
              <button className="button primary hero-button" onClick={continueStudy}><BookOpen size={18} />{resume ? 'Continue Studying' : 'Start Studying'}</button>
              {resume && <span className="resume-meta">{modeTitle(bank, session.mode, session.scope)} · Question {session.index + 1} of {session.ids.length}</span>}
              {session?.finished && <button className="text-button last-results" onClick={() => setState(current => ({ ...current, view: 'study' }))}>View last results</button>}
            </div>
            <div className="hero-art" aria-hidden="true"><div className="hero-ring ring-outer" /><div className="hero-ring ring-inner" /><div className="hero-orb"><BookOpen strokeWidth={1.35} /></div><i /><i /><i /></div>
          </section>

          <section className="stats-grid" aria-label="Study progress">
            <div className="stat-card"><div className="stat-label"><span className="stat-icon mint"><Target size={17} /></span>Overall progress</div><strong>{number.format(overall.studied)} <small>/ {bank.byId.size}</small></strong><progress value={overall.studied} max={bank.byId.size} aria-label={`Overall progress, ${percentage}%`} /></div>
            <div className="stat-card"><div className="stat-label"><span className="stat-icon violet"><ListChecks size={17} /></span>Accuracy</div><strong>{accuracy}</strong><span className="stat-note">First attempts</span></div>
            <div className="stat-card"><div className="stat-label"><span className="stat-icon gold"><Flame size={17} /></span>Streak</div><strong>{state.streak}</strong><span className="stat-note">First tries in a row</span></div>
            <div className="stat-card"><div className="stat-label"><span className="stat-icon sky"><Zap size={17} /></span>Total XP</div><strong>{number.format(state.xp)}</strong><span className="stat-note">{overall.mastered ? `${overall.mastered} mastered in review` : '+10 per correct first try'}</span></div>
          </section>

          <section className="section-block" aria-labelledby="study-modes">
            <div className="section-heading"><h2 id="study-modes">Study Modes</h2></div>
            <div className="modes-grid">
              <ModeCard icon={Zap} color="mint" title="Quick Study" description="Focus on the core questions." count={`${bank.coreCount} questions`} onClick={() => launch('quick')} featured />
              <ModeCard icon={Layers3} color="sky" title="All Questions" description="Study the core and detailed questions." count={`${bank.chapterQuestions.length} questions`} onClick={() => launch('all')} />
              <ModeCard icon={RotateCcw} color="violet" title="Review Mistakes" description="Retry missed, revealed, and skipped questions." count={overall.review ? `${overall.review} to review` : '0 to review'} onClick={() => launch('review')} disabled={!overall.review} />
              <ModeCard icon={ClipboardList} color="gold" title="Mock Exam" description="Take the original practice exam." count={`${bank.mock.questions.length} questions`} onClick={() => launch('mock')} />
            </div>
          </section>

          <section className="section-block" aria-labelledby="chapter-heading">
            <div className="section-heading chapter-heading"><h2 id="chapter-heading">Study by Chapter</h2><label className="inline-setting"><input type="checkbox" checked={state.preferences.includeDetails} onChange={event => updatePreferences({ includeDetails: event.target.checked })} /> Include detailed questions</label></div>
            <div className="chapter-grid">
              {chapters.map(({ section, studied }) => {
                const count = questionsFor(bank, state, 'chapter', section.id).length;
                return <button className="chapter-card" key={section.id} onClick={() => launch('chapter', section.id)}>
                  <span className="chapter-card-number">{String(section.number).padStart(2, '0')}</span><span className="chapter-card-main"><strong>{section.title}</strong><small>{count} questions · {studied}/{section.questions.length} studied</small></span>
                </button>;
              })}
            </div>
          </section>

          <details className="source-note"><summary><CircleHelp size={17} /> Source cautions <ChevronDown size={16} className="source-chevron" /></summary><p>The supplied guide contains some inconsistent population/rainfall totals, overlapping parliamentary terms and unusual printed project figures. Questions that use these figures follow the guide, not corrected official data. Early-1990s events supported democratic consolidation after 1989. Missing textbook pages and bibliographic footnotes are not included. Chapters 6 and 7 specifically include photographed pages 70–71.</p></details>
        </>}
      </main>
    </div>

    <dialog ref={settingsDialog} className="dialog" aria-labelledby="settings-title" onCancel={() => setDialog(null)}>
      <div className="dialog-heading"><h2 id="settings-title">Study Settings</h2><button className="icon-button" aria-label="Close settings" onClick={() => setDialog(null)}><X size={20} /></button></div>
      <p className="muted dialog-intro">Question order and feedback settings apply when you start a new session.</p>
      <label className="setting-row"><span><strong>Shuffle questions</strong><small>Randomize the order of questions.</small></span><input type="checkbox" checked={state.preferences.shuffleQuestions} onChange={event => updatePreferences({ shuffleQuestions: event.target.checked })} /></label>
      <label className="setting-row"><span><strong>Shuffle options</strong><small>Randomize answers within each question.</small></span><input type="checkbox" checked={state.preferences.shuffleOptions} onChange={event => updatePreferences({ shuffleOptions: event.target.checked })} /></label>
      <label className="setting-row"><span><strong>Include detailed questions</strong><small>Use when starting from the overview or choosing a chapter.</small></span><input type="checkbox" checked={state.preferences.includeDetails} onChange={event => updatePreferences({ includeDetails: event.target.checked })} /></label>
      <label className="setting-row"><span><strong>Delay mock exam feedback</strong><small>Grade answers after finishing the exam.</small></span><input type="checkbox" checked={state.preferences.delayedMock} onChange={event => updatePreferences({ delayedMock: event.target.checked })} /></label>
      <div className="dialog-actions"><button className="button danger-text" onClick={() => setDialog('reset')}>Reset Progress</button><button className="button primary" onClick={() => setDialog(null)}>Done</button></div>
    </dialog>

    <dialog ref={resetDialog} className="dialog" aria-labelledby="reset-title" onCancel={() => setDialog('settings')}>
      <div className="dialog-heading"><h2 id="reset-title">Reset study progress?</h2></div>
      <p className="muted">This permanently clears your session, scores, bookmarks, and settings from this browser.</p>
      <div className="dialog-actions"><button className="button secondary" autoFocus onClick={() => setDialog('settings')}>Cancel</button><button className="button danger" onClick={resetProgress}>Reset Progress</button></div>
    </dialog>
  </div>;
}

function shortTitle(section: Section) {
  const short: Record<number, string> = { 1: 'Introduction', 3: 'Water & natural resources', 5: 'Establishment of the Emirate', 6: 'Treaties & independence', 12: 'Democracy & legislation' };
  return short[section.number ?? 0] ?? section.title;
}

function ModeCard({ icon: Icon, color, title, description, count, onClick, featured, disabled }: {
  icon: typeof Zap; color: string; title: string; description: string; count: string; onClick: () => void; featured?: boolean; disabled?: boolean;
}) {
  return <button className={`mode-card ${featured ? 'featured' : ''}`} onClick={onClick} disabled={disabled}>
    <span className={`mode-icon ${color}`}><Icon size={21} /></span>
    <strong>{title}</strong><span className="mode-description">{description}</span><span className="mode-footer">{count}</span>
  </button>;
}

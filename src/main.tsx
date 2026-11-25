import { createRoot } from 'react-dom/client';
import markdown from '../National_Education_MCQ_Quiz_and_Codex_Instructions.md?raw';
import { parseBank } from './bank.ts';
import { App } from './App.tsx';
import './styles.css';

const root = createRoot(document.getElementById('root')!);

try {
  root.render(<App bank={parseBank(markdown)} />);
} catch (error) {
  root.render(<main className="fatal" role="alert">
    <h1>The question bank could not be loaded</h1>
    <p>{error instanceof Error ? error.message : String(error)}</p>
    <p>Restore the original National_Education_MCQ_Quiz_and_Codex_Instructions.md file, then rebuild or restart the app.</p>
  </main>);
}

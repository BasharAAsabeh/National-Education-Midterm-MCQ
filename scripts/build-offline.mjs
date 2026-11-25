import { readFile, writeFile } from 'node:fs/promises';

const directory = new URL('../dist/', import.meta.url);
const html = await readFile(new URL('index.html', directory), 'utf8');
const script = /<script\b[^>]*\bsrc="(\.\/assets\/[^"\s]+\.js)"[^>]*><\/script>/;
const stylesheet = /<link\b[^>]*\bhref="(\.\/assets\/[^"\s]+\.css)"[^>]*>/;
const scriptPath = html.match(script)?.[1];
const stylePath = html.match(stylesheet)?.[1];

if (!scriptPath || !stylePath) throw new Error('Could not find the built JavaScript and stylesheet for the offline quiz.');

const [javascript, css] = await Promise.all([
  readFile(new URL(scriptPath, directory), 'utf8'),
  readFile(new URL(stylePath, directory), 'utf8'),
]);
const offline = html
  .replace(script, () => `<script type="module">${javascript.replace(/<\/script/gi, match => match.replace('/', '\\/'))}</script>`)
  .replace(stylesheet, () => `<style>${css}</style>`);

await writeFile(new URL('quiz.html', directory), offline);
console.log('Standalone offline quiz written to dist/quiz.html');

/* Writes every page to disk. Run with: node build/index.mjs */
import { writeFileSync, mkdirSync } from 'node:fs';
import { dirname, join, resolve } from 'node:path';
import { layout } from './chrome.mjs';
import { home, about, whoWeServe, careers } from './pages-main.mjs';
import { biohazard, hoarding, areas, contact } from './pages-svc.mjs';
import { terms, privacy, accessibility, notFound } from './pages-legal.mjs';

const ROOT = resolve(dirname(new URL(import.meta.url).pathname), '..');

const pages = [
  home(), about(), whoWeServe(), careers(),
  biohazard(), hoarding(), areas(), contact(),
  terms(), privacy(), accessibility(), notFound()
];

for (const p of pages) {
  const out = join(ROOT, p.file);
  mkdirSync(dirname(out), { recursive: true });
  writeFileSync(out, layout(p), 'utf8');
  console.log('wrote', p.file);
}

console.log('done —', pages.length, 'pages');

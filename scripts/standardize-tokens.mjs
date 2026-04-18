import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT_DIR = path.resolve(__dirname, '..');
const UI_SRC = path.join(ROOT_DIR, 'packages/ui/src');

// Color mapping (Input pattern -> Semantic replacement)
const REPLACEMENTS = [
  // Financial Status (Bullish/Bearish)
  { from: /"#22C55E"/g, to: '"var(--chart-bullish, #22C55E)"' },
  { from: /'#22C55E'/g, to: "'var(--chart-bullish, #22C55E)'" },
  { from: /"#EF4444"/g, to: '"var(--chart-bearish, #EF4444)"' },
  { from: /'#EF4444'/g, to: "'var(--chart-bearish, #EF4444)'" },
  { from: /"#F87171"/g, to: '"var(--chart-bearish, #F87171)"' },
  { from: /'#F87171'/g, to: "'var(--chart-bearish, #F87171)'" },
  
  // Neutral / Tertiary
  { from: /"#748A83"/g, to: '"var(--chart-neutral, #748A83)"' },
  { from: /'#748A83'/g, to: "'var(--chart-neutral, #748A83)'" },
  
  // Low-level variables -> Semantic variables
  { from: /var\(--green-400\)/g, to: 'var(--chart-bullish)' },
  { from: /var\(--green-500\)/g, to: 'var(--chart-bullish)' },
  { from: /var\(--red-400\)/g, to: 'var(--chart-bearish)' },
  { from: /var\(--red-500\)/g, to: 'var(--chart-bearish)' },
  { from: /var\(--n-400\)/g, to: 'var(--chart-neutral)' },
];

async function walk(dir) {
  const entries = await fs.promises.readdir(dir, { withFileTypes: true });
  for (const entry of entries) {
    const res = path.resolve(dir, entry.name);
    if (entry.isDirectory()) {
      if (!entry.name.startsWith('.') && entry.name !== 'node_modules') {
        await walk(res);
      }
    } else if (entry.isFile() && (res.endsWith('.tsx') || res.endsWith('.ts') || res.endsWith('.css'))) {
      if (!res.includes('/tokens/')) { // Skip tokens themselves to avoid self-replacement
        await processFile(res);
      }
    }
  }
}

async function processFile(filePath) {
  let content = await fs.promises.readFile(filePath, 'utf8');
  let original = content;
  
  for (const { from, to } of REPLACEMENTS) {
    content = content.replace(from, to);
  }
  
  if (content !== original) {
    console.log(`Standardizing: ${path.relative(ROOT_DIR, filePath)}`);
    await fs.promises.writeFile(filePath, content, 'utf8');
  }
}

console.log('🚀 Starting Token Standardization...');
walk(UI_SRC).then(() => {
  console.log('✅ Done!');
}).catch(err => {
  console.error('❌ Error:', err);
});

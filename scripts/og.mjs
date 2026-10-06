/**
 * Regenerates the share images (public/og/<slug>.jpg) from the album covers.
 * Run after changing a cover:  npm run og
 * Needs Playwright with a Chromium browser available locally
 * (set CHROMIUM_PATH to a Chrome/Chromium binary, or install one with npx playwright install chromium).
 */
import { execSync } from 'node:child_process';
import fs from 'node:fs';
import http from 'node:http';
import path from 'node:path';
import { chromium } from 'playwright-core';

const port = 4399;
const out = '.og-build';
execSync(`npx astro build --outDir ${out}`, { stdio: 'inherit', env: { ...process.env, OG_CARDS: '1' } });

// Minimal static server for the build (the site lives under /Portfolio/).
const types = { '.html': 'text/html', '.css': 'text/css', '.js': 'text/javascript', '.woff2': 'font/woff2', '.webp': 'image/webp', '.svg': 'image/svg+xml' };
const server = http
  .createServer((req, res) => {
    let p = decodeURIComponent((req.url ?? '/').split('?')[0]).replace(/^\/Portfolio/, '');
    if (p.endsWith('/')) p += 'index.html';
    const file = path.join(out, p);
    if (!file.startsWith(out) || !fs.existsSync(file)) return res.writeHead(404).end();
    res.writeHead(200, { 'content-type': types[path.extname(file)] ?? 'application/octet-stream' });
    fs.createReadStream(file).pipe(res);
  })
  .listen(port);

const slugs = fs.readdirSync('.og-build/og-card');
fs.mkdirSync('public/og', { recursive: true });
const browser = await chromium.launch(process.env.CHROMIUM_PATH ? { executablePath: process.env.CHROMIUM_PATH } : {});
const page = await browser.newPage({ viewport: { width: 1200, height: 630 } });
for (const slug of slugs) {
  await page.goto(`http://localhost:${port}/Portfolio/og-card/${slug}/`, { waitUntil: 'networkidle' });
  await page.evaluate(() => document.fonts.ready);
  await page.screenshot({ path: `public/og/${slug}.jpg`, type: 'jpeg', quality: 88 });
  console.log('og', slug);
}
await browser.close();
server.close();
fs.rmSync('.og-build', { recursive: true, force: true });

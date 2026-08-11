// generate_pdf_from_html.js
// Generates Mohammed_Asbar_Resume.pdf from the local resume.html via dev server
// Uses Playwright to render HTML with photo and export as PDF

import { chromium } from 'playwright';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();

  // Use the local dev server so /profile.jpg and all assets load correctly
  // Make sure `npm run dev` is running on port 5173 before running this script
  await page.goto('http://localhost:5173/resume.html', { waitUntil: 'networkidle' });

  // Wait for the profile photo to fully render
  await page.waitForSelector('.profile-photo', { state: 'visible' });
  await page.waitForFunction(() => {
    const img = document.querySelector('.profile-photo');
    return img && img.complete && img.naturalWidth > 0;
  });
  await page.waitForTimeout(1000);

  // Hide the action bar (screen-only nav) before printing
  await page.addStyleTag({ content: '.action-bar { display: none !important; } .page-wrapper { padding: 0 !important; }' });

  const outputPath = resolve(__dirname, 'public', 'Mohammed_Asbar_Resume.pdf');

  await page.pdf({
    path: outputPath,
    format: 'A4',
    printBackground: true,
    margin: { top: '0', right: '0', bottom: '0', left: '0' },
  });

  await browser.close();
  console.log('✅ PDF with photo generated successfully:', outputPath);
})();

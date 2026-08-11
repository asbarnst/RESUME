// generate_pdf_from_html.mjs
// Generates Mohammed_Asbar_Resume.pdf from the local resume.html file
// Uses Playwright to render HTML with photo and export as PDF

import { chromium } from 'playwright';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));


(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();

  // Load the resume HTML from the local file
  const resumePath = resolve(__dirname, 'public', 'resume.html');
  await page.goto(`file://${resumePath}`, { waitUntil: 'networkidle' });

  // Wait for the profile photo to load
  await page.waitForTimeout(2000);

  // Hide the action bar (screen-only nav) before printing
  await page.addStyleTag({ content: '.action-bar { display: none !important; }' });

  const outputPath = resolve(__dirname, 'public', 'Mohammed_Asbar_Resume.pdf');

  await page.pdf({
    path: outputPath,
    format: 'A4',
    printBackground: true,
    margin: { top: '0', right: '0', bottom: '0', left: '0' },
  });

  await browser.close();
  console.log('PDF generated successfully:', outputPath);
})();

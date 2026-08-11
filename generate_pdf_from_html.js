// generate_pdf_from_html.js
// Generates Mohammed_Asbar_Resume.pdf from the local resume.html via dev server
// Uses Playwright to render HTML with photo and export as PDF

import { chromium } from 'playwright';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';
import { readFileSync, existsSync } from 'fs';

const __dirname = dirname(fileURLToPath(import.meta.url));

// Helper: read image as base64 data URI
function toDataURI(filePath, mime) {
  if (!existsSync(filePath)) return null;
  const data = readFileSync(filePath).toString('base64');
  return `data:${mime};base64,${data}`;
}

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();

  // Load resume from dev server
  await page.goto('http://localhost:5173/resume.html', { waitUntil: 'networkidle' });
  await page.waitForTimeout(500);

  // Inject images as base64 data URIs to guarantee they render in PDF
  const photoPath = resolve(__dirname, 'public', 'profile.jpg');
  const sigPath   = resolve(__dirname, 'public', 'signature.png');

  const photoURI = toDataURI(photoPath, 'image/jpeg');
  const sigURI   = toDataURI(sigPath, 'image/png');

  await page.evaluate(({ photoURI, sigURI }) => {
    if (photoURI) {
      const photo = document.querySelector('.profile-photo');
      if (photo) { photo.src = photoURI; photo.style.display = ''; }
    }
    if (sigURI) {
      const sig = document.querySelector('.signature-img');
      if (sig) { sig.src = sigURI; }
    }
  }, { photoURI, sigURI });

  // Wait for images to render after src swap
  await page.waitForTimeout(1500);

  // Hide the action bar before printing
  await page.addStyleTag({
    content: '.action-bar { display: none !important; } .page-wrapper { padding: 0 !important; }'
  });

  const outputPath = resolve(__dirname, 'public', 'Mohammed_Asbar_Resume.pdf');

  await page.pdf({
    path: outputPath,
    format: 'A4',
    printBackground: true,
    margin: { top: '0', right: '0', bottom: '0', left: '0' },
  });

  await browser.close();
  console.log('✅ PDF with photo + signature generated:', outputPath);
})();


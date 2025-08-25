#!/usr/bin/env node

import puppeteer from 'puppeteer';
import { promises as fs } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function captureScreenshot(url, outputName) {
  console.log(`📸 Capturing screenshot of ${url}...`);
  
  const browser = await puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  try {
    const page = await browser.newPage();
    
    // Set viewport for desktop
    await page.setViewport({
      width: 1920,
      height: 1080,
      deviceScaleFactor: 2 // For retina quality
    });

    // Navigate to the URL
    await page.goto(url, {
      waitUntil: 'networkidle2',
      timeout: 30000
    });

    // Wait a bit for any animations to complete
    await new Promise(resolve => setTimeout(resolve, 2000));

    // Create screenshots directory if it doesn't exist
    const screenshotsDir = path.join(__dirname, '..', 'public', 'portfolio-screenshots');
    await fs.mkdir(screenshotsDir, { recursive: true });

    // Capture full page screenshot
    const fullPagePath = path.join(screenshotsDir, `${outputName}-full.png`);
    await page.screenshot({
      path: fullPagePath,
      fullPage: true
    });
    console.log(`✅ Full page screenshot saved to: ${fullPagePath}`);

    // Capture viewport screenshot (above the fold)
    const viewportPath = path.join(screenshotsDir, `${outputName}-viewport.png`);
    await page.screenshot({
      path: viewportPath,
      fullPage: false
    });
    console.log(`✅ Viewport screenshot saved to: ${viewportPath}`);

    // Capture mobile view
    await page.setViewport({
      width: 375,
      height: 812,
      deviceScaleFactor: 3,
      isMobile: true
    });
    
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    const mobilePath = path.join(screenshotsDir, `${outputName}-mobile.png`);
    await page.screenshot({
      path: mobilePath,
      fullPage: false
    });
    console.log(`✅ Mobile screenshot saved to: ${mobilePath}`);

    return {
      fullPage: fullPagePath,
      viewport: viewportPath,
      mobile: mobilePath
    };

  } catch (error) {
    console.error('❌ Error capturing screenshot:', error);
    throw error;
  } finally {
    await browser.close();
  }
}

// CLI usage
if (process.argv[2] && process.argv[3]) {
  const url = process.argv[2];
  const outputName = process.argv[3];
  
  captureScreenshot(url, outputName)
    .then(() => {
      console.log('🎉 All screenshots captured successfully!');
      process.exit(0);
    })
    .catch(error => {
      console.error('Failed:', error);
      process.exit(1);
    });
} else {
  console.log(`
Usage: node capture-screenshot.js <url> <output-name>

Example:
  node capture-screenshot.js https://example.com example

This will create:
  - public/portfolio-screenshots/example-full.png (full page)
  - public/portfolio-screenshots/example-viewport.png (above the fold)
  - public/portfolio-screenshots/example-mobile.png (mobile view)
  `);
  process.exit(1);
}

export { captureScreenshot };
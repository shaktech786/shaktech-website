#!/usr/bin/env node

import puppeteer from 'puppeteer';
import { promises as fs } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Portfolio projects to capture
const portfolioProjects = [
  {
    name: 'shaktech-website',
    url: 'https://www.shak-tech.com',
    description: 'AI-First Software Delivery Platform'
  },
  {
    name: 'estimaite',
    url: 'https://estimaite.vercel.app',
    description: 'AI-Powered Project Estimation Tool'
  },
  {
    name: 'github-profile',
    url: 'https://github.com/shaktech786',
    description: 'Open Source Contributions'
  },
  // Add more portfolio items here
];

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
      deviceScaleFactor: 2
    });

    // Navigate to the URL
    await page.goto(url, {
      waitUntil: 'networkidle2',
      timeout: 30000
    });

    // Wait for animations
    await new Promise(resolve => setTimeout(resolve, 2000));

    // Create screenshots directory
    const screenshotsDir = path.join(__dirname, '..', 'public', 'portfolio-screenshots');
    await fs.mkdir(screenshotsDir, { recursive: true });

    // Capture screenshots
    const screenshots = {};
    
    // Full page
    const fullPagePath = path.join(screenshotsDir, `${outputName}-full.png`);
    await page.screenshot({
      path: fullPagePath,
      fullPage: true
    });
    screenshots.fullPage = `${outputName}-full.png`;
    console.log(`   ✅ Full page screenshot saved`);

    // Viewport
    const viewportPath = path.join(screenshotsDir, `${outputName}-viewport.png`);
    await page.screenshot({
      path: viewportPath,
      fullPage: false
    });
    screenshots.viewport = `${outputName}-viewport.png`;
    console.log(`   ✅ Viewport screenshot saved`);

    // Mobile
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
    screenshots.mobile = `${outputName}-mobile.png`;
    console.log(`   ✅ Mobile screenshot saved`);

    return screenshots;

  } catch (error) {
    console.error(`   ❌ Error: ${error.message}`);
    throw error;
  } finally {
    await browser.close();
  }
}

async function captureAllPortfolioScreenshots() {
  console.log('🚀 Starting portfolio screenshot capture...\n');
  
  const results = [];
  
  for (const project of portfolioProjects) {
    console.log(`\n📸 Processing: ${project.name}`);
    console.log(`   URL: ${project.url}`);
    
    try {
      const screenshots = await captureScreenshot(project.url, project.name);
      results.push({
        ...project,
        screenshots,
        capturedAt: new Date().toISOString()
      });
      console.log(`   ✅ Success!\n`);
    } catch (error) {
      console.error(`   ❌ Failed: ${error.message}\n`);
      results.push({
        ...project,
        error: error.message,
        capturedAt: new Date().toISOString()
      });
    }
  }
  
  // Save metadata
  const metadataPath = path.join(__dirname, '..', 'public', 'portfolio-screenshots', 'metadata.json');
  await fs.writeFile(
    metadataPath,
    JSON.stringify(results, null, 2)
  );
  
  console.log('\n📊 Summary:');
  console.log(`   Total projects: ${portfolioProjects.length}`);
  console.log(`   Successful: ${results.filter(r => !r.error).length}`);
  console.log(`   Failed: ${results.filter(r => r.error).length}`);
  console.log(`\n   Metadata saved to: ${metadataPath}`);
  
  return results;
}

// Run if called directly
if (process.argv[1] === __filename) {
  captureAllPortfolioScreenshots()
    .then(() => {
      console.log('\n🎉 Portfolio screenshot capture complete!');
      process.exit(0);
    })
    .catch(error => {
      console.error('\n❌ Portfolio capture failed:', error);
      process.exit(1);
    });
}

export { captureAllPortfolioScreenshots, portfolioProjects };
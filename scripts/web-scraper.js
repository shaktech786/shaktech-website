#!/usr/bin/env node

import puppeteer from 'puppeteer';
import { promises as fs } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function scrapeWebsite(url, options = {}) {
  const {
    extractText = true,
    extractLinks = true,
    extractImages = true,
    extractMeta = true,
    saveScreenshot = false,
    outputFormat = 'json' // json, markdown, or both
  } = options;

  console.log(`🔍 Scraping ${url}...`);
  
  const browser = await puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  try {
    const page = await browser.newPage();
    
    // Set viewport
    await page.setViewport({
      width: 1920,
      height: 1080,
      deviceScaleFactor: 2
    });

    // Navigate to URL
    await page.goto(url, {
      waitUntil: 'networkidle2',
      timeout: 30000
    });

    // Wait for content to load
    await new Promise(resolve => setTimeout(resolve, 2000));

    // Extract data from the page
    const data = await page.evaluate(() => {
      const result = {
        url: window.location.href,
        title: document.title,
        meta: {},
        headings: {},
        text: '',
        links: [],
        images: [],
        structuredData: []
      };

      // Extract meta tags
      const metaTags = document.querySelectorAll('meta');
      metaTags.forEach(tag => {
        const name = tag.getAttribute('name') || tag.getAttribute('property');
        const content = tag.getAttribute('content');
        if (name && content) {
          result.meta[name] = content;
        }
      });

      // Extract headings
      ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'].forEach(tag => {
        const headings = Array.from(document.querySelectorAll(tag));
        if (headings.length > 0) {
          result.headings[tag] = headings.map(h => h.textContent.trim());
        }
      });

      // Extract main text content
      const bodyText = document.body.innerText || document.body.textContent;
      result.text = bodyText.trim();

      // Extract links
      const links = Array.from(document.querySelectorAll('a[href]'));
      result.links = links.map(link => ({
        text: link.textContent.trim(),
        href: link.href,
        title: link.title || null
      }));

      // Extract images
      const images = Array.from(document.querySelectorAll('img'));
      result.images = images.map(img => ({
        src: img.src,
        alt: img.alt || null,
        title: img.title || null,
        width: img.naturalWidth,
        height: img.naturalHeight
      }));

      // Extract structured data (JSON-LD)
      const jsonLdScripts = Array.from(
        document.querySelectorAll('script[type="application/ld+json"]')
      );
      jsonLdScripts.forEach(script => {
        try {
          const data = JSON.parse(script.textContent);
          result.structuredData.push(data);
        } catch {
          // Invalid JSON, skip
        }
      });

      return result;
    });

    // Add extraction timestamp
    data.scrapedAt = new Date().toISOString();
    
    // Filter data based on options
    const filteredData = {
      url: data.url,
      title: data.title,
      scrapedAt: data.scrapedAt
    };

    if (extractMeta) filteredData.meta = data.meta;
    if (extractText) {
      filteredData.headings = data.headings;
      filteredData.text = data.text;
    }
    if (extractLinks) filteredData.links = data.links;
    if (extractImages) filteredData.images = data.images;
    if (data.structuredData.length > 0) {
      filteredData.structuredData = data.structuredData;
    }

    // Save screenshot if requested
    if (saveScreenshot) {
      const screenshotsDir = path.join(__dirname, '..', 'public', 'portfolio-screenshots');
      await fs.mkdir(screenshotsDir, { recursive: true });
      
      const timestamp = Date.now();
      const screenshotPath = path.join(screenshotsDir, `scrape-${timestamp}.png`);
      await page.screenshot({
        path: screenshotPath,
        fullPage: false
      });
      filteredData.screenshot = `scrape-${timestamp}.png`;
      console.log(`   📸 Screenshot saved: ${screenshotPath}`);
    }

    // Create output directory
    const outputDir = path.join(__dirname, '..', 'scraped-data');
    await fs.mkdir(outputDir, { recursive: true });

    // Generate output filename
    const urlObj = new URL(url);
    const safeName = urlObj.hostname.replace(/\./g, '-');
    const timestamp = Date.now();

    // Save as JSON
    if (outputFormat === 'json' || outputFormat === 'both') {
      const jsonPath = path.join(outputDir, `${safeName}-${timestamp}.json`);
      await fs.writeFile(jsonPath, JSON.stringify(filteredData, null, 2));
      console.log(`   📄 JSON saved: ${jsonPath}`);
    }

    // Save as Markdown
    if (outputFormat === 'markdown' || outputFormat === 'both') {
      const markdown = generateMarkdown(filteredData);
      const mdPath = path.join(outputDir, `${safeName}-${timestamp}.md`);
      await fs.writeFile(mdPath, markdown);
      console.log(`   📝 Markdown saved: ${mdPath}`);
    }

    return filteredData;

  } catch (error) {
    console.error(`❌ Error scraping: ${error.message}`);
    throw error;
  } finally {
    await browser.close();
  }
}

function generateMarkdown(data) {
  let md = `# ${data.title}\n\n`;
  md += `**URL:** ${data.url}\n`;
  md += `**Scraped:** ${data.scrapedAt}\n\n`;

  if (data.meta && Object.keys(data.meta).length > 0) {
    md += `## Metadata\n\n`;
    Object.entries(data.meta).forEach(([key, value]) => {
      md += `- **${key}:** ${value}\n`;
    });
    md += '\n';
  }

  if (data.headings) {
    md += `## Document Structure\n\n`;
    Object.entries(data.headings).forEach(([tag, headings]) => {
      if (headings.length > 0) {
        md += `### ${tag.toUpperCase()} Tags\n`;
        headings.forEach(heading => {
          md += `- ${heading}\n`;
        });
        md += '\n';
      }
    });
  }

  if (data.links && data.links.length > 0) {
    md += `## Links (${data.links.length})\n\n`;
    data.links.slice(0, 20).forEach(link => {
      md += `- [${link.text || 'No text'}](${link.href})\n`;
    });
    if (data.links.length > 20) {
      md += `\n*... and ${data.links.length - 20} more links*\n`;
    }
    md += '\n';
  }

  if (data.images && data.images.length > 0) {
    md += `## Images (${data.images.length})\n\n`;
    data.images.slice(0, 10).forEach(img => {
      md += `- ${img.alt || 'No alt text'} (${img.width}x${img.height})\n`;
    });
    if (data.images.length > 10) {
      md += `\n*... and ${data.images.length - 10} more images*\n`;
    }
    md += '\n';
  }

  if (data.text) {
    md += `## Content Preview\n\n`;
    md += data.text.substring(0, 1000);
    if (data.text.length > 1000) {
      md += `\n\n*... ${data.text.length - 1000} more characters*`;
    }
  }

  return md;
}

// CLI usage
if (process.argv[2]) {
  const url = process.argv[2];
  const format = process.argv[3] || 'both';
  const screenshot = process.argv[4] === '--screenshot';
  
  scrapeWebsite(url, {
    outputFormat: format,
    saveScreenshot: screenshot
  })
    .then(() => {
      console.log('✅ Scraping complete!');
      process.exit(0);
    })
    .catch(error => {
      console.error('Failed:', error);
      process.exit(1);
    });
} else {
  console.log(`
Usage: node web-scraper.js <url> [format] [--screenshot]

Arguments:
  url          The URL to scrape
  format       Output format: json, markdown, or both (default: both)
  --screenshot Save a screenshot along with the scraped data

Examples:
  node web-scraper.js https://example.com
  node web-scraper.js https://example.com json
  node web-scraper.js https://example.com both --screenshot

Output:
  Files are saved to: scraped-data/
  Screenshots (if enabled) are saved to: public/portfolio-screenshots/
  `);
  process.exit(1);
}

export { scrapeWebsite };
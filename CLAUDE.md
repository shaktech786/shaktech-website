# ShakTech Website - Claude Code Instructions

## 🖼️ SCREENSHOT & WEB SCRAPING TOOLS - ALWAYS AVAILABLE

### Screenshot Capture Tool
This project has a powerful Puppeteer-based screenshot tool that can capture any website.

**Commands:**
```bash
# Capture individual website
npm run screenshot <url> <output-name>

# Capture all portfolio items
npm run portfolio:screenshots

# Direct execution
node /Users/shakeelbhamani/projects/personal/shaktech-website/scripts/capture-screenshot.js <url> <name>
```

**Examples:**
```bash
npm run screenshot https://example.com example-site
npm run screenshot https://github.com/user github-profile
```

**Output Location:** 
- `/public/portfolio-screenshots/`
- Creates: `{name}-full.png`, `{name}-viewport.png`, `{name}-mobile.png`
- Metadata saved in `metadata.json`

### Web Scraper Tool
Extract content, text, and data from websites.

**Commands:**
```bash
# Scrape website content
npm run scrape <url>

# Extract structured data
npm run scrape:json <url>
```

### When User Asks For:
- "Take a screenshot of..." → Use `npm run screenshot`
- "Capture this website..." → Use `npm run screenshot`
- "Get content from..." → Use web scraper
- "Show me how X looks..." → Take screenshot and display path
- "Add to portfolio..." → Use `npm run portfolio:screenshots`

## Project-Specific Notes
- All screenshot tools are pre-installed with Puppeteer
- No additional setup needed
- Screenshots are automatically optimized for web display
- Supports retina quality (2x device scale factor)

## Available NPM Scripts
- `npm run screenshot` - Capture any website
- `npm run portfolio:screenshots` - Batch capture portfolio items
- `npm run scrape` - Extract web content (coming soon)
- `npm run dev` - Start development server
- `npm run build` - Build for production
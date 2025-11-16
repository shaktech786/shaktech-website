import puppeteer from 'puppeteer';
import fs from 'fs';
import path from 'path';

class EklipseAnalyzer {
    constructor() {
        this.browser = null;
        this.page = null;
        this.screenshotDir = '/Users/shakeelbhamani/projects/personal/shaktech-website/public/portfolio-screenshots/eklipse-authenticated';
        this.credentials = {
            email: 'dhzwixadjb@gmail.com',
            password: 'C6vCk3mmPib9pCD'
        };
        this.analysis = {
            metadata: {
                timestamp: new Date().toISOString(),
                baseUrl: 'https://app.eklipse.gg',
                analysisType: 'authenticated'
            },
            authentication: {},
            dashboard: {},
            features: {},
            userFlows: [],
            uiPatterns: {},
            technicalDetails: {}
        };
    }

    async init() {
        // Ensure screenshot directory exists
        if (!fs.existsSync(this.screenshotDir)) {
            fs.mkdirSync(this.screenshotDir, { recursive: true });
        }

        // Launch browser with persistent session
        this.browser = await puppeteer.launch({
            headless: false, // Set to true for production
            defaultViewport: { width: 1920, height: 1080 },
            userDataDir: '/tmp/eklipse-session',
            args: ['--no-sandbox', '--disable-setuid-sandbox']
        });

        this.page = await this.browser.newPage();
        await this.page.setViewport({ width: 1920, height: 1080 });

        // Set user agent to avoid bot detection
        await this.page.setUserAgent('Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36');
    }

    async takeScreenshot(name, description = '') {
        const timestamp = Date.now();
        const filename = `${name}-${timestamp}.png`;
        const filepath = path.join(this.screenshotDir, filename);

        await this.page.screenshot({
            path: filepath,
            fullPage: true,
            type: 'png'
        });

        console.log(`📸 Screenshot captured: ${filename} - ${description}`);
        return { filename, filepath, description, timestamp };
    }

    async login() {
        console.log('🔐 Starting authentication process...');

        try {
            // Navigate to login page
            await this.page.goto('https://app.eklipse.gg', {
                waitUntil: 'networkidle0',
                timeout: 30000
            });

            // Accept cookies if present
            try {
                await this.page.waitForSelector('button:contains("Accept")', { timeout: 3000 });
                await this.page.click('button:contains("Accept")');
            } catch (e) {
                console.log('No cookie banner found');
            }

            await this.takeScreenshot('01-login-page', 'Initial login page before authentication');

            // Wait for email input and fill credentials
            await this.page.waitForSelector('input[type="email"], input[placeholder*="Email"]', { timeout: 10000 });

            // Clear and fill email
            const emailSelector = 'input[type="email"], input[placeholder*="Email"]';
            await this.page.click(emailSelector);
            await this.page.keyboard.down('Control');
            await this.page.keyboard.press('a');
            await this.page.keyboard.up('Control');
            await this.page.type(emailSelector, this.credentials.email);

            // Fill password
            const passwordSelector = 'input[type="password"], input[placeholder*="Password"]';
            await this.page.click(passwordSelector);
            await this.page.keyboard.down('Control');
            await this.page.keyboard.press('a');
            await this.page.keyboard.up('Control');
            await this.page.type(passwordSelector, this.credentials.password);

            await this.takeScreenshot('02-credentials-filled', 'Login form with credentials filled');

            // Click sign in button
            const signInButton = await this.page.waitForSelector('button:contains("Sign In"), [type="submit"]', { timeout: 5000 });
            await signInButton.click();

            console.log('🔄 Waiting for authentication...');

            // Wait for navigation after login
            try {
                await this.page.waitForNavigation({
                    waitUntil: 'networkidle0',
                    timeout: 15000
                });
            } catch (e) {
                console.log('Navigation timeout, checking current page...');
            }

            // Check if we're logged in by looking for dashboard elements
            const currentUrl = this.page.url();
            console.log(`Current URL after login attempt: ${currentUrl}`);

            await this.takeScreenshot('03-post-login', 'Page state after login attempt');

            // Look for indicators of successful login
            const loginSuccess = await this.page.evaluate(() => {
                // Check for dashboard elements, user profile, or logged-in indicators
                const indicators = [
                    document.querySelector('[data-testid="dashboard"]'),
                    document.querySelector('.dashboard'),
                    document.querySelector('[class*="dashboard"]'),
                    document.querySelector('nav'),
                    document.querySelector('[class*="sidebar"]'),
                    document.querySelector('[data-testid="user-menu"]'),
                    document.querySelector('[class*="user-menu"]')
                ];
                return indicators.some(el => el !== null);
            });

            if (loginSuccess || currentUrl.includes('dashboard') || currentUrl.includes('app')) {
                console.log('✅ Authentication successful!');
                this.analysis.authentication = {
                    success: true,
                    method: 'email/password',
                    finalUrl: currentUrl,
                    timestamp: new Date().toISOString()
                };
                return true;
            } else {
                console.log('❌ Authentication may have failed, but continuing analysis...');
                this.analysis.authentication = {
                    success: false,
                    method: 'email/password',
                    finalUrl: currentUrl,
                    timestamp: new Date().toISOString()
                };
                return false;
            }

        } catch (error) {
            console.error('❌ Login error:', error.message);
            this.analysis.authentication = {
                success: false,
                error: error.message,
                timestamp: new Date().toISOString()
            };
            return false;
        }
    }

    async analyzeDashboard() {
        console.log('📊 Analyzing dashboard...');

        try {
            await this.takeScreenshot('04-dashboard-main', 'Main dashboard view');

            // Extract dashboard information
            const dashboardData = await this.page.evaluate(() => {
                const navigation = Array.from(document.querySelectorAll('nav a, [role="navigation"] a, [class*="nav"] a')).map(el => ({
                    text: el.textContent.trim(),
                    href: el.href,
                    isActive: el.classList.contains('active') || el.getAttribute('aria-current') === 'page'
                }));

                const buttons = Array.from(document.querySelectorAll('button')).map(btn => ({
                    text: btn.textContent.trim(),
                    type: btn.type,
                    disabled: btn.disabled,
                    classes: btn.className
                }));

                const sections = Array.from(document.querySelectorAll('section, [class*="section"], [data-testid], main > div')).map(section => ({
                    tagName: section.tagName,
                    classes: section.className,
                    id: section.id,
                    testId: section.getAttribute('data-testid'),
                    text: section.textContent.trim().substring(0, 100)
                }));

                return {
                    title: document.title,
                    url: window.location.href,
                    navigation,
                    buttons: buttons.slice(0, 20), // Limit to first 20
                    sections: sections.slice(0, 10), // Limit to first 10
                    hasUserProfile: !!document.querySelector('[class*="profile"], [data-testid*="profile"], [class*="user"]'),
                    hasNotifications: !!document.querySelector('[class*="notification"], [data-testid*="notification"]'),
                    hasSidebar: !!document.querySelector('[class*="sidebar"], [role="complementary"]')
                };
            });

            this.analysis.dashboard = dashboardData;
            console.log('✅ Dashboard analysis complete');

        } catch (error) {
            console.error('❌ Dashboard analysis error:', error.message);
            this.analysis.dashboard = { error: error.message };
        }
    }

    async exploreFeatures() {
        console.log('🔍 Exploring features...');

        const featuresToTest = [
            { name: 'AI Highlights', selectors: ['[href*="highlight"]', 'button:contains("Highlights")', '[data-testid*="highlight"]'] },
            { name: 'AI Edit', selectors: ['[href*="edit"]', 'button:contains("Edit")', '[data-testid*="edit"]'] },
            { name: 'Upload', selectors: ['[href*="upload"]', 'button:contains("Upload")', 'input[type="file"]'] },
            { name: 'Stream Connect', selectors: ['[href*="stream"]', 'button:contains("Stream")', '[data-testid*="stream"]'] },
            { name: 'Settings', selectors: ['[href*="setting"]', 'button:contains("Settings")', '[data-testid*="setting"]'] },
            { name: 'Profile', selectors: ['[href*="profile"]', 'button:contains("Profile")', '[data-testid*="profile"]'] }
        ];

        for (const feature of featuresToTest) {
            try {
                console.log(`Testing ${feature.name}...`);

                let elementFound = false;
                for (const selector of feature.selectors) {
                    try {
                        const element = await this.page.$(selector);
                        if (element) {
                            console.log(`Found ${feature.name} with selector: ${selector}`);
                            await element.click();
                            await this.page.waitForTimeout(2000); // Wait for page changes

                            await this.takeScreenshot(`05-feature-${feature.name.toLowerCase().replace(' ', '-')}`, `${feature.name} feature interface`);

                            // Capture feature-specific data
                            const featureData = await this.page.evaluate(() => ({
                                title: document.title,
                                url: window.location.href,
                                mainContent: document.querySelector('main, [role="main"]')?.textContent.trim().substring(0, 200) || 'Not found',
                                forms: Array.from(document.querySelectorAll('form')).length,
                                buttons: Array.from(document.querySelectorAll('button')).length
                            }));

                            this.analysis.features[feature.name] = featureData;
                            elementFound = true;
                            break;
                        }
                    } catch (e) {
                        // Continue to next selector
                    }
                }

                if (!elementFound) {
                    console.log(`❌ ${feature.name} not found`);
                    this.analysis.features[feature.name] = { found: false };
                }

                // Navigate back to dashboard
                try {
                    await this.page.goBack();
                    await this.page.waitForTimeout(1000);
                } catch (e) {
                    // If back doesn't work, navigate to base URL
                    await this.page.goto('https://app.eklipse.gg');
                    await this.page.waitForTimeout(2000);
                }

            } catch (error) {
                console.error(`❌ Error testing ${feature.name}:`, error.message);
                this.analysis.features[feature.name] = { error: error.message };
            }
        }
    }

    async analyzeUserFlow() {
        console.log('🔄 Analyzing user flows...');

        try {
            // Test typical user flow: Upload → Edit → Share
            const userFlow = {
                name: 'Content Creation Flow',
                steps: [],
                screenshots: []
            };

            // Step 1: Try to find upload functionality
            try {
                const uploadElement = await this.page.$('[href*="upload"], button:contains("Upload"), [data-testid*="upload"]');
                if (uploadElement) {
                    await uploadElement.click();
                    await this.page.waitForTimeout(2000);

                    const screenshot = await this.takeScreenshot('06-flow-upload', 'Upload interface in user flow');
                    userFlow.steps.push({
                        step: 'Upload',
                        success: true,
                        url: this.page.url(),
                        screenshot: screenshot.filename
                    });
                }
            } catch (e) {
                userFlow.steps.push({ step: 'Upload', success: false, error: e.message });
            }

            this.analysis.userFlows.push(userFlow);

        } catch (error) {
            console.error('❌ User flow analysis error:', error.message);
        }
    }

    async captureUIPatterns() {
        console.log('🎨 Capturing UI patterns...');

        try {
            const uiPatterns = await this.page.evaluate(() => {
                // Extract color scheme
                const computedStyle = getComputedStyle(document.body);
                const colorScheme = {
                    background: computedStyle.backgroundColor,
                    color: computedStyle.color,
                    primaryColor: getComputedStyle(document.querySelector('button, [class*="primary"]') || document.body).backgroundColor
                };

                // Extract typography
                const typography = {
                    fontFamily: computedStyle.fontFamily,
                    fontSize: computedStyle.fontSize,
                    fontWeight: computedStyle.fontWeight
                };

                // Extract component patterns
                const components = {
                    buttons: Array.from(document.querySelectorAll('button')).slice(0, 10).map(btn => ({
                        text: btn.textContent.trim(),
                        classes: btn.className,
                        type: btn.type
                    })),
                    inputs: Array.from(document.querySelectorAll('input')).slice(0, 10).map(input => ({
                        type: input.type,
                        placeholder: input.placeholder,
                        classes: input.className
                    }))
                };

                return { colorScheme, typography, components };
            });

            this.analysis.uiPatterns = uiPatterns;
            await this.takeScreenshot('07-ui-patterns', 'UI patterns and design system');

        } catch (error) {
            console.error('❌ UI patterns analysis error:', error.message);
        }
    }

    async saveAnalysis() {
        const analysisPath = path.join(this.screenshotDir, 'eklipse-authenticated-analysis.json');
        fs.writeFileSync(analysisPath, JSON.stringify(this.analysis, null, 2));
        console.log(`📝 Analysis saved to: ${analysisPath}`);
    }

    async cleanup() {
        if (this.browser) {
            await this.browser.close();
        }
    }

    async run() {
        try {
            await this.init();
            console.log('🚀 Starting Eklipse.gg authenticated analysis...');

            const loginSuccess = await this.login();

            if (loginSuccess) {
                await this.analyzeDashboard();
                await this.exploreFeatures();
                await this.analyzeUserFlow();
                await this.captureUIPatterns();
            } else {
                console.log('⚠️ Continuing with limited analysis due to authentication issues...');
                // Still try to analyze what we can see
                await this.analyzeDashboard();
            }

            await this.saveAnalysis();
            console.log('✅ Eklipse.gg authenticated analysis complete!');

            return this.analysis;

        } catch (error) {
            console.error('❌ Analysis failed:', error);
            throw error;
        } finally {
            await this.cleanup();
        }
    }
}

// Run the analysis
const analyzer = new EklipseAnalyzer();
analyzer.run().then((analysis) => {
    console.log('📊 Analysis Summary:');
    console.log(`- Authentication: ${analysis.authentication.success ? '✅' : '❌'}`);
    console.log(`- Features discovered: ${Object.keys(analysis.features).length}`);
    console.log(`- User flows mapped: ${analysis.userFlows.length}`);
    console.log(`- Screenshots captured: Check ${analyzer.screenshotDir}`);
}).catch(error => {
    console.error('Fatal error:', error);
    process.exit(1);
});
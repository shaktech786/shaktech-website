import puppeteer from 'puppeteer';
import fs from 'fs';
import path from 'path';

class EklipseManualAuth {
    constructor() {
        this.browser = null;
        this.page = null;
        this.screenshotDir = '/Users/shakeelbhamani/projects/personal/shaktech-website/public/portfolio-screenshots/eklipse-authenticated';
        this.credentials = {
            email: 'dhzwixadjb@gmail.com',
            password: 'C6vCk3mmPib9pCD'
        };
    }

    async init() {
        // Ensure screenshot directory exists
        if (!fs.existsSync(this.screenshotDir)) {
            fs.mkdirSync(this.screenshotDir, { recursive: true });
        }

        // Launch browser with visible window for debugging
        this.browser = await puppeteer.launch({
            headless: false, // Keep visible for debugging
            defaultViewport: { width: 1920, height: 1080 },
            slowMo: 100, // Slow down for debugging
            args: [
                '--no-sandbox',
                '--disable-setuid-sandbox',
                '--disable-web-security',
                '--disable-features=VizDisplayCompositor'
            ]
        });

        this.page = await this.browser.newPage();
        await this.page.setViewport({ width: 1920, height: 1080 });

        // Set user agent
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

    async manualLogin() {
        console.log('🔐 Starting manual authentication process...');

        try {
            // Navigate to login page
            console.log('Navigating to app.eklipse.gg...');
            await this.page.goto('https://app.eklipse.gg', {
                waitUntil: 'domcontentloaded',
                timeout: 30000
            });

            // Wait a moment for page to load
            await this.page.waitForTimeout(3000);

            await this.takeScreenshot('manual-01-initial-page', 'Initial page load');

            // Accept cookies if present
            try {
                const acceptButton = await this.page.waitForSelector('button:contains("Accept"), [data-testid="accept-cookies"]', { timeout: 3000 });
                if (acceptButton) {
                    await acceptButton.click();
                    console.log('Accepted cookies');
                }
            } catch (e) {
                console.log('No cookie banner found or already accepted');
            }

            // Look for email input field with multiple selectors
            console.log('Looking for email input field...');
            const emailSelectors = [
                'input[type="email"]',
                'input[placeholder*="email" i]',
                'input[placeholder*="Email"]',
                'input[name="email"]',
                'input[id*="email"]'
            ];

            let emailInput = null;
            for (const selector of emailSelectors) {
                try {
                    emailInput = await this.page.waitForSelector(selector, { timeout: 2000 });
                    if (emailInput) {
                        console.log(`Found email input with selector: ${selector}`);
                        break;
                    }
                } catch (e) {
                    continue;
                }
            }

            if (!emailInput) {
                console.log('❌ Email input not found, taking screenshot for debugging');
                await this.takeScreenshot('manual-02-no-email-input', 'No email input found');
                return false;
            }

            // Fill email
            console.log('Filling email...');
            await emailInput.click();
            await this.page.keyboard.selectAll();
            await this.page.type('input[type="email"], input[placeholder*="email" i]', this.credentials.email, { delay: 50 });

            // Look for password field
            console.log('Looking for password input field...');
            const passwordSelectors = [
                'input[type="password"]',
                'input[placeholder*="password" i]',
                'input[placeholder*="Password"]',
                'input[name="password"]',
                'input[id*="password"]'
            ];

            let passwordInput = null;
            for (const selector of passwordSelectors) {
                try {
                    passwordInput = await this.page.waitForSelector(selector, { timeout: 2000 });
                    if (passwordInput) {
                        console.log(`Found password input with selector: ${selector}`);
                        break;
                    }
                } catch (e) {
                    continue;
                }
            }

            if (!passwordInput) {
                console.log('❌ Password input not found');
                await this.takeScreenshot('manual-03-no-password-input', 'No password input found');
                return false;
            }

            // Fill password
            console.log('Filling password...');
            await passwordInput.click();
            await this.page.keyboard.selectAll();
            await this.page.type('input[type="password"]', this.credentials.password, { delay: 50 });

            await this.takeScreenshot('manual-04-credentials-filled', 'Credentials filled in form');

            // Look for submit button
            console.log('Looking for submit button...');
            const submitSelectors = [
                'button[type="submit"]',
                'button:contains("Sign In")',
                'button:contains("Login")',
                'button:contains("Log In")',
                'input[type="submit"]',
                '[data-testid="login-button"]',
                '[data-testid="submit-button"]'
            ];

            let submitButton = null;
            for (const selector of submitSelectors) {
                try {
                    submitButton = await this.page.$(selector);
                    if (submitButton) {
                        console.log(`Found submit button with selector: ${selector}`);
                        break;
                    }
                } catch (e) {
                    continue;
                }
            }

            if (!submitButton) {
                // Try to find any button that might be the submit button
                const buttons = await this.page.$$('button');
                for (const button of buttons) {
                    const text = await this.page.evaluate(el => el.textContent.trim().toLowerCase(), button);
                    if (text.includes('sign') || text.includes('login') || text.includes('submit')) {
                        submitButton = button;
                        console.log(`Found submit button by text: ${text}`);
                        break;
                    }
                }
            }

            if (!submitButton) {
                console.log('❌ Submit button not found');
                await this.takeScreenshot('manual-05-no-submit-button', 'No submit button found');
                return false;
            }

            // Click submit
            console.log('Clicking submit button...');
            await submitButton.click();

            console.log('⏳ Waiting for authentication response...');

            // Wait for navigation or page change
            try {
                await Promise.race([
                    this.page.waitForNavigation({ waitUntil: 'domcontentloaded', timeout: 15000 }),
                    this.page.waitForSelector('[data-testid="dashboard"], .dashboard, nav', { timeout: 15000 })
                ]);
            } catch (e) {
                console.log('No immediate navigation detected, checking current state...');
            }

            await this.page.waitForTimeout(3000);
            await this.takeScreenshot('manual-06-post-login', 'State after login attempt');

            // Check current URL and page state
            const currentUrl = this.page.url();
            console.log(`Current URL: ${currentUrl}`);

            // Check for success indicators
            const successIndicators = await this.page.evaluate(() => {
                const indicators = {
                    urlChanged: !window.location.href.includes('login') && !window.location.href.includes('auth'),
                    hasDashboard: !!document.querySelector('[data-testid="dashboard"], .dashboard, [class*="dashboard"]'),
                    hasNavigation: !!document.querySelector('nav, [role="navigation"]'),
                    hasUserMenu: !!document.querySelector('[data-testid="user-menu"], [class*="user-menu"], [class*="profile"]'),
                    hasLogoutButton: !!document.querySelector('button:contains("Logout"), button:contains("Sign Out")'),
                    noLoginForm: !document.querySelector('input[type="password"]'),
                    title: document.title
                };
                return indicators;
            });

            console.log('Success indicators:', successIndicators);

            const isLoggedIn = successIndicators.urlChanged ||
                              successIndicators.hasDashboard ||
                              successIndicators.hasNavigation ||
                              successIndicators.noLoginForm;

            if (isLoggedIn) {
                console.log('✅ Authentication appears successful!');
                await this.takeScreenshot('manual-07-authenticated-state', 'Successfully authenticated state');
                return true;
            } else {
                console.log('❌ Authentication may have failed');

                // Check for error messages
                const errorMessage = await this.page.evaluate(() => {
                    const errorSelectors = [
                        '[class*="error"]',
                        '[data-testid*="error"]',
                        '.alert',
                        '[role="alert"]',
                        '.message'
                    ];

                    for (const selector of errorSelectors) {
                        const element = document.querySelector(selector);
                        if (element && element.textContent.trim()) {
                            return element.textContent.trim();
                        }
                    }
                    return null;
                });

                if (errorMessage) {
                    console.log(`Error message found: ${errorMessage}`);
                }

                await this.takeScreenshot('manual-08-login-failed', 'Login failed state');
                return false;
            }

        } catch (error) {
            console.error('❌ Login error:', error.message);
            await this.takeScreenshot('manual-09-error', 'Error state');
            return false;
        }
    }

    async exploreDashboard() {
        console.log('🏠 Exploring dashboard...');

        try {
            // Take comprehensive dashboard screenshot
            await this.takeScreenshot('dashboard-01-overview', 'Main dashboard overview');

            // Extract all navigation links
            const navigation = await this.page.evaluate(() => {
                const links = Array.from(document.querySelectorAll('a, [role="button"]')).map(el => ({
                    text: el.textContent.trim(),
                    href: el.href || el.getAttribute('data-href') || 'javascript:void(0)',
                    classes: el.className,
                    id: el.id,
                    dataTestId: el.getAttribute('data-testid')
                })).filter(link => link.text.length > 0 && link.text.length < 100);

                const buttons = Array.from(document.querySelectorAll('button')).map(btn => ({
                    text: btn.textContent.trim(),
                    type: btn.type,
                    classes: btn.className,
                    id: btn.id,
                    dataTestId: btn.getAttribute('data-testid')
                })).filter(btn => btn.text.length > 0 && btn.text.length < 100);

                return { links, buttons };
            });

            console.log(`Found ${navigation.links.length} links and ${navigation.buttons.length} buttons`);

            // Save navigation data
            const navData = {
                timestamp: new Date().toISOString(),
                url: this.page.url(),
                navigation
            };

            fs.writeFileSync(
                path.join(this.screenshotDir, 'navigation-data.json'),
                JSON.stringify(navData, null, 2)
            );

            return navigation;

        } catch (error) {
            console.error('❌ Dashboard exploration error:', error.message);
            return null;
        }
    }

    async exploreFeatures(navigation) {
        console.log('🔍 Exploring key features...');

        const featureKeywords = [
            'highlight', 'edit', 'upload', 'create', 'stream', 'clip',
            'video', 'ai', 'montage', 'setting', 'profile', 'library'
        ];

        const interestingLinks = navigation?.links?.filter(link =>
            featureKeywords.some(keyword =>
                link.text.toLowerCase().includes(keyword) ||
                link.href.toLowerCase().includes(keyword)
            )
        ) || [];

        console.log(`Found ${interestingLinks.length} interesting feature links`);

        for (const link of interestingLinks.slice(0, 5)) { // Limit to first 5
            try {
                console.log(`Exploring: ${link.text} (${link.href})`);

                if (link.href && link.href !== 'javascript:void(0)' && !link.href.includes('#')) {
                    await this.page.goto(link.href, { waitUntil: 'domcontentloaded', timeout: 10000 });
                    await this.page.waitForTimeout(2000);

                    const safeFileName = link.text.toLowerCase().replace(/[^a-z0-9]/g, '-');
                    await this.takeScreenshot(`feature-${safeFileName}`, `Feature: ${link.text}`);

                    // Go back to dashboard
                    await this.page.goBack();
                    await this.page.waitForTimeout(1000);
                }
            } catch (error) {
                console.log(`❌ Error exploring ${link.text}: ${error.message}`);
            }
        }
    }

    async cleanup() {
        console.log('🧹 Cleaning up...');
        if (this.browser) {
            await this.browser.close();
        }
    }

    async run() {
        try {
            await this.init();
            console.log('🚀 Starting manual Eklipse.gg authentication...');

            const loginSuccess = await this.manualLogin();

            if (loginSuccess) {
                console.log('✅ Authentication successful! Exploring dashboard...');
                const navigation = await this.exploreDashboard();
                await this.exploreFeatures(navigation);

                console.log('✅ Manual analysis complete!');
                console.log(`📁 Screenshots saved to: ${this.screenshotDir}`);

                return true;
            } else {
                console.log('❌ Authentication failed. Manual intervention may be required.');
                console.log('💡 The browser window is still open for manual inspection.');

                // Keep browser open for manual inspection
                console.log('Press Ctrl+C to close browser and exit...');

                return false;
            }

        } catch (error) {
            console.error('❌ Analysis failed:', error);
            throw error;
        }
    }
}

// Run the analysis
const analyzer = new EklipseManualAuth();
analyzer.run()
    .then((success) => {
        if (!success) {
            console.log('🔧 You can now manually log in using the open browser window.');
            console.log('🔧 After logging in manually, press Ctrl+C to continue with automated exploration.');
        }
    })
    .catch(error => {
        console.error('Fatal error:', error);
        process.exit(1);
    });
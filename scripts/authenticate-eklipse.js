import puppeteer from 'puppeteer';
import fs from 'fs';
import path from 'path';

async function authenticateEklipse() {
    const browser = await puppeteer.launch({
        headless: false, // Show browser for debugging
        defaultViewport: { width: 1920, height: 1080 },
        args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-dev-shm-usage']
    });

    let page;
    let authSuccess = false;
    let errorDetails = null;
    let finalUrl = null;

    try {
        page = await browser.newPage();

        // Set user agent
        await page.setUserAgent('Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36');

        console.log('📍 Navigating to login page...');
        await page.goto('https://app.eklipse.gg/login', {
            waitUntil: 'networkidle0',
            timeout: 30000
        });

        // Wait for login form to be visible
        console.log('⏳ Waiting for login form...');
        await page.waitForSelector('input[type="email"], input[placeholder*="Email"], input[name*="email"]', { timeout: 10000 });
        await page.waitForSelector('input[type="password"], input[placeholder*="Password"], input[name*="password"]', { timeout: 10000 });

        // Take screenshot before login
        await page.screenshot({
            path: '/Users/shakeelbhamani/projects/personal/web-research/eklipse/screenshots/before-login.png',
            fullPage: true
        });

        console.log('🔑 Entering credentials...');

        // Clear and fill email field
        const emailSelector = 'input[type="email"], input[placeholder*="Email"], input[name*="email"]';
        await page.focus(emailSelector);
        await page.evaluate((selector) => {
            document.querySelector(selector).value = '';
        }, emailSelector);
        await page.type(emailSelector, 'dhzwixadjb@gmail.com', { delay: 100 });

        // Clear and fill password field
        const passwordSelector = 'input[type="password"], input[placeholder*="Password"], input[name*="password"]';
        await page.focus(passwordSelector);
        await page.evaluate((selector) => {
            document.querySelector(selector).value = '';
        }, passwordSelector);
        await page.type(passwordSelector, 'C6vCk3mmPib9pCD', { delay: 100 });

        // Take screenshot with filled form
        await page.screenshot({
            path: '/Users/shakeelbhamani/projects/personal/web-research/eklipse/screenshots/form-filled.png',
            fullPage: true
        });

        console.log('🚀 Attempting login...');

        // Click login button - try multiple selectors
        let loginClicked = false;
        const loginSelectors = [
            'button:has-text("Sign In")',
            'button[type="submit"]',
            'button:contains("Sign In")',
            '.sign-in-button',
            '.login-button',
            'button[class*="sign"]'
        ];

        for (const selector of loginSelectors) {
            try {
                await page.click(selector);
                loginClicked = true;
                console.log(`✅ Clicked login with selector: ${selector}`);
                break;
            } catch (e) {
                console.log(`❌ Failed to click with selector: ${selector}`);
            }
        }

        if (!loginClicked) {
            // Try JavaScript click as fallback
            await page.evaluate(() => {
                const buttons = Array.from(document.querySelectorAll('button'));
                const loginButton = buttons.find(btn =>
                    btn.textContent.toLowerCase().includes('sign in') ||
                    btn.textContent.toLowerCase().includes('login') ||
                    btn.type === 'submit'
                );
                if (loginButton) {
                    loginButton.click();
                    return true;
                }
                return false;
            });
        }

        // Wait for authentication result
        console.log('⏳ Waiting for authentication result...');

        try {
            // Wait for navigation or stay on page for 10 seconds
            await Promise.race([
                page.waitForNavigation({ waitUntil: 'networkidle0', timeout: 15000 }),
                page.waitForTimeout(10000)
            ]);

            finalUrl = page.url();
            console.log(`📍 Final URL: ${finalUrl}`);

            // Check for error messages
            const errorElements = await page.$$('.error, .alert-error, [class*="error"], .invalid-feedback, [role="alert"]');
            if (errorElements.length > 0) {
                const errorTexts = await Promise.all(
                    errorElements.map(el => page.evaluate(element => element.textContent, el))
                );
                errorDetails = errorTexts.filter(text => text.trim()).join('; ');
                console.log(`❌ Error messages found: ${errorDetails}`);
            }

            // Enhanced success detection
            if (finalUrl.includes('/login')) {
                console.log('❌ Still on login page - authentication failed');
                authSuccess = false;
            } else if (finalUrl.includes('/dashboard') || finalUrl.includes('/app') || finalUrl.includes('/home')) {
                console.log('✅ Redirected to dashboard - authentication succeeded');
                authSuccess = true;
            } else {
                // Check for dashboard indicators in the page content
                const pageContent = await page.content();
                const dashboardIndicators = [
                    'dashboard', 'welcome', 'logout', 'profile', 'settings',
                    'clips', 'highlights', 'library', 'create'
                ];

                const hasDashboardContent = dashboardIndicators.some(indicator =>
                    pageContent.toLowerCase().includes(indicator)
                );

                if (hasDashboardContent) {
                    console.log('✅ Dashboard content detected - authentication likely succeeded');
                    authSuccess = true;
                } else {
                    console.log('❓ Unclear authentication status');
                    authSuccess = false;
                }
            }

        } catch (waitError) {
            console.log(`⚠️ Navigation timeout: ${waitError.message}`);
            finalUrl = page.url();

            // Even with timeout, check if we're authenticated
            if (!finalUrl.includes('/login')) {
                authSuccess = true;
                console.log('✅ Despite timeout, appears to be authenticated (not on login page)');
            }
        }

        // Take screenshot after login attempt
        await page.screenshot({
            path: '/Users/shakeelbhamani/projects/personal/web-research/eklipse/screenshots/after-login.png',
            fullPage: true
        });

        if (authSuccess) {
            console.log('🎉 Authentication successful! Exploring dashboard...');

            // Wait for content to load
            await page.waitForTimeout(5000);

            // Take dashboard screenshot
            await page.screenshot({
                path: '/Users/shakeelbhamani/projects/personal/web-research/eklipse/screenshots/dashboard.png',
                fullPage: true
            });

            // Extract comprehensive dashboard information
            const dashboardInfo = await page.evaluate(() => {
                const getTextContent = (selector) => {
                    const el = document.querySelector(selector);
                    return el ? el.textContent.trim() : null;
                };

                const getAllText = (selector) => {
                    return Array.from(document.querySelectorAll(selector))
                        .map(el => el.textContent.trim())
                        .filter(text => text.length > 0);
                };

                const getAllLinks = () => {
                    return Array.from(document.querySelectorAll('a[href]')).map(a => ({
                        text: a.textContent.trim(),
                        href: a.href,
                        internal: a.href.includes('eklipse.gg')
                    })).filter(link => link.text && link.text.length > 0);
                };

                const getButtons = () => {
                    return Array.from(document.querySelectorAll('button')).map(btn => ({
                        text: btn.textContent.trim(),
                        classes: btn.className,
                        type: btn.type
                    })).filter(btn => btn.text);
                };

                const getFormFields = () => {
                    return Array.from(document.querySelectorAll('input, select, textarea')).map(field => ({
                        type: field.type,
                        name: field.name,
                        placeholder: field.placeholder,
                        id: field.id
                    }));
                };

                return {
                    title: document.title,
                    url: window.location.href,
                    headings: getAllText('h1, h2, h3, h4, h5, h6'),
                    navigation: getAllText('nav a, .nav a, [class*="nav"] a, [class*="menu"] a'),
                    allLinks: getAllLinks(),
                    buttons: getButtons(),
                    formFields: getFormFields(),
                    userInfo: {
                        username: getTextContent('.user-name, .username, [class*="user"]'),
                        profile: getTextContent('.profile, [class*="profile"]'),
                        avatar: document.querySelector('.avatar, [class*="avatar"]')?.src
                    },
                    features: getAllText('.feature, .card, [class*="tool"], [class*="feature"]'),
                    mainContent: getAllText('main, .main, .content, [class*="content"]').slice(0, 20),
                    sidebar: getAllText('.sidebar, [class*="sidebar"]'),
                    footerInfo: getAllText('footer, .footer')
                };
            });

            // Save dashboard data
            fs.writeFileSync(
                '/Users/shakeelbhamani/projects/personal/web-research/eklipse/data/dashboard-data.json',
                JSON.stringify(dashboardInfo, null, 2)
            );

            console.log('💾 Dashboard data saved to dashboard-data.json');
        }

    } catch (error) {
        console.error(`❌ Authentication error: ${error.message}`);
        errorDetails = error.message;

        if (page) {
            await page.screenshot({
                path: '/Users/shakeelbhamani/projects/personal/web-research/eklipse/screenshots/error.png',
                fullPage: true
            });
        }
    } finally {
        // Keep browser open for 10 seconds for manual inspection
        console.log('🔍 Keeping browser open for 10 seconds for manual inspection...');
        await new Promise(resolve => setTimeout(resolve, 10000));

        await browser.close();
    }

    // Return authentication result
    const result = {
        success: authSuccess,
        error: errorDetails,
        finalUrl: finalUrl,
        timestamp: new Date().toISOString(),
        credentials: {
            email: 'dhzwixadjb@gmail.com',
            passwordLength: 'C6vCk3mmPib9pCD'.length
        }
    };

    // Save authentication result
    fs.writeFileSync(
        '/Users/shakeelbhamani/projects/personal/web-research/eklipse/auth-tests/auth-result.json',
        JSON.stringify(result, null, 2)
    );

    console.log('📋 Final authentication result:', result);
    return result;
}

// Run authentication
authenticateEklipse().catch(console.error);
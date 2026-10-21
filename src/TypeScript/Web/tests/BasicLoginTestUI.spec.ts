// To run this test, use the following command in the terminal:
// -> npx playwright test src/TypeScript/Web/tests/BasicLoginTestUI.spec.ts
import {test, expect, type Browser, type Page, type Locator} from '@playwright/test';
import { webkit, chromium, firefox } from 'playwright';


test('Basic Login Test', async() => {

  const browser: Browser = await chromium.launch({ headless: false, channel: 'chrome' });
// Chromium is the engine behind Google Chrome and Microsoft Edge. Playwright can launch either of these browsers, or the open-source Chromium browser. The 'channel' option specifies which browser to launch. If you want to use the installed version of Google Chrome, you can specify 'chrome' as the channel. If you want to use Microsoft Edge, you can specify 'msedge'. If you don't specify a channel, Playwright will use the bundled version of Chromium.
// const browser: Browser = await webkit.launch({ headless: false });
// const browser: Browser = await firefox.launch({ headless: false });

  const page: Page = await browser.newPage();

  await page.goto("https://naveenautomationlabs.com/opencart/index.php?route=account/login");

  const emailInput: Locator = await page.locator('#input-email');

  const passwordInput: Locator = await page.locator('#input-password');

  const loginButton: Locator = await page.locator('input[value="Login"]');

  await emailInput.fill('ratnakarkolhatkar@gmail.com');
  await passwordInput.fill('Ratanlord@1409');

  await loginButton.click();

  const pageTitle = await page.title();
  console.log("Page Title: " + pageTitle);

  expect(pageTitle).toBe('My Account');

  await page.screenshot({ path: 'src/TypeScript/Web/Screenshots/MyAccountPage.png' });

  browser.close();
})
// To run this test, use the following command in the terminal:
// -> npx playwright test src/TypeScript/Web/tests/BrowserContextTest.spec.ts

// Browser context is a feature that allows you to create isolated browser contexts within a single instance of the browser. This is useful for testing scenarios where you want to simulate multiple users or sessions without interference between them. In this test suite, we will be testing the functionality of browser contexts in a web application.
// It is just like an isolated browser or Incognito browser window. Each context has its own cookies, local storage, and session storage, which means that data from one context does not affect another. This is particularly useful for testing scenarios where you want to simulate multiple users or sessions without interference between them.

import { test, expect } from '@playwright/test';
import type { Browser, BrowserContext, Page, Locator } from '@playwright/test';
import { webkit, chromium, firefox } from 'playwright';

test ('Browser Context Test', async () => {
  const browser: Browser = await chromium.launch({ headless: false, channel: 'chrome' });

  // Browser Context One - Properties
  const context: BrowserContext = await browser.newContext(); // Create a new browser context. This is like opening a new incognito window in a browser.
  const page = await context.newPage();

  await page.goto("https://naveenautomationlabs.com/opencart/index.php?route=account/login");

  const emailInput: Locator = await page.locator('#input-email');

  const passwordInput: Locator = await page.locator('#input-password');

  const loginButton: Locator = await page.locator('input[value="Login"]');

  await emailInput.fill('ratnakarkolhatkar@gmail.com');
  await passwordInput.fill('Ratanlord@1409');

  await loginButton.click();

  // Browser Context Two - Properties
  const context2: BrowserContext = await browser.newContext(); // Create a new browser context. This is like opening a new incognito window in a browser.
  const page2 = await context2.newPage();

  await page2.goto("https://naveenautomationlabs.com/opencart/index.php?route=account/login");

  const emailInput2: Locator = await page2.locator('#input-email');

  const passwordInput2: Locator = await page2.locator('#input-password');

  const loginButton2: Locator = await page2.locator('input[value="Login"]');

  await emailInput2.fill('pwtest@opencart.com');
  await passwordInput2.fill('playwright@123');

  await loginButton2.click();

  // To pause the browser execution in between we have to comment the .close() method. And we can use empty promise to pause the execution. This is useful for debugging purposes.
  // await new Promise(() => {});

  // Closing the browser contexts and the browser instance
  await context.close();
  await context2.close();
  await browser.close(); // As both the browser contexts are created from the same browser instance, we can close the browser instance after closing both the contexts. This will ensure that all resources are released properly.



});
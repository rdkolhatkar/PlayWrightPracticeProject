/*
    To run this test, use the following command in the terminal:
        -> npx playwright test src/TypeScript/Web/tests/AuthenticationPopUpTest.spec.ts
    
    In this test, we will demonstrate how to handle authentication pop-ups in Playwright.
    Authentication pop-up is not a regular JavaScript alert or confirm dialog. It is a browser-level dialog that requires credentials to access a protected resource.

*/

import { test, expect } from '@playwright/test';
import type { Browser, BrowserContext, Page, Locator } from '@playwright/test';
import { webkit, chromium, firefox } from 'playwright';

test ('Authentication pop-up Test', async () => {
  const browser: Browser = await chromium.launch({ headless: false, channel: 'chrome' });

  // Browser Context One - Properties
  const context: BrowserContext = await browser.newContext(); // Create a new browser context. This is like opening a new incognito window in a browser.
  const page = await context.newPage();
  // There are three ways to handle authentication pop-ups in Playwright:
  // 1. Using the 'httpCredentials' option when creating a new browser context. This is the recommended way to handle authentication pop-ups in Playwright.
  // 2. Using the 'page.authenticate()' method. This is an alternative way to handle authentication pop-ups in Playwright.
  // 3. Passing the credentials in the URL. This is a less secure way to handle authentication pop-ups in Playwright and should be avoided if possible.

  // Passing the credentials in the URL
  await page.goto("https://admin:admin@the-internet.herokuapp.com/basic_auth");

  //  Using the 'httpCredentials' option when creating a new browser context
  const NewContext: BrowserContext = await browser.newContext({
    httpCredentials: {
        username: 'admin',
        password: 'admin'
    }
  });
  const NewPage = await NewContext.newPage();  
  await NewPage.goto("https://the-internet.herokuapp.com/basic_auth");  

  // Closing the browser contexts and the browser instance
  await context.close();
  await browser.close(); // As both the browser contexts are created from the same browser instance, we can close the browser instance after closing both the contexts. This will ensure that all resources are released properly.



});
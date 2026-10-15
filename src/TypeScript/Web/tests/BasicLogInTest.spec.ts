// ---------------------------------------------------------------------------
// IMPORTS
// ---------------------------------------------------------------------------
// '@playwright/test' is the Playwright Test Runner package. From it we import:
//   - test    : function used to define (declare) a test case.
//   - expect  : assertion library used to verify actual vs expected results.
//   - Browser, Page, Locator : TypeScript "types" (used only for type safety,
//     the 'type' keyword means they are erased when the code is compiled).
//       * Browser -> represents a browser instance (Chrome, Firefox, etc.)
//       * Page    -> represents a single tab inside the browser
//       * Locator -> represents a way to find element(s) on the page
import {test, expect, type Browser, type Page, type Locator} from '@playwright/test';

// 'playwright' is the core library. From it we import the three browser engines:
//   - chromium : Google Chrome / Microsoft Edge engine
//   - firefox  : Mozilla Firefox engine
//   - webkit   : Safari engine
// (Only chromium is used in this test; webkit and firefox are imported for practice.)
import { webkit, chromium, firefox } from 'playwright';

// ---------------------------------------------------------------------------
// TEST CASE
// ---------------------------------------------------------------------------
// test('<test name>', async () => { ... })
//   - The first argument is the name shown in the test report.
//   - The second argument is an 'async' function, because almost every
//     Playwright action returns a Promise and must be 'await'-ed.
test('Basic Login Test', async() => {

  // STEP 1: Launch the browser
  // chromium.launch() starts a new Chromium browser.
  // { headless: false } -> show the browser window on screen (headed mode).
  // By default Playwright runs headless (no visible window).
  const browser: Browser = await chromium.launch({ headless: false });

  // STEP 2: Open a new tab (page)
  // browser.newPage() creates a new browser context + a new page (tab) in it.
  const page: Page = await browser.newPage();

  // STEP 3: Navigate to the application URL
  // page.goto(url) opens the given URL and waits until the page has loaded.
  await page.goto("https://naveenautomationlabs.com/opencart/index.php?route=account/login");

  // STEP 4: Identify (locate) the web elements on the login page
  // page.locator(selector) creates a Locator object for the element.
  // NOTE: A locator is "lazy" - it does NOT search for the element right now.
  //       It searches only when we perform an action (fill, click, etc.).
  //       So 'await' is not actually needed before page.locator(...).

  // Locator type: CSS ID selector  -> '#' + id attribute value
  // Finds the element whose HTML is like: <input id="input-email" ...>
  const emailInput: Locator = await page.locator('#input-email');

  // Locator type: CSS ID selector
  // Finds the element whose HTML is like: <input id="input-password" ...>
  const passwordInput: Locator = await page.locator('#input-password');

  // Locator type: CSS Attribute selector -> tagName[attribute="value"]
  // Finds an <input> tag whose 'value' attribute equals "Login",
  // i.e. <input type="submit" value="Login" ...>
  const loginButton: Locator = await page.locator('input[value="Login"]');

  // STEP 5: Perform actions on the located elements
  // locator.fill(text) -> clears the text box and types the given text into it.
  // Playwright automatically waits for the element to be visible & enabled
  // before typing (this is called "auto-waiting").
  await emailInput.fill('ratnakarkolhatkar@gmail.com');
  await passwordInput.fill('Ratanlord@1409');

  // locator.click() -> clicks the element (also auto-waits until it is clickable).
  await loginButton.click();

  // STEP 6: Read the title of the page that opens after login
  // page.title() returns the text inside the <title> tag of the current page.
  const pageTitle = await page.title();
  console.log("Page Title: " + pageTitle);

  // STEP 7: Validation / Assertion
  // expect(actual).toBe(expected) -> passes if both values are exactly equal,
  // otherwise the test FAILS. After a successful login the title should be 'My Account'.
  expect(pageTitle).toBe('My Account');

  // STEP 8: Take a screenshot
  // page.screenshot({ path }) captures the visible part of the page and saves
  // it as an image file at the given path (folders are created automatically).
  await page.screenshot({ path: 'src/TypeScript/Web/Screenshots/MyAccountPage.png' });

  // STEP 9: Close the browser
  // browser.close() closes all pages and the browser itself.
  // NOTE: It is good practice to write 'await browser.close();' so the test
  //       waits until the browser has fully closed.
  browser.close();
})

import { Before, After } from '@cucumber/cucumber';
import { chromium } from '@playwright/test';
import { setDefaultTimeout } from '@cucumber/cucumber';
// import { Before, After, setDefaultTimeout } from '@cucumber/cucumber';
// npm install cross-env --save-dev

setDefaultTimeout(60 * 1000);

Before(async function () {
  this.browser = await chromium.launch(
    { 
      headless: false,
      slowMo: 500,
      args: ['--auto-open-devtools-for-tabs'] // better than devtools:true 
    }
  );
  this.context = await this.browser.newContext();
  this.page = await this.context.newPage();
});

After(async function () {
  await this.browser.close();
});
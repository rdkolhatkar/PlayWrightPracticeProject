import { Before, After } from "@cucumber/cucumber";
import { chromium } from "playwright";

let browser;
let context;
let page;

Before(async function () {
  browser = await chromium.launch({
    headless: false,
    devtools: true,
    slowMo: 300
  });

  context = await browser.newContext();
  page = await context.newPage();

  this.page = page;
});

After(async function () {
  await browser.close();
});

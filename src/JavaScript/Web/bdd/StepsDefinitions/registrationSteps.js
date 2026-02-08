import { Given, When, Then } from '@cucumber/cucumber';
import { chromium } from 'playwright';
import RegistrationPage from '../PageObjects/RegistrationPage.js';

let browser;
let page;
let registrationPage;

Given('user is on registration page', { timeout: 30 * 1000 }, async function () {
  browser = await chromium.launch({ headless: false });
  page = await browser.newPage();
  registrationPage = new RegistrationPage(page);
  await registrationPage.navigate();
});

When('user enters valid registration details', async function () {
  await registrationPage.fillRegistrationForm();
});

When('user submits the form', async function () {
  await registrationPage.submitForm();
});

Then('registration should be successful', async function () {
  await registrationPage.verifySuccess();
  await browser.close();
});
// npx cucumber-js -p RegistrationForm --retry 2
// npm run test:RegistrationForm
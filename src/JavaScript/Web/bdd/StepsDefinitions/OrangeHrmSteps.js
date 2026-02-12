import { Given, When, Then } from '@cucumber/cucumber';
import OrangeHRMPage from '../PageObjects/OrangeHRMPage.js';

let orangePage;

Given('User launches the OrangeHRM demo website', async function () {
  orangePage = new OrangeHRMPage(this.page);
  await orangePage.navigateToSite();
});

When('User logs in with username {string} and password {string}', async function (username, password) {
  await orangePage.login(username, password);
});

Then('Dashboard page should be displayed', async function () {
  await orangePage.verifyDashboard();
});

When('User navigates to My Info section', async function () {
  await orangePage.navigateToMyInfo();
});

Then('Personal Details page should be displayed', async function () {
  await orangePage.verifyPersonalDetails();
});

When(
  'User enters address details {string} {string} {string} {string}',
  async function (street1, street2, city, state) {
    await orangePage.enterAddressDetails(street1, street2, city, state);
  }
);

When('User selects country as {string}', async function (country) {
  await orangePage.selectCountry(country);
});

When(
  'User enters phone numbers {string} {string} {string}',
  async function (home, mobile, work) {
    await orangePage.enterPhoneNumbers(home, mobile, work);
  }
);

When('User enters work email as {string}', async function (email) {
  await orangePage.enterWorkEmail(email);
});

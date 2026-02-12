import { Given, When, Then } from "@cucumber/cucumber";
import { expect } from "@playwright/test";
import RegistrationPage from "../PageObjects/RegistrationPage.js";

let registrationPage;

Given("User launches the registration demo website", async function () {
  registrationPage = new RegistrationPage(this.page);
  await registrationPage.navigate();
});

When("User enters first name {string}", async function (firstName) {
  await registrationPage.enterFirstName(firstName);
});

When("User enters last name {string}", async function (lastName) {
  await registrationPage.enterLastName(lastName);
});

When("User selects gender as {string}", async function (gender) {
  await registrationPage.selectGender(gender);
});

When("User enters email {string}", async function (email) {
  await registrationPage.enterEmail(email);
});

When("User enters mobile number {string}", async function (mobile) {
  await registrationPage.enterMobile(mobile);
});

When("User enters date of birth {string}", async function (dob) {
  await registrationPage.enterDOB(dob);
});

When("User enters address {string}", async function (address) {
  await registrationPage.enterAddress(address);
});

When("User submits the registration form", async function () {
  await registrationPage.submitForm();
});

Then("Registration should be successful", async function () {
  await registrationPage.verifySuccess();
});

// npx cucumber-js -p RegistrationForm --retry 2
// npm run test:RegistrationForm
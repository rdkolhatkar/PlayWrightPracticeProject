import { Given, When, Then } from "@cucumber/cucumber";
import { chromium, expect } from "@playwright/test";
import LoginPage from "../PageObjects/LoginPage.js";

let browser;
let context;
let page;
let loginPage;

Given("user is on OrangeHRM login page", async function () {
  browser = await chromium.launch({ headless: false });
  context = await browser.newContext();
  page = await context.newPage();

  loginPage = new LoginPage(page);
  await loginPage.navigate();
});

When("user enters valid login credentials", async function () {
  await loginPage.login("Admin", "admin123");
});

When("user clicks on login button", async function () {
  // Login button click already handled in login()
});

Then("user should be logged in successfully", async function () {
  await loginPage.isLoginSuccessful();
  await browser.close();
});

// npx cucumber-js --profile OrangeHRM

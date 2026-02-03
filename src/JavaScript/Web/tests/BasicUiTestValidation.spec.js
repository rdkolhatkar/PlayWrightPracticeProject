// To run this code use command : npx playwright test src/JavaScript/Web/tests/BasicUiTestValidation.spec.js
import { test, expect } from '@playwright/test';

test('OrangeHRM demo website', async ({ browser }) => {
  const context = await browser.newContext();
  const page = await context.newPage();

  // Open site and wait for load
  await page.goto("https://opensource-demo.orangehrmlive.com/");
  await page.waitForLoadState('networkidle'); // wait for page to load fully

  console.log(await page.title());

  // Login
  await page.getByPlaceholder("Username").fill("Admin");
  await page.getByPlaceholder("Password").fill("admin123");
  await page.getByRole("button", { name: "Login" }).click();

  // Wait for Dashboard (slow load safe)
  await expect(
    page.getByRole('heading', { name: 'Dashboard' })
  ).toBeVisible({ timeout: 20000 });

  // Navigate to My Info
  await page.locator("//span[text()='My Info']").click();
  await page.waitForLoadState('networkidle');

  // Verify Personal Details page
  await expect(
    page.getByRole('heading', { name: 'Personal Details' })
  ).toBeVisible({ timeout: 20000 });

  await browser.close();
});

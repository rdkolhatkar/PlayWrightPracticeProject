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

  // Click on the contact details tab
  await page.locator("//a[text()='Contact Details']").click();
  // Enter the address line 1 for street 1
  await page.locator("(//div[contains(@class,'oxd-form-row')]/div[1]/div[1]/div[1]/div[2])[1]/input").fill("123 Main St");
  await page.locator("(//div[contains(@class,'oxd-input-group oxd-input-field-bottom-space')]/div[2])[3]/input").fill("Pune");
  // Select the country as India
  // const dropdown = await page.locator("//div[@class='oxd-grid-3 orangehrm-full-width-grid']/div[6]/div/div[2]/div/div/div[2]/i");
  // await dropdown.click();
  // const indiaOption = await dropdown.locator('text=India');
  // await indiaOption.scrollIntoViewIfNeeded();
  // await indiaOption.click();
  // await dropdown.selectOption("India");

  // // Open country dropdown
  // await page.locator("//label[text()='Country']/../following-sibling::div//i").click();

  // // Locate actual dropdown list container
  // const dropdownList = page.locator(".oxd-select-dropdown");

  // // Scroll until India is visible
  // while (!(await dropdownList.getByText('India').isVisible())) {
  //   await dropdownList.evaluate(el => el.scrollBy(0, 200));
  //   await page.waitForTimeout(200);
  // }

  // // Click India
  // await dropdownList.getByText('India').click();

  await browser.close();
});

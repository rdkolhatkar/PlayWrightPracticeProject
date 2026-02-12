// npx cucumber-js --p OrangeHRM
// npx cucumber-js --tags "@orangehrm"
// npm run test:OrangeHRM
export default class OrangeHRMPage {
 constructor(page) {
    this.page = page;

    this.usernameInput = page.getByPlaceholder("Username");
    this.passwordInput = page.getByPlaceholder("Password");
    this.loginButton = page.getByRole("button", { name: "Login" });

    this.dashboardHeading = page.getByRole("heading", { name: "Dashboard" });
    this.myInfoMenu = page.locator("//span[text()='My Info']");
    this.personalDetailsHeading = page.getByRole("heading", { name: "Personal Details" });
    this.contactDetailsTab = page.locator("//a[text()='Contact Details']");

    this.countryDropdown = page.locator(
      "//label[text()='Country']/ancestor::div[contains(@class,'oxd-input-group')]//div[contains(@class,'oxd-select-text-input')]"
    );
  }

  async navigateToSite() {
    await this.page.goto("https://opensource-demo.orangehrmlive.com/");
    await this.page.waitForLoadState('networkidle');
  }

  async login(username, password) {
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
  }

  async verifyDashboard() {
    await this.dashboardHeading.waitFor({ timeout: 20000 });
  }

  async navigateToMyInfo() {
    await this.myInfoMenu.click();
    await this.page.waitForLoadState('networkidle');
  }

  async verifyPersonalDetails() {
    await this.personalDetailsHeading.waitFor({ timeout: 20000 });
  }

  async clickContactDetails() {
    await this.contactDetailsTab.click();
  }

  async enterAddressDetails(street1, street2, city, state) {
    await this.page.locator("(//div[contains(@class,'oxd-form-row')]/div[1]/div[1]/div[1]/div[2])[1]/input").fill(street1);
    await this.page.locator("(//div[contains(@class,'oxd-form-row')]/div[1]/div[2]/div[1]/div[2])[1]/input").fill(street2);
    await this.page.locator("(//div[contains(@class,'oxd-input-group oxd-input-field-bottom-space')]/div[2])[3]/input").fill(city);
    await this.page.locator("//div[contains(@class,'oxd-form-row')]/div/div[4]/div/div[2]/input").fill(state);
  }

  async selectCountry(country) {
    await this.countryDropdown.click();
    await this.page.locator(".oxd-select-dropdown").getByText(country, { exact: true }).click();
  }

  async enterPhoneNumbers(home, mobile, work) {
    await this.page.locator("//div[@class='oxd-form-row'][2]/div/div[1]/div/div[2]/input").fill(home);
    await this.page.locator("//div[@class='oxd-form-row'][2]/div/div[2]/div/div[2]/input").fill(mobile);
    await this.page.locator("//div[@class='oxd-form-row'][2]/div/div[3]/div/div[2]/input").fill(work);
  }

  async enterWorkEmail(email) {
    const emailField = this.page.locator("//label[text()='Work Email']/ancestor::div[contains(@class,'oxd-grid-item oxd-grid-item--gutters')]/div/div[2]/input");
    await emailField.fill("");
    await emailField.fill(email);
  }
}

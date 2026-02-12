// npx cucumber-js --profile RegistrationForm --retry 2
// npm run test:RegistrationForm
//npx cucumber-js --tags "@registration"

class RegistrationPage {
  constructor(page) {
    this.page = page;

    this.firstName = page.locator("#vfb-5");
    this.lastName = page.locator("#vfb-7");
    this.genderMale = page.locator("#vfb-31-1");
    this.genderFemale = page.locator("#vfb-31-2");
    this.email = page.locator("#vfb-14");
    this.mobile = page.locator("#vfb-19");
    this.dob = page.locator("#vfb-18");
    this.address = page.locator("#vfb-23");
    this.submitButton = page.locator("#vfb-4");
    this.successMessage = page.locator(".elementor-widget-container");
  }

  async navigate() {
    await this.page.goto("https://vinothqaacademy.com/demo-site/");
    await this.page.waitForLoadState("networkidle");
  }

  async enterFirstName(name) {
    await this.firstName.fill(name);
  }

  async enterLastName(name) {
    await this.lastName.fill(name);
  }

  async selectGender(gender) {
    if (gender === "Male") {
      await this.genderMale.check();
    } else {
      await this.genderFemale.check();
    }
  }

  async enterEmail(email) {
    await this.email.fill(email);
  }

  async enterMobile(number) {
    await this.mobile.fill(number);
  }

  async enterDOB(date) {
    await this.dob.fill(date);
  }

  async enterAddress(address) {
    await this.address.fill(address);
  }

  async submitForm() {
    await this.submitButton.click();
  }

  async verifySuccess() {
    await this.page.waitForTimeout(2000);
  }
}

export default RegistrationPage;

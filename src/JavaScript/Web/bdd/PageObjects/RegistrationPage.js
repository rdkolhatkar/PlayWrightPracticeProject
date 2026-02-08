import { expect } from 'expect';

class RegistrationPage {
  constructor(page) {
    this.page = page;

    // Locators
    this.firstName = page.locator('#vfb-5');
    this.lastName = page.locator('#vfb-7');
    this.genderMale = page.locator('#vfb-8-1');
    this.address = page.locator('#vfb-13-address');
    this.email = page.locator('#vfb-14');
    this.mobile = page.locator('#vfb-18');
    this.courseSelenium = page.locator('#vfb-20-0');
    this.submitBtn = page.locator('#vfb-4');
    this.successMsg = page.locator('.elementor-shortcode');
  }

 async navigate() {
  await this.page.goto('https://vinothqaacademy.com/demo-site/', {
    waitUntil: 'domcontentloaded'
  });
}

  async fillRegistrationForm() {
    await this.firstName.fill('Ratnakar');
    await this.lastName.fill('Kolhatkar');
    await this.genderMale.check();
    await this.address.fill('Bangalore, India');
    await this.email.fill('ratnakar@test.com');
    await this.mobile.fill('9999999999');
    await this.courseSelenium.check();
  }

  async submitForm() {
    await this.submitBtn.click();
  }

  async verifySuccess() {
    await expect(this.page).toHaveURL(/demo-site/);
  }
}

export default RegistrationPage;


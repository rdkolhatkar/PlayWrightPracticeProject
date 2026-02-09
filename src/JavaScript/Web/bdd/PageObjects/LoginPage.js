export default class LoginPage {
  constructor(page) {
    this.page = page;

    this.usernameInput = page.locator("input[name='username']");
    this.passwordInput = page.locator("input[name='password']");
    this.loginButton = page.locator("button[type='submit']");
    this.dashboardHeader = page.locator("h6:has-text('Dashboard')");
  }

  async navigate() {
    await this.page.goto("https://opensource-demo.orangehrmlive.com/");
  }

  async login(username, password) {
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
  }

  async isLoginSuccessful() {
    await this.dashboardHeader.waitFor({ state: 'visible' });
  }
}

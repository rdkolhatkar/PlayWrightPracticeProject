# 🎭 Playwright Codegen & VS Code Test Recorder Master Guide

An enterprise-ready guide to accelerating your test automation workflow using Playwright's native recording and generation tools.

---

## 📌 Overview

Writing end-to-end tests from scratch can be time-consuming. Playwright provides two powerful companion tools to record user actions in real-time, auto-generate clean TypeScript/JavaScript code, and visually inject assertions:

1. **Playwright Codegen (CLI-based):** A standalone browser and inspector tool perfect for quickly generating test scripts outside or inside an IDE.
2. **VS Code Playwright Test Recorder (Extension-based):** Fully integrated into Visual Studio Code, allowing you to record actions, pick locators, and append assertions directly into your active test files.

---

## 🛠️ Prerequisites & Setup

### 1. Environment Setup

Ensure you have [Node.js](https://nodejs.org/) installed (LTS version recommended).

```bash
# Verify your installation
node -v
npm -v

```

### 2. Initialize a New Playwright Project

Run the initialization wizard in your project root folder:

```bash
npm init playwright@latest

```

* during the setup wizard, select **TypeScript** (industry standard) and opt-in to add a GitHub Actions workflow if needed.*

### 3. Verification of Project Structure

Your generated scaffolding should look like this:

```text
PlaywrightProject/
├── tests/                     # Place your test files here (.spec.ts)
├── test-results/              # Holds screenshots/videos on failures
├── playwright.config.ts       # Global Playwright configuration
├── package.json               # Node dependencies and scripts
└── node_modules/              # Installed dependencies

```

### 4. Install Browsers

Ensure Playwright's binaries for Chromium, Firefox, and WebKit are explicitly downloaded:

```bash
npx playwright install

```

---

## 🔌 Mandatory VS Code Extension

For the best developer experience, install the official Microsoft extension:

* **Extension Name:** [Playwright Test for VS Code](https://marketplace.visualstudio.com/items?itemName=ms-playwright.playwright)
* **Publisher:** `Microsoft`
* **Key Capabilities:** Record new tests seamlessly, visually pick resilient locators, live-debug line-by-line, and open native trace viewers.

---

## 🚀 Recording Tools in Action

### Method A: Playwright Codegen (CLI)

To spin up a dedicated browser and the Playwright Inspector interface side-by-side, use the `codegen` command:

```bash
# Basic usage
npx playwright codegen

# Launch directly targeting a specific URL
npx playwright codegen https://opensource-demo.orangehrmlive.com

```

### Method B: VS Code Test Recorder (IDE Integrated)

1. Open the **Testing Panel** in VS Code (Beaker icon on the sidebar).
2. Look at the **Playwright** dropdown menu.
3. Click **Record New** (or open the Command Palette `Ctrl+Shift+P` / `Cmd+Shift+P` and type `Playwright: Record New Test`).
4. A browser window will launch; everything you click or type generates code instantly in a new `.spec.ts` file.

---

## 🎯 Locator Selection & Priority Strategy

Playwright utilizes **User-Facing Locators** that reflect how a human interacts with the web page rather than brittle XPath or CSS selectors.

### The Industry Standard Priority Hierarchy

When generating or picking locators, prioritize them in this exact order:

| Priority | Locator Method | Best Used For | Code Example |
| --- | --- | --- | --- |
| **1** | `page.getByRole()` | Semantic HTML elements (buttons, headings, alerts) | `page.getByRole('button', { name: 'Login' })` |
| **2** | `page.getByLabel()` | Forms fields mapped to a `<label>` element | `page.getByLabel('Username')` |
| **3** | `page.getByPlaceholder()` | Input fields showcasing a placeholder text | `page.getByPlaceholder('Search products...')` |
| **4** | `page.getByText()` | Finding non-interactive layout text or labels | `page.getByText('Welcome back, Admin')` |
| **5** | `page.getByTestId()` | Dedicated QA automation data attributes | `page.getByTestId('submit-button')` |
| **6** | `page.locator()` | Raw CSS Selectors / XPaths (**Use as a last resort**) | `page.locator('#custom-id > .flex-container')` |

> ⚠️ **Pro-Tip for Experienced Devs:** Avoid structural paths like `locator('//div[2]/span[3]')`. If the UI design shifts by a single pixel or wrapper div, your test suite breaks immediately.

---

## 🧪 Smart Assertions Reference Cheat Sheet

Playwright assertions use **web-first async matchers**. They automatically retry until the condition is met or a timeout is reached.

### 1. Element State Assertions

```typescript
// Visibility
await expect(page.getByText('Welcome')).toBeVisible();

// Disabled / Enabled states (Great for form validation)
await expect(page.getByRole('button', { name: 'Submit' })).toBeDisabled();
await expect(page.getByRole('button', { name: 'Submit' })).toBeEnabled();

// Checkboxes and Radio buttons
await expect(page.getByLabel('Remember Me')).toBeChecked();

```

### 2. Text & Value Content Assertions

```typescript
// Exact Text Match
await expect(page.locator('.message')).toHaveText('Login Successful');

// Partial Text Match
await expect(page.locator('.message')).toContainText('Successful');

// Form Input Values & Dropdowns
await expect(page.getByLabel('Username')).toHaveValue('Admin');
await expect(page.locator('#country-select')).toHaveValue('India');

// Validating arrays of elements (e.g., list contents)
await expect(page.locator('.product-items')).toHaveText(['Item 1', 'Item 2', 'Item 3']);

```

### 3. Page Properties & Structure

```typescript
// Exact or partial URL verification
await expect(page).toHaveURL('https://example.com/dashboard');

// Document Page Title
await expect(page).toHaveTitle('Dashboard - Admin Panel');

// Count matching DOM elements
await expect(page.locator('.product-card')).toHaveCount(10);

// Element HTML Attribute value verification
await expect(page.locator('#logo')).toHaveAttribute('alt', 'Company Logo');

```

### 4. Visual Snapshot Testing

Used for regression testing to ensure layouts don't unexpectedly shift UI styles.

```typescript
// Full-page visual regression testing
await expect(page).toHaveScreenshot('homepage.png');

// Component-specific structural testing
await expect(page.locator('#header-navigation')).toHaveScreenshot('header.png');

```

*💡 **Note:** The initial run creates the "Baseline Image". Subsequent test runs compare pixel changes against this saved baseline.*

---

## ⌨️ Common Web Interaction Examples

```typescript
// 1. Click Interaction
await page.getByRole('button', { name: 'Login' }).click();

// 2. Text Entry
await page.getByLabel('Username').fill('Admin');

// 3. Dropdown Menu Selection
await page.locator('#country').selectOption('India');

// 4. Toggling Checkboxes/Radios
await page.getByLabel('Terms and Conditions').check();

// 5. Native File Upload Handling
await page.locator('input[type="file"]').setInputFiles('test-document.pdf');

```

---

## 🚀 Core CLI Execution Toolkit

| Command | Action Performed |
| --- | --- |
| `npx playwright test` | Run all test suites headlessly across all configured engines. |
| `npx playwright test login.spec.ts` | Execute a specific test file only. |
| `npx playwright test --headed` | Run tests visually with the browser GUI active. |
| `npx playwright test --debug` | Open **Playwright Inspector** to step through execution step-by-line. |
| `npx playwright show-report` | Open the automatically generated, rich HTML test execution report. |

---

## 🏆 Enterprise Best Practices

* **Keep Tests Fully Independent:** Never rely on the state of a previous test case. Each test should spin up its own state, execute its own isolated login, or handle its unique API setup.
* **Adopt the Page Object Model (POM):** For large scaling projects, abstract your locators and interactions into page classes.
* **Incorporate Assertions:** Recording paths only builds the script; explicit assertions (`expect()`) provide the business logic that determines whether a test passes or fails.

### Page Object Model (POM) Example

```typescript
// pages/LoginPage.ts
import { Page, Locator } from '@playwright/test';

export class LoginPage {
    private page: Page;
    private usernameInput: Locator;
    private passwordInput: Locator;
    private loginButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.usernameInput = page.getByLabel('Username');
        this.passwordInput = page.getByLabel('Password');
        this.loginButton = page.getByRole('button', { name: 'Login' });
    }

    async login(username: string, password: string) {
        await this.usernameInput.fill(username);
        await this.passwordInput.fill(password);
        await this.loginButton.click();
    }
}

```
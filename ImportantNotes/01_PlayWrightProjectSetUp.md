# PlayWrightPracticeProject

## Playwright Automation Framework with JavaScript & TypeScript (Web + API + BDD)

This README provides a **complete, step-by-step guide** to setting up a **single Playwright project** that supports:

* JavaScript automation
* TypeScript automation
* Web UI testing
* API testing
* BDD testing using Cucumber (Gherkin)

The explanation is written to be **easy for freshers** and still **useful for experienced automation engineers and SDETs**.

---

## 1. Project Objective

The goal of this framework is to:

* Maintain **separate but identical structures** for JavaScript and TypeScript
* Support **Web, API, and BDD testing**
* Keep configuration **clean and scalable**
* Follow **enterprise automation best practices**
* Allow smooth migration from JavaScript to TypeScript

---

## 2. Final Project Structure (High Level)

```text
PlayWrightPracticeProject/
│
├── playwright.config.js
├── package.json
├── package-lock.json
├── tsconfig.json
│
├── cucumber.config.js
├── cucumber.config.ts
├── cucumber.js
├── cucumber.ts
│
├── .vscode/
│   └── settings.json
│
├── src/
│   ├── JavaScript/
│   └── TypeScript/
│
├── test-results/
└── reports/
```

---

## 3. Why Some Files Are at Root Level?

### Root-level files are used when:

* They are **shared across the entire project**
* They apply to **both JavaScript and TypeScript**
* They are required by tools (Playwright, Cucumber, VS Code) globally

Examples:

* `playwright.config.js`
* `package.json`
* `cucumber.js`
* `settings.json`

---

## 4. Source-Level Structure (Inside `src`)

```text
src/
├── JavaScript/
├── TypeScript/
```

Each language folder contains **the same structure**, only file extensions differ.

---

## 5. JavaScript Automation Structure

```text
src/JavaScript/
├── web/
│   ├── tests/
│   │   └── main.spec.js
│   ├── pageObjects/
│   │   └── LoginPage.js
│   ├── utils/
│   │   └── testHelper.js
│   ├── data/
│   │   └── testData.json
│   └── screenshots/
│
├── api/
│   ├── tests/
│   │   └── api.spec.js
│   ├── utils/
│   │   └── apiHelper.js
│   └── data/
│       └── apiPayloads.json
│
├── bdd/
│   ├── web/
│   │   ├── features/
│   │   │   └── login.feature
│   │   ├── step-definitions/
│   │   │   └── login.steps.js
│   │   ├── pageObjects/
│   │   └── utils/
│   │
│   ├── api/
│   │   ├── features/
│   │   │   └── user.feature
│   │   ├── step-definitions/
│   │   └── utils/
```

---

## 6. TypeScript Automation Structure

```text
src/TypeScript/
├── web/
│   ├── tests/
│   │   └── main.spec.ts
│   ├── pageObjects/
│   │   └── LoginPage.ts
│   ├── utils/
│   │   └── testHelper.ts
│   ├── data/
│   │   └── testData.json
│   └── screenshots/
│
├── api/
│   ├── tests/
│   │   └── api.spec.ts
│   ├── utils/
│   │   └── apiHelper.ts
│   └── data/
│       └── apiPayloads.json
│
├── bdd/
│   ├── web/
│   │   ├── features/
│   │   │   └── login.feature
│   │   ├── step-definitions/
│   │   │   └── login.steps.ts
│   │   ├── pageObjects/
│   │   └── utils/
│   │
│   ├── api/
│   │   ├── features/
│   │   │   └── user.feature
│   │   ├── step-definitions/
│   │   └── utils/
```

---

## 7. Where Do Cucumber Config Files Go?

### ✅ Root Level (Recommended)

These files control **how Cucumber runs**, so they should be at the **project root**.

```text
cucumber.js        → JavaScript BDD runner config
cucumber.ts        → TypeScript BDD runner config
cucumber.config.js → Advanced JS configuration
cucumber.config.ts → Advanced TS configuration
```

### Why Root Level?

* Shared across the project
* Cleaner CI/CD integration
* Avoids duplication
* Industry best practice

---

## 8. Sample Cucumber Configuration

### `cucumber.js` (JavaScript)

```js
module.exports = {
  default: {
    require: ['src/JavaScript/bdd/**/step-definitions/**/*.js'],
    paths: ['src/JavaScript/bdd/**/features/**/*.feature'],
    publishQuiet: true
  }
};
```

### `cucumber.ts` (TypeScript)

```ts
export default {
  default: {
    require: ['src/TypeScript/bdd/**/step-definitions/**/*.ts'],
    paths: ['src/TypeScript/bdd/**/features/**/*.feature'],
    publishQuiet: true
  }
};
```

---

## 9. VS Code Settings (`settings.json`)

### Location:

```text
.vscode/settings.json
```

### Purpose:

* Auto format
* Fix imports
* Improve Playwright + TS support

### Example:

```json
{
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "typescript.preferences.importModuleSpecifier": "relative"
}
```

---

## 10. Playwright Configuration (Root Level)

### `playwright.config.js`

```js
import { defineConfig } from '@playwright/test';

export default defineConfig({
  projects: [
    { name: 'js-web', testDir: './src/JavaScript/web/tests' },
    { name: 'js-api', testDir: './src/JavaScript/api/tests' },
    { name: 'ts-web', testDir: './src/TypeScript/web/tests' },
    { name: 'ts-api', testDir: './src/TypeScript/api/tests' }
  ],
  reporter: [['html'], ['list']]
});
```

---

## 11. Running Tests

### Playwright

```bash
npx playwright test
npx playwright test --project=js-web
npx playwright test --project=ts-api
```

### Cucumber

```bash
npx cucumber-js
```

---

## 12. Why This Structure Works

✔ Clear language separation
✔ Easy for beginners
✔ Scales for enterprise projects
✔ Clean CI/CD pipelines
✔ Supports gradual TypeScript adoption
✔ Resume-ready SDET framework

---
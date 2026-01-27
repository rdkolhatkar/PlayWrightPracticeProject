# PlayWrightPracticeProject

## Enterprise-Ready Playwright Framework (JavaScript + TypeScript + Web + API + BDD)

This README is a **complete, end-to-end guide** for building a **production-grade Playwright automation framework**.
It covers **project structure**, **hooks**, **world files**, **Allure reporting**, **environment-based execution**, and **GitHub template setup**.

This guide is written to be:

* ✅ Easy for **freshers**
* ✅ Practical for **experienced SDETs**
* ✅ Aligned with **industry & enterprise standards**

---

## 1. Project Goals

This framework is designed to:

* Support **JavaScript and TypeScript** in one repo
* Enable **Web, API, and BDD (Cucumber)** testing
* Use **clean architecture and separation**
* Be **CI/CD ready**
* Scale easily for large teams

---

## 2. Final Project Structure (Complete)

```text
PlayWrightPracticeProject/
│
├── playwright.config.js
├── package.json
├── package-lock.json
├── tsconfig.json
│
├── cucumber.js
├── cucumber.ts
├── cucumber.config.js
├── cucumber.config.ts
│
├── .env.dev
├── .env.qa
├── .env.prod
│
├── .vscode/
│   └── settings.json
│
├── src/
│   ├── JavaScript/
│   │   ├── web/
│   │   ├── api/
│   │   └── bdd/
│   │       ├── web/
│   │       │   ├── features/
│   │       │   ├── step-definitions/
│   │       │   ├── hooks/
│   │       │   ├── world/
│   │       │   ├── pageObjects/
│   │       │   └── utils/
│   │       └── api/
│   │           ├── features/
│   │           ├── step-definitions/
│   │           ├── hooks/
│   │           └── utils/
│   │
│   └── TypeScript/
│       ├── web/
│       ├── api/
│       └── bdd/
│           ├── web/
│           │   ├── features/
│           │   ├── step-definitions/
│           │   ├── hooks/
│           │   ├── world/
│           │   ├── pageObjects/
│           │   └── utils/
│           └── api/
│               ├── features/
│               ├── step-definitions/
│               ├── hooks/
│               └── utils/
│
├── test-results/
├── allure-results/
└── reports/
```

---

## 3. Hooks (Before / After Execution)

### Why Hooks?

Hooks allow you to:

* Launch browser before scenarios
* Close browser after scenarios
* Capture screenshots on failure
* Setup API context
* Clean test data

### Location (Best Practice)

```text
src/**/bdd/**/hooks/
```

### Example: JavaScript Hook

```js
const { Before, After } = require('@cucumber/cucumber');
const { chromium } = require('@playwright/test');

Before(async function () {
  this.browser = await chromium.launch();
  this.context = await this.browser.newContext();
  this.page = await this.context.newPage();
});

After(async function (scenario) {
  if (scenario.result.status === 'FAILED') {
    await this.page.screenshot({ path: `reports/${scenario.pickle.name}.png` });
  }
  await this.browser.close();
});
```

---

## 4. World Files (Shared Context)

### What is World?

World is used to **share data between steps** (page, API response, tokens).

### Location

```text
src/**/bdd/**/world/
```

### Example: JavaScript World

```js
const { setWorldConstructor } = require('@cucumber/cucumber');

class CustomWorld {
  constructor() {
    this.page = null;
    this.response = null;
  }
}

setWorldConstructor(CustomWorld);
```

---

## 5. Allure Reporting Integration

### Install Dependencies

```bash
npm install -D allure-playwright allure-commandline
```

### Playwright Config Update

```js
reporter: [
  ['list'],
  ['allure-playwright']
]
```

### Generate Allure Report

```bash
npx allure generate allure-results --clean
npx allure open
```

### Output Folder

```text
allure-results/
```

---

## 6. Environment-Based Execution

### Why Environments?

To run tests against:

* Dev
* QA
* UAT
* Prod

### Environment Files

```text
.env.dev
.env.qa
.env.prod
```

### Example `.env.qa`

```env
BASE_URL=https://qa.example.com
API_URL=https://api.qa.example.com
```

### Load Environment

```bash
npx playwright test --env=qa
```

### Access in Code

```js
process.env.BASE_URL
```

---

## 7. Cucumber Configuration (Root Level)

### JavaScript

```js
module.exports = {
  default: {
    require: [
      'src/JavaScript/bdd/**/step-definitions/**/*.js',
      'src/JavaScript/bdd/**/hooks/**/*.js',
      'src/JavaScript/bdd/**/world/**/*.js'
    ],
    paths: ['src/JavaScript/bdd/**/features/**/*.feature']
  }
};
```

### TypeScript

```ts
export default {
  default: {
    require: [
      'src/TypeScript/bdd/**/step-definitions/**/*.ts',
      'src/TypeScript/bdd/**/hooks/**/*.ts',
      'src/TypeScript/bdd/**/world/**/*.ts'
    ],
    paths: ['src/TypeScript/bdd/**/features/**/*.feature']
  }
};
```

---

## 8. VS Code Settings

```json
{
  "editor.formatOnSave": true,
  "typescript.preferences.importModuleSpecifier": "relative",
  "cucumber.features": ["src/**/features/**/*.feature"]
}
```

---

## 9. Converting This into a GitHub Template

### Steps:

1. Push code to GitHub
2. Go to **Repository Settings**
3. Enable **Template repository**
4. Save

### Benefits:

* New projects in one click
* Standardized structure
* Faster onboarding
* Ideal for teams

---

## 10. Recommended Learning Path for Freshers

1. Learn Playwright Web (JavaScript)
2. Learn Page Object Model
3. Add API testing
4. Learn TypeScript
5. Add BDD
6. Add CI/CD

---

## 11. Why This Framework is Industry-Ready

✔ Supports JS & TS
✔ Web + API + BDD
✔ Clean architecture
✔ CI/CD friendly
✔ Resume & interview ready
✔ Used in BFSI & product companies

---

## 12. Final Note

This framework is **not just for learning**, it is **production-grade** and suitable for:

* Enterprise QA teams
* SDET roles
* Long-term automation programs

---
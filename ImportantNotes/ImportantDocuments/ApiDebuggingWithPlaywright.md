# 📘 Playwright + Cucumber (BDD) REST API Automation Setup Guide

## 🚀 Tech Stack

* **Node.js**
* **Playwright**
* **Cucumber (cucumber-js)**
* **VS Code**
* REST API Automation (No `test()` or `.spec.js` files)

---

# 📁 Recommended Project Structure

```
project-root
│
├── node_modules
├── reports
├── src
│   └── JavaScript
│       └── API
│           └── bdd
│               ├── features
│               │    └── AddEmployee.feature
│               ├── StepDefinitions
│               │    └── employeeApiSteps.js
│               ├── Utils
│               │    ├── ApiUtil.js
│               │    └── DBUtil.js
│               └── Support
│                    └── hooks.js
│
├── cucumber.js
├── package.json
└── .vscode
    └── launch.json
```

---

# ✅ Step 1: Install Required Dependencies

Run this inside project root:

```bash
npm init -y
npm install @cucumber/cucumber playwright --save-dev
```

If not already installed:

```bash
npm install dotenv chai --save-dev
```

---

# ✅ Step 2: Configure `cucumber.js`

Create a file in project root:

```
cucumber.js
```

Add this:

```js
module.exports = {

  default: {
    require: [
      "src/JavaScript/API/bdd/StepDefinitions/*.js",
      "src/JavaScript/API/bdd/Utils/*.js",
      "src/JavaScript/API/bdd/Support/*.js"
    ],
    paths: [
      "src/JavaScript/API/bdd/features/*.feature"
    ],
    format: [
      "progress",
      "html:reports/api-report.html"
    ],
    retry: 1,
    timeout: 60000
  },

  API: {
    paths: [
      "src/JavaScript/API/bdd/features/*.feature"
    ],
    require: [
      "src/JavaScript/API/bdd/StepDefinitions/*.js",
      "src/JavaScript/API/bdd/Utils/*.js",
      "src/JavaScript/API/bdd/Support/*.js"
    ],
    format: [
      "progress",
      "html:reports/api-report.html"
    ],
    retry: 0,
    timeout: 60000
  }

};
```

---

# ✅ Step 3: Configure `package.json`

Open `package.json`.

Add or modify the `"scripts"` section like this:

```json
"scripts": {
  "test": "cucumber-js",
  "test:api": "cucumber-js --profile API",
  "test:debug:api": "node --inspect-brk ./node_modules/@cucumber/cucumber/bin/cucumber-js --profile API",
  "test:feature": "cucumber-js src/JavaScript/API/bdd/features/AddEmployee.feature",
  "test:tags": "cucumber-js --tags @smoke"
}
```

---

# ✅ Step 4: Create `.vscode` Folder

### 🔹 Method 1 (Recommended – Using VS Code UI)

1. Open project root in VS Code
2. Press:

```
Ctrl + Shift + D
```

3. Click **"create a launch.json file"**
4. Choose:

```
Node.js
```

VS Code will automatically create:

```
.vscode/launch.json
```

---

### 🔹 Method 2 (Manual Creation)

1. Right-click project root
2. Click **New Folder**
3. Name it:

```
.vscode
```

⚠ Dot is mandatory

4. Inside `.vscode`, create new file:

```
launch.json
```

---

# ✅ Step 5: Add Debug Configuration in `launch.json`

Open:

```
.vscode/launch.json
```

Replace content with:

```json
{
  "version": "0.2.0",
  "configurations": [
    {
      "type": "node",
      "request": "launch",
      "name": "Debug API (Cucumber Profile)",
      "program": "${workspaceFolder}/node_modules/@cucumber/cucumber/bin/cucumber-js",
      "args": ["--profile", "API"],
      "console": "integratedTerminal",
      "internalConsoleOptions": "neverOpen",
      "skipFiles": ["<node_internals>/**"]
    }
  ]
}
```

Save file.

---

# ✅ Step 6: How To Debug API Tests

1. Add breakpoint inside:

   * `employeeApiSteps.js`
   * `ApiUtil.js`
   * `hooks.js`

2. Go to:

   ```
   Run & Debug
   ```

3. Select:

   ```
   Debug API (Cucumber Profile)
   ```

4. Click ▶

Debugger will stop at breakpoints.

---

# ✅ Step 7: Enable Playwright API Logs (Optional)

### Windows:

```bash
set DEBUG=pw:api
```

### Mac/Linux:

```bash
export DEBUG=pw:api
```

Then run debug.

This prints full request/response logs.

---

# ✅ Step 8: Run Specific Feature

Update launch.json args:

```json
"args": [
  "src/JavaScript/API/bdd/features/AddEmployee.feature"
]
```

---

# ✅ Step 9: Run By Tag

```json
"args": ["--tags", "@smoke"]
```

---

# 🛠 Example Playwright API Utility

`ApiUtil.js`

```js
const { request } = require('@playwright/test');

class ApiUtil {

  async createEmployee(data) {
    const apiContext = await request.newContext();
    const response = await apiContext.post('https://api.example.com/employees', {
      data: data
    });
    return response;
  }

}

module.exports = new ApiUtil();
```

---

# 🧪 Example Step Definition

`employeeApiSteps.js`

```js
const { Given, When, Then } = require('@cucumber/cucumber');
const { expect } = require('chai');
const apiUtil = require('../Utils/ApiUtil');

let response;

When('I create a new employee', async function () {
  response = await apiUtil.createEmployee({
    name: "John",
    salary: "5000",
    age: "30"
  });
});

Then('the response status should be {int}', async function (statusCode) {
  expect(response.status()).to.equal(statusCode);
});
```

---

# 🧠 Common Debug Issues

### ❌ Breakpoints Not Hitting?

* Ensure you opened project root (not `src`)
* Make sure Node is selected in launch config
* Confirm file paths are correct
* Do not run `npm run` and debugger at same time

---

# 🎯 Best Practices

✔ Use profile-based execution
✔ Disable retry during debugging
✔ Keep folder casing consistent (`API` vs `Api`)
✔ Keep utilities modular
✔ Use environment variables for base URL

---

# 🚀 Final Commands Reference

Run normally:

```
npm run test:api
```

Debug mode:

```
npm run test:debug:api
```

Run specific feature:

```
npm run test:feature
```

Run by tag:

```
npm run test:tags
```

---

# ✅ You Are Now Ready

Your Playwright + Cucumber REST API automation framework is fully configured with:

* Debugging support
* Profile-based execution
* Feature-level execution
* Tag-based execution
* HTML reporting
* API logging

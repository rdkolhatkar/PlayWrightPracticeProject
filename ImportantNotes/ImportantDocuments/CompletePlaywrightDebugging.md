# 📘 Complete Playwright Debugging Guide

## (Normal Playwright Tests + Cucumber BDD + VS Code)

---

# 📌 What is Debugging?

Debugging means:

> Running your automation step-by-step to understand what is happening inside your code and fixing issues.

Instead of running the test completely and only seeing PASS or FAIL, debugging allows you to:

* Pause execution
* Inspect elements
* Check variable values
* Step through code line by line
* Understand why something failed

This guide explains everything from **beginner level to advanced level**.

---

# ============================================================

# 🔹 SECTION 1 – Debugging Normal Playwright Tests (.spec.js)

# ============================================================

If you run:

```bash
npx playwright test
```

It runs all `.spec.js` files normally.

Now let’s learn how to debug them.

---

# ✅ 1️⃣ Playwright UI Mode (Easiest Method for Beginners)

Run:

```bash
npx playwright test --ui
```

## What Happens?

* A Playwright Test UI window opens.
* You see all your test files listed.
* You can:

  * Run specific tests
  * Click Debug
  * See logs
  * View failures visually

## How to Debug Using UI Mode?

1. Run `npx playwright test --ui`
2. Click your test file
3. Click the “Debug” button
4. Browser opens
5. Test runs step-by-step

This is the **most beginner-friendly way** to debug.

---

# ✅ 2️⃣ Using Playwright Inspector (`--debug`)

Run:

```bash
npx playwright test --debug
```

## What Happens?

* Browser opens in headed mode
* Playwright Inspector window opens
* Execution pauses before first step

Inside Inspector you can:

* Step Over
* Step Into
* Resume
* See action logs
* View locators
* Inspect DOM

This is the **most commonly used debugging method**.

---

# ✅ 3️⃣ Using PWDEBUG Environment Variable

This enables debug mode manually.

### On Windows:

```bash
set PWDEBUG=1 && npx playwright test
```

### On Mac/Linux:

```bash
PWDEBUG=1 npx playwright test
```

This:

* Opens browser
* Opens Inspector
* Disables timeouts
* Runs in debug mode

---

# ✅ 4️⃣ Using page.pause()

You can manually pause execution inside your test.

Example:

```js
test('Login test', async ({ page }) => {
  await page.goto("https://example.com");
  await page.pause();
});
```

When execution reaches `page.pause()`:

* Browser stops
* Inspector opens
* You can inspect elements
* Try locators
* Resume manually

Very useful for locator debugging.

---

# ============================================================

# 🔹 SECTION 2 – Debugging Playwright + Cucumber BDD

# ============================================================

In your project, you run:

```bash
npx cucumber-js --profile OrangeHRM
```

Since Cucumber runs on Node.js, Playwright debug options are not automatic.

---

# ✅ 1️⃣ Debug BDD Using PWDEBUG (Best Method)

### Windows:

```bash
set PWDEBUG=1 && npx cucumber-js --profile OrangeHRM
```

### Mac/Linux:

```bash
PWDEBUG=1 npx cucumber-js --profile OrangeHRM
```

What happens:

* Browser opens in headed mode
* Playwright Inspector opens
* You can debug step-by-step

---

# ✅ 2️⃣ Use page.pause() Inside Step Definitions

Example:

```js
When("user enters valid login credentials", async function () {
  await page.pause();
  await loginPage.login("Admin", "admin123");
});
```

Now run normally:

```bash
npx cucumber-js --profile OrangeHRM
```

Execution stops at `page.pause()`.

---

# ✅ 3️⃣ Slow Down Execution

Modify browser launch:

```js
browser = await chromium.launch({
  headless: false,
  slowMo: 500
});
```

This slows execution so you can observe steps.

---

# ============================================================

# 🔹 SECTION 3 – Debugging in VS Code (Professional Way)

# ============================================================

VS Code allows debugging JavaScript line-by-line.

---

# ✅ Step 1: Create launch.json

Create folder:

```
.vscode
```

Inside it create file:

```
launch.json
```

---

# ✅ Debug Normal Playwright Tests

Add:

```json
{
  "version": "0.2.0",
  "configurations": [
    {
      "name": "Debug Playwright Tests",
      "type": "node",
      "request": "launch",
      "program": "${workspaceFolder}/node_modules/@playwright/test/cli.js",
      "args": ["test"],
      "console": "integratedTerminal"
    }
  ]
}
```

Now:

1. Open test file
2. Add breakpoint (click left side of line number)
3. Press F5
4. Debugger stops at breakpoint

---

# ✅ Debug Cucumber BDD in VS Code

Add another configuration:

```json
{
  "name": "Debug Cucumber OrangeHRM",
  "type": "node",
  "request": "launch",
  "program": "${workspaceFolder}/node_modules/@cucumber/cucumber/bin/cucumber-js",
  "args": ["--profile", "OrangeHRM"],
  "console": "integratedTerminal"
}
```

Steps:

1. Add breakpoint in step definition
2. Select configuration
3. Press F5
4. Execution stops at breakpoint

---

# ============================================================

# 🔹 SECTION 4 – Debug Using Node Inspector

# ============================================================

Run:

```bash
node --inspect-brk node_modules/.bin/cucumber-js --profile OrangeHRM
```

Then:

1. Open Chrome
2. Go to:

```
chrome://inspect
```

3. Click "Open dedicated DevTools for Node"

Now you can:

* Step through async code
* Inspect variables
* Debug deeply

---

# ============================================================

# 🔹 SECTION 5 – Debug Failures Using Trace Viewer

# ============================================================

Trace viewer records:

* Screenshots
* DOM snapshots
* Network logs
* Action timeline

---

# ✅ Enable Tracing in Hooks

In your Cucumber hooks:

```js
Before(async function () {
  await context.tracing.start({ screenshots: true, snapshots: true });
});

After(async function () {
  await context.tracing.stop({ path: "trace.zip" });
});
```

After execution:

```bash
npx playwright show-trace trace.zip
```

This opens an interactive debugging report.

---

# ============================================================

# 🔹 SECTION 6 – When to Use What?

# ============================================================

| Situation               | Best Tool         |
| ----------------------- | ----------------- |
| Beginner debugging      | `--ui`            |
| Step-by-step UI debug   | `--debug`         |
| Deep locator check      | `page.pause()`    |
| Debug JS logic          | VS Code Debugger  |
| Debug Cucumber BDD      | PWDEBUG + VS Code |
| Debug failed test later | Trace Viewer      |

---

# ============================================================

# 🔹 Interview Answer

# ============================================================

If asked:

**How do you debug Playwright and BDD tests?**

Answer:

> For normal Playwright tests, I use `--ui` and `--debug` to open Playwright Inspector.
> For Cucumber BDD, I enable `PWDEBUG=1` or use `page.pause()` in step definitions.
> For JavaScript logic debugging, I use VS Code launch configurations.
> For failure analysis, I use Playwright Trace Viewer.

---

# ============================================================

# 🎯 Final Summary

# ============================================================

Playwright provides multiple debugging options:

1. UI Mode (`--ui`)
2. Inspector (`--debug`)
3. PWDEBUG
4. page.pause()
5. VS Code Debugger
6. Node Inspector
7. Trace Viewer

For professional projects:

✔ Use UI mode for beginners
✔ Use Inspector for locator debugging
✔ Use VS Code for JavaScript debugging
✔ Use Trace Viewer for failure investigation

---

# 🚀 End of Complete Debugging Guide

You can now confidently debug:

* Normal Playwright tests
* Cucumber BDD tests
* JavaScript logic
* UI locator issues
* Async execution problems

---

# 📊 Serenity Reports with Playwright (JavaScript) – Complete Step‑by‑Step Guide

This README explains **how to set up and configure Serenity Reports with Playwright (JavaScript)** from scratch. It also covers **npm registry configuration**, **Node.js dependency management**, and compares **Maven (Selenium) vs npm (Playwright)** so everything makes sense conceptually.

You can **copy‑paste this entire file directly** into your `README.md`.

---

## 📌 Table of Contents

1. What is Serenity Reporting?
2. Serenity vs Allure (Quick Context)
3. Prerequisites
4. Node.js & npm – How Dependency Management Works
5. Maven (Selenium) vs npm (Playwright) – Conceptual Difference
6. npm Registry – What It Is and Why It Matters
7. Setting the Correct npm Registry
8. Creating a Playwright Project
9. Installing Serenity Dependencies
10. Configuring Serenity with Playwright
11. Running Tests with Serenity
12. Generating Serenity Reports
13. Project Folder Structure
14. Common Issues & Fixes

---

## 1️⃣ What is Serenity Reporting?

**Serenity** is an advanced test reporting framework that produces **rich, narrative‑style reports**. It focuses on:

* Clear test documentation
* Business‑readable reports
* Step‑level visibility
* Evidence like screenshots and logs

In **Selenium (Java)**, Serenity is tightly integrated with Maven.
In **Playwright (JavaScript/TypeScript)**, Serenity integrates via **npm packages**.

---

## 2️⃣ Serenity vs Allure (Quick Context)

| Feature          | Serenity                 | Allure                   |
| ---------------- | ------------------------ | ------------------------ |
| Setup complexity | High                     | Low                      |
| Reporting style  | Narrative / BDD‑friendly | Visual / Lightweight     |
| CI integration   | Strong                   | Strong                   |
| Best for         | Large frameworks, BDD    | Fast Playwright projects |

This guide focuses on **Serenity**, as requested.

---

## 3️⃣ Prerequisites

Make sure you have the following installed:

### ✅ Node.js (LTS recommended)

```bash
node -v
npm -v
```

If not installed, download from:
👉 [https://nodejs.org](https://nodejs.org)

### ✅ Java (Required for Serenity CLI)

```bash
java -version
```

Serenity uses Java internally to generate reports.

---

## 4️⃣ Node.js & npm – How Dependency Management Works

In the **Node.js ecosystem**:

* Dependencies are defined in **`package.json`**
* Installed from **npm registry**
* Stored locally in **`node_modules/`**

This is equivalent to:

* `pom.xml` in Maven
* `.m2` repository in Maven

---

## 5️⃣ Maven (Selenium) vs npm (Playwright) – Conceptual Difference

### 🔹 Selenium (Java + Maven)

* Dependency file: `pom.xml`
* Repository: Maven Central
* Command:

```bash
mvn clean install
```

### 🔹 Playwright (JavaScript + npm)

* Dependency file: `package.json`
* Registry: npmjs.org
* Command:

```bash
npm install
```

### 🔑 Key Concept

📌 **npm registry is to Node.js what Maven Central is to Java**

You can:

* Search dependencies on **[https://www.npmjs.com](https://www.npmjs.com)**
* Copy package names into `package.json`
* Run `npm install` (just like `mvn clean install`)

---

## 6️⃣ npm Registry – What It Is and Why It Matters

The **npm registry** is the central place where Node.js packages are stored.

Default registry:

```
https://registry.npmjs.org/
```

If npm is pointed to a **wrong registry** (company Artifactory, Nexus, etc.), packages like Serenity will **fail to install**.

---

## 7️⃣ Setting the Correct npm Registry

### 🔍 Check current registry

```bash
npm config get registry
```

Expected output:

```
https://registry.npmjs.org/
```

### 🔧 Fix registry (if needed)

```bash
npm config set registry https://registry.npmjs.org/
```

### 🔑 Login to npm (required)

```bash
npm login
```

Verify login:

```bash
npm whoami
```

---

## 8️⃣ Creating a Playwright Project

```bash
npm init playwright@latest
```

This creates:

* `package.json`
* `playwright.config.js`
* `tests/` folder

Install dependencies:

```bash
npm install
```

---

## 9️⃣ Installing Serenity Dependencies

Serenity packages required for Playwright:

```bash
npm install --save-dev \
@serenity-js/cli \
@serenity-js/core \
@serenity-js/serenity-bdd \
@serenity-js/playwright
```

### 📌 What each package does

| Package                     | Purpose                    |
| --------------------------- | -------------------------- |
| `@serenity-js/cli`          | Generates Serenity reports |
| `@serenity-js/core`         | Core Serenity engine       |
| `@serenity-js/serenity-bdd` | BDD & reporting features   |
| `@serenity-js/playwright`   | Playwright integration     |

These get added automatically to `package.json`.

---

## 🔟 Configuring Serenity with Playwright

### Update `playwright.config.js`

```js
import { defineConfig } from '@playwright/test';
import { SerenityReporter } from '@serenity-js/playwright';

export default defineConfig({
  reporter: [
    new SerenityReporter(),
  ],
});
```

This tells Playwright to send execution data to Serenity.

---

## 1️⃣1️⃣ Running Tests with Serenity

```bash
npx playwright test
```

This generates raw Serenity results in:

```
target/site/serenity
```

(No report yet – only execution data)

---

## 1️⃣2️⃣ Generating Serenity Reports

Run:

```bash
npx serenity-js run
```

This will:

* Process test results
* Generate HTML reports

Open report:

```
target/site/serenity/index.html
```

---

## 1️⃣3️⃣ Project Folder Structure

```
project-root/
│
├── tests/
├── playwright.config.js
├── package.json
├── node_modules/
└── target/
    └── site/
        └── serenity/
```

---

## 1️⃣4️⃣ Common Issues & Fixes

### ❌ Package not found (404)

✔ Check npm registry
✔ Check `.npmrc` file

### ❌ Access token expired

```bash
npm logout
npm login
```

### ❌ Java not found

✔ Install Java JDK 11+

---

## ✅ Final Summary

* `package.json` in Node.js = `pom.xml` in Maven
* npm registry = Maven Central
* `npm install` = `mvn clean install`
* Serenity integrates with Playwright via npm packages
* Java is required only for report generation

---

🎯 You now have a **complete Serenity + Playwright setup with full theory and commands**.

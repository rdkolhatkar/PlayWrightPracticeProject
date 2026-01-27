# PlayWrightPracticeProject

## Enterprise-Grade Playwright Automation Framework

*(JavaScript + TypeScript | Web + API + BDD | CI/CD + Docker Ready)*

This README provides a **complete, step-by-step guide** to build, run, and scale a **real-world Playwright automation framework** used by professional **SDETs**.

It is written for:

* 👶 **Freshers** (clear explanations)
* 🧠 **Experienced engineers** (best practices)
* 🏢 **Enterprise projects** (CI/CD, Docker, reporting)

---

## 1. Project Vision

This framework supports:

* JavaScript **and** TypeScript
* Web, API, and BDD (Cucumber)
* Environment-based execution
* Allure reporting
* Jenkins & GitHub Actions pipelines
* Dockerized execution
* GitHub template usage

---

## 2. Final Project Structure

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
├── Dockerfile
├── docker-compose.yml
│
├── Jenkinsfile
│
├── .github/
│   └── workflows/
│       └── playwright.yml
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

## 3. Hooks & World Files (BDD)

### Why Hooks?

Hooks manage:

* Browser lifecycle
* Screenshot capture
* API setup
* Cleanup

### Why World?

World allows sharing:

* Page instance
* API responses
* Tokens
* Test data

### Location (Best Practice)

```text
src/**/bdd/**/hooks/
src/**/bdd/**/world/
```

---

## 4. Allure Reporting

### Install

```bash
npm install -D allure-playwright allure-commandline
```

### Playwright Config

```js
reporter: [['list'], ['allure-playwright']]
```

### Generate Report

```bash
npx allure generate allure-results --clean
npx allure open
```

---

## 5. Environment-Based Execution

### Environment Files

```text
.env.dev
.env.qa
.env.prod
```

### Example

```env
BASE_URL=https://qa.example.com
API_URL=https://api.qa.example.com
```

### Usage

```bash
npx playwright test --env=qa
```

---

## 6. Cucumber Configuration (Root Level)

### Why at Root?

* Shared across JS & TS
* Cleaner CI/CD setup
* Industry standard

Both `cucumber.config.js` and `cucumber.config.ts` stay at **root level**.

---

## 7. Jenkins Pipeline Integration

### Why Jenkins?

* Enterprise CI/CD standard
* Scheduled & triggered runs
* Allure & HTML reporting

### Jenkinsfile (Root Level)

```groovy
pipeline {
  agent any

  stages {
    stage('Checkout') {
      steps {
        checkout scm
      }
    }

    stage('Install Dependencies') {
      steps {
        sh 'npm ci'
      }
    }

    stage('Run Tests') {
      steps {
        sh 'npx playwright test'
      }
    }

    stage('Allure Report') {
      steps {
        sh 'npx allure generate allure-results --clean'
      }
    }
  }

  post {
    always {
      archiveArtifacts artifacts: 'allure-results/**', allowEmptyArchive: true
    }
  }
}
```

---

## 8. GitHub Actions Pipeline

### Location

```text
.github/workflows/playwright.yml
```

### GitHub Actions Workflow

```yaml
name: Playwright Tests

on:
  push:
    branches: [ main ]
  pull_request:

jobs:
  test:
    runs-on: ubuntu-latest

    steps:
      - uses: actions/checkout@v4

      - uses: actions/setup-node@v4
        with:
          node-version: 20

      - name: Install dependencies
        run: npm ci

      - name: Install Playwright Browsers
        run: npx playwright install --with-deps

      - name: Run tests
        run: npx playwright test

      - name: Upload Allure Results
        uses: actions/upload-artifact@v4
        with:
          name: allure-results
          path: allure-results
```

---

## 9. Docker Support (Run Anywhere)

### Why Docker?

* Same environment everywhere
* No local setup issues
* Perfect for CI/CD

### Dockerfile (Root Level)

```dockerfile
FROM mcr.microsoft.com/playwright:v1.42.0-jammy

WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .

CMD ["npx", "playwright", "test"]
```

### docker-compose.yml

```yaml
version: "3.9"
services:
  playwright:
    build: .
    volumes:
      - ./allure-results:/app/allure-results
```

### Run with Docker

```bash
docker-compose up --build
```

---

## 10. Convert into GitHub Template

### Steps

1. Push repo to GitHub
2. Go to **Settings**
3. Enable **Template repository**
4. Save

### Benefits

* One-click project creation
* Standardized automation
* Faster onboarding
* Team consistency

---

## 11. Learning Path (Freshers → SDET)

1. Playwright Web (JS)
2. Page Object Model
3. API Automation
4. TypeScript
5. BDD (Cucumber)
6. CI/CD (GitHub Actions + Jenkins)
7. Dockerized execution

---

## 12. Why This is SDET-Grade

✅ JS & TS support
✅ Web + API + BDD
✅ CI/CD pipelines
✅ Docker execution
✅ Allure reporting
✅ Enterprise-ready

---

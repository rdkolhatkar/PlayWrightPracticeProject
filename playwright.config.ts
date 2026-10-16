// Playwright config for the TypeScript tests (src/TypeScript only).
// Run with: npm run test:ts   (or: npx playwright test --config=playwright.config.ts)
// The JavaScript tests have their own config in playwright.config.js.
import process from 'node:process';
import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './src/TypeScript',

  // Separate output folder so TS runs never overwrite JS run artifacts
  outputDir: './test-results/typescript',

  timeout: 40 * 1000,

  expect: {
    timeout: 4 * 1000,
  },

  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  // Only set workers on CI; leaving it out locally lets Playwright pick the default.
  // (exactOptionalPropertyTypes in tsconfig forbids `workers: undefined`)
  ...(process.env.CI ? { workers: 1 } : {}),

  // Report paths are kept separate from the JS config's reports
  reporter: [
    ['list'],
    ['html', { open: 'never', outputFolder: 'playwright-report/typescript' }],
    ['json', { outputFile: 'reports/typescript/test-results.json' }],
    ['junit', { outputFile: 'reports/typescript/junit-results.xml' }],
    ['allure-playwright', { resultsDir: 'allure-results/typescript' }]
  ],

  use: {
    headless: false,
    viewport: null,
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    trace: 'on',
  },

  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    }
  ],
});

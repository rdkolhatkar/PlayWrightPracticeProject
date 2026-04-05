// @ts-check
import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './src',

  timeout: 40 * 1000,

  expect: {
    timeout: 4 * 1000,
  },

  fullyParallel: true,
  // @ts-ignore
  forbidOnly: !!process.env.CI,
  // @ts-ignore
  retries: process.env.CI ? 2 : 0,
  // @ts-ignore
  workers: process.env.CI ? 1 : undefined,

 // ✅ Multiple professional reporters
  reporter: [
    ['list'],                                       // CLI reporter
    ['html', { open: 'never' }],                    // HTML report
    ['json', { outputFile: 'test-results.json' }],  // JSON report
    ['junit', { outputFile: 'junit-results.xml' }], // CI/CD report
    ['allure-playwright']                           // Allure report
  ],

  use: {
    headless: false,
    viewport: null,
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    // trace: 'on-first-retry'
    trace: 'on',
  },

  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    }
  ],
});

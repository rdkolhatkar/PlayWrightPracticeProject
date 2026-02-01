// npx playwright test src/JavaScript/Web/tests/BasicValidationTests.spec.js
/**
 * WHY THIS FILE IS NAMED *.spec.js AND NOT *.js
 * ------------------------------------------------
 *
 * 1) "spec" means Specification
 *    - This file describes the expected behavior of the application.
 *    - Each test acts like a rule saying:
 *      "The application SHOULD behave like this."
 *
 * 2) Playwright automatically finds test files
 *    - By default, Playwright runs only files matching:
 *      *.spec.js, *.spec.ts, *.test.js, *.test.ts
 *    - Normal files like utils.js or helper.js are ignored.
 *    - This prevents accidental execution of non-test code.
 *
 * 3) Clear separation of test code and normal code
 *    - *.spec.js → Test cases only
 *    - *.js      → Helpers, utilities, configuration, business logic
 *    - This makes the project structure clean and easy to understand.
 *
 * 4) Easy test execution and filtering
 *    - We can run this file directly using:
 *      npx playwright test login.spec.js
 *    - CI/CD tools and IDEs also easily identify spec files.
 *
 * 5) Industry standard naming convention
 *    - Used in Playwright, Jest, Mocha, Cypress, etc.
 *    - Any developer or tester can instantly recognize this as a test file.
 *
 * IMPORTANT:
 * - We CAN name the file test.js, but then Playwright will NOT
 *   detect it as a test unless we change the configuration.
 * - Using *.spec.js is the recommended and safest approach.
 */
import { test, expect } from '@playwright/test';
// const {test, expect} = require('@playwright/test');
/**
 * DIFFERENCE BETWEEN:
 * import { test, expect } from '@playwright/test';
 * AND
 * const { test, expect } = require('@playwright/test');
 * -----------------------------------------------------
 *
 * 1) import { test, expect } from '@playwright/test';
 * --------------------------------------------------
 * - This is ES Module (ESM) syntax (modern JavaScript).
 * - It is resolved at compile/load time (static import).
 * - Recommended and default syntax in Playwright.
 * - Works with:
 *     • Playwright config
 *     • TypeScript
 *     • Modern JavaScript projects
 *
 * Example use case:
 * - New Playwright projects
 * - TypeScript (.ts) files
 * - Clean, readable, future-proof code
 *
 * IMPORTANT:
 * - import statements must be at the TOP of the file
 * - Cannot be used conditionally (inside if/loops)
 *
 *
 * 2) const { test, expect } = require('@playwright/test');
 * ----------------------------------------------------------------
 * - This is CommonJS (CJS) syntax (older Node.js style).
 * - It is resolved at runtime (dynamic loading).
 * - Mostly used in legacy Node.js projects.
 *
 * Example use case:
 * - Old JavaScript projects
 * - When using require() based libraries
 *
 * IMPORTANT:
 * - require() can be used anywhere in the file
 * - Can be used conditionally if needed
 *
 *
 * 3) Why Playwright prefers `import`
 * ----------------------------------
 * - Better tool support (VS Code, IntelliSense)
 * - Faster static analysis
 * - Better tree-shaking and optimization
 * - Matches modern JavaScript standards
 *
 *
 * 4) Playwright Recommendation
 * -----------------------------
 * - Always use:
 *     import { test, expect } from '@playwright/test';
 *
 * - Avoid mixing `import` and `require` in the same project
 *
 *
 * QUICK SUMMARY:
 * --------------
 * import  → Modern, clean, recommended (ES Module)
 * require → Older, runtime-based (CommonJS)
 */
test('Registration Form - Basic Validation', async ({ browser }) =>{
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto("https://vinothqaacademy.com/demo-site/");
    console.log(await page.title());
    await page.waitForTimeout(2000); // 2 seconds    
    // await page.close(); // Close CURRENT TAB (Equivalent to Selenium driver.close())
    // await context.close(); // Close ALL tabs in the current browser context, Similar to closing one window with all its tabs
    await browser.close(); // Close ENTIRE browser (Equivalent to Selenium driver.quit())
});


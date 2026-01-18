# Copilot Instructions for PlayWright Practice Project

## Project Overview
This is a Playwright testing practice project focused on automated browser testing and test automation patterns. The project serves as a learning environment for test automation best practices.

## Architecture & Key Concepts

### Test Structure
- **Page Object Model (POM)**: Use page objects to encapsulate element locators and page-specific actions
- **Test Hierarchy**: Organize tests by feature/feature area with descriptive test names
- **Fixtures**: Leverage Playwright fixtures for test setup/teardown and resource management
- **Parallel Execution**: Tests are designed to run in parallel; avoid shared state between test files

### Key Directories (when created)
- `tests/` - Test files organized by feature
- `pages/` or `pom/` - Page object classes
- `fixtures/` - Custom Playwright fixtures
- `config/` - Test configuration and constants
- `utils/` or `helpers/` - Common test utilities

## Critical Developer Workflows

### Running Tests
```bash
npx playwright test                    # Run all tests
npx playwright test <file>            # Run specific test file
npx playwright test -g "<test-name>"  # Run tests matching pattern
npx playwright test --headed          # Run in headed mode (visible browser)
npx playwright test --debug           # Run in debug mode
npx playwright test --project=chromium # Run on specific browser
```

### Test Development Commands
```bash
npx playwright codegen <url>          # Generate test code by recording
npx playwright show-trace <trace-zip>  # View test trace for debugging
npm run test:headed                   # (if configured) Run with visible browser
npm run test:debug                    # (if configured) Run in debug mode
```

## Project-Specific Patterns & Conventions

### Page Object Pattern Example
```typescript
// pages/LoginPage.ts
export class LoginPage {
  constructor(private page: Page) {}
  
  async goto() {
    await this.page.goto('/login');
  }
  
  async login(email: string, password: string) {
    await this.page.fill('[data-testid="email"]', email);
    await this.page.fill('[data-testid="password"]', password);
    await this.page.click('[data-testid="submit"]');
  }
}
```

### Test Template
```typescript
// tests/login.spec.ts
import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

test('user can login', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.goto();
  await loginPage.login('user@example.com', 'password');
  await expect(page).toHaveURL('/dashboard');
});
```

### Fixtures for Common Setup
- Use `beforeEach`/`afterEach` for per-test setup
- Use fixtures for cross-test utilities (auth contexts, API clients)
- Keep fixtures lightweight to maintain parallel execution performance

## Testing Best Practices

### Selector Strategy
1. **Prefer data attributes**: `[data-testid="element"]`
2. **Use accessible locators**: `page.getByRole()`, `page.getByLabel()`
3. **Avoid brittle selectors**: Don't rely on CSS indices or complex XPath
4. **Make selectors maintainable**: Use semantic selectors that won't break with styling changes

### Assertions
- Use Playwright's built-in matchers: `expect()` API
- Test user-visible behavior, not implementation
- Use soft assertions (`expect.soft()`) to continue testing after failures
- Check async changes with `waitForSelector()` or expect with timeout

### Debugging & Troubleshooting
- Use `page.pause()` to pause execution and inspect state
- Enable `--debug` flag for step-through debugging
- Check traces: automatically generated or use `page.context().tracing`
- Use `--headed` mode to visualize test execution
- Enable verbose logging: `DEBUG=pw:api npx playwright test`

## Integration Points & Dependencies

### Configuration
- `playwright.config.ts` - Master test configuration (browser, timeout, retry logic)
- Environment variables for base URL and credentials (never commit credentials)
- Test data fixtures separated from test logic

### CI/CD Integration
- GitHub Actions typically runs tests on PR and main branch pushes
- Artifacts capture traces and videos for failed tests
- Cross-browser testing configured in `playwright.config.ts`

### External Dependencies
- Playwright: Modern browser automation
- Test reporter plugins: Usually configured in `playwright.config.ts`
- Mock/stub libraries: Used for API mocking if needed

## When Adding New Tests
1. Create page object for the page under test if it doesn't exist
2. Use existing fixtures and utilities from `utils/` or `helpers/`
3. Name tests descriptively: `test('user can [action] when [condition]')`
4. Avoid test interdependency - each test should be independently runnable
5. Use `test.skip()` or `test.only()` during development (remove before commit)
6. Keep tests focused on single user flows - one test per major workflow

## Editor Integration
- Install Playwright Test for VSCode extension for inline test execution
- Use `.only()` for focused test development
- Leverage Copilot to generate page objects from UI requirements

// Cucumber config for the JavaScript BDD tests (src/JavaScript only).
// Run with: npm run test:OrangeHRM / test:RegistrationForm / API:Test
//   (or: npx cucumber-js --config cucumber.config.js --profile <ProfileName>)
//
// package.json has "type": "module", so this file must use ESM syntax
// ('export' instead of 'module.exports').
//   - 'export default' -> the "default" profile (used when no --profile is given)
//   - 'export const X' -> a profile named X (used with --profile X)

// ✅ Run everything (UI + API)
export default {
  require: [
    "src/JavaScript/Web/bdd/StepsDefinitions/*.js",
    "src/JavaScript/Web/bdd/Support/*.js",
    "src/JavaScript/Api/bdd/StepDefinitions/*.js",
    "src/JavaScript/Api/bdd/Utils/*.js"
  ],
  paths: [
    "src/JavaScript/Web/bdd/features/*.feature",
    "src/JavaScript/Api/bdd/features/*.feature"
  ],
  format: [
    "progress",
    "html:reports/cucumber-report.html"
  ],
  retry: 2,
  timeout: 60000
};

// ✅ Only Registration UI
export const RegistrationForm = {
  paths: [
    "src/JavaScript/Web/bdd/features/Registration.feature"
  ],
  require: [
    "src/JavaScript/Web/bdd/StepsDefinitions/RegistrationSteps.js",
    "src/JavaScript/Web/bdd/Support/hooks.js"
  ],
  format: ['progress'],
  retry: 1,
  timeout: 60000
};

// ✅ Only OrangeHRM UI
export const OrangeHRM = {
  paths: [
    "src/JavaScript/Web/bdd/features/OrangeHRM.feature"
  ],
  require: [
    "src/JavaScript/Web/bdd/StepsDefinitions/OrangeHrmSteps.js",
    "src/JavaScript/Web/bdd/Support/hooks.js"
  ],
  format: ['progress'],
  retry: 1,
  timeout: 60000
};

// ✅ Only API Tests
export const API = {
  paths: [
    "src/JavaScript/API/bdd/features/AddEmployee.feature"
  ],
  require: [
    "src/JavaScript/API/bdd/StepDefinitions/employeeApiSteps.js",
    "src/JavaScript/API/bdd/Utils/ApiUtil.js",
    "src/JavaScript/API/bdd/Utils/DBUtil.js",
    "src/JavaScript/API/bdd/Support/hooks.js"
  ],
  format: [
    "progress",
    "html:reports/api-report.html"
  ],
  retry: 1,
  timeout: 60000
};

/*
// Below format is used for defining the specific feature file and respective step drfinitions with PlayWright
module.exports = {
  default: [
    "--require", "src/JavaScript/Web/bdd/StepsDefinitions/registrationSteps.js",
    "--require", "src/JavaScript/Web/bdd/Support/hooks.js",
    "--format", "html:reports/cucumber-report.html",
    "src/JavaScript/Web/bdd/features/test.feature"
  ]
};
*/

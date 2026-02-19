module.exports = {

  // ✅ Run everything (UI + API)
  default: {
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
  },

  // ✅ Only Registration UI
  RegistrationForm: {
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
  },

  // ✅ Only OrangeHRM UI
  OrangeHRM: {
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
  },

  // ✅ Only API Tests
  API: {
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
  }

};

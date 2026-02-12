module.exports = {

  default: {
    require: [
      "src/JavaScript/Web/bdd/StepsDefinitions/*.js",
      "src/JavaScript/Web/bdd/Support/*.js"
    ],
    format: ['progress', 'html:reports/cucumber-report.html'],
    retry: 2,
    timeout: 60000
  },

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
  }

};

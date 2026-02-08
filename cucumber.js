module.exports = {
  default: {
    require: [],
    format: ['progress', 'html:reports/cucumber-report.html'],
    retry: 2
  },
RegistrationForm: {
  paths: ['src/JavaScript/Web/bdd/Features/**/*.feature'],
  require: [
    'src/JavaScript/Web/bdd/StepsDefinitions/**/*.js',
    'src/JavaScript/Web/bdd/Support/**/*.js'
  ],
  format: ['progress'],
  retry: 1,
  timeout: 30000
}
};

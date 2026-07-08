module.exports = {
  default: {
    // where to find feature files
    paths: ['features/**/*.feature'],
    
    // load step definitions and hooks before running
    require: [
      'src/steps/loginSteps.js',
      'src/support/hooks.js'
    ],
    
    // reporters
    format: [
      'progress-bar',
      'html:cucumber-report/index.html',
      'allure-cucumberjs/reporter'
    ],
    
    // generate snippets in async-await style
    formatOptions: {
      snippetInterface: 'async-await',
      resultsDir: 'allure-results'
    },
    
    // suppress publish prompt
    publishQuiet: true
  }
};
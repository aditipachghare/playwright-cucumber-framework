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
      'html:cucumber-report/index.html'
    ],
    
    // generate snippets in async-await style
    formatOptions: {
      snippetInterface: 'async-await'
    },
    
    // suppress publish prompt
    publishQuiet: true
  }
};
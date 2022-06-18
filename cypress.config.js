const { defineConfig } = require("cypress");
const { lighthouse, prepareAudit } = require("@cypress-audit/lighthouse");
const cucumber = require('cypress-cucumber-preprocessor').default
const webpackPreprocessor = require('@cypress/webpack-preprocessor')

module.exports = defineConfig({

  e2e: {
    baseUrl: 'http://localhost:8080',
    taskTimeout: 100000,
    specPattern : ['cypress/e2e/**/*.cy.js', 'cypress/e2e/**/*.feature'],
    setupNodeEvents(on, config) {

      const options = {
        // send in the options from your webpack.config.js, so it works the same
        // as your app's code
        webpackOptions: require('./webpack.dev.js'),
        watchOptions: {
          ignored: /node_modules/,
          poll: 1000
        },
      }
    
      on('file:preprocessor', webpackPreprocessor(options)),
      // implement node event listeners here
      require('@cypress/code-coverage/task')(on, config),
      on('file:preprocessor', cucumber()),
      on("before:browser:launch", (browser = {}, launchOptions) => {
        prepareAudit(launchOptions);
      });
    
      on('task', {
        async lighthouse(allOptions) {
          let txt
          // calling the function is important
          const lighthouseTask = lighthouse((lighthouseReport) => {
            let lighthouseScoreText = ''
            let lighthouseResult = lighthouseReport?.lhr?.categories
            let lighthousePerformance =
              'Performance: ' + lighthouseResult?.performance?.score + '\n'
            let lighthouseAccessibility =
              'Accessibility: ' + lighthouseResult?.accessibility?.score + '\n'
            let lighthouseBestPractices =
              'Best Practices: ' +
              lighthouseResult?.['best-practices']?.score +
              '\n'
            let lighthouseSEO = 'SEO: ' + lighthouseResult?.seo?.score + '\n'
            lighthouseScoreText =
              lighthousePerformance +
              lighthouseAccessibility +
              lighthouseBestPractices +
              lighthouseSEO
    
            console.log(lighthouseScoreText)
            txt = lighthouseScoreText
          })
    
          const report = await lighthouseTask(allOptions)
          // insert the text into the report returned the test
          report.txt = txt
          return report
        },
      })
      return {...config, numTestsKeptInMemory: 50};
    },
  },
});

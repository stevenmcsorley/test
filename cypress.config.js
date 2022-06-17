const { defineConfig } = require("cypress");
const { lighthouse, prepareAudit } = require("@cypress-audit/lighthouse");
const cucumber = require('cypress-cucumber-preprocessor').default

module.exports = defineConfig({
  e2e: {
    baseUrl: 'http://localhost:8080',
    taskTimeout: 100000,
    specPattern : ['cypress/e2e/**/*.cy.js', 'cypress/e2e/**/*.feature'],
    setupNodeEvents(on, config) {
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

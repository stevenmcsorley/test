const { defineConfig } = require("cypress");
const { lighthouse, prepareAudit } = require("@cypress-audit/lighthouse");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'http://localhost:8080',
    // specPattern: "**/*.feature",
    setupNodeEvents(on, config) {
      // implement node event listeners here
      on("before:browser:launch", (browser = {}, launchOptions) => {
        prepareAudit(launchOptions);
      });
    
      on("task", {
        lighthouse: lighthouse(), // calling the function is important
      });
    },
  },
});

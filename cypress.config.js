const { defineConfig } = require("cypress");

module.exports = defineConfig({
  // using mochawesome reporter
  reporter: 'cypress-mochawesome-reporter',
  "reporterOptions": {
    "overwrite": false,
    "charts": true,
    "reportPageTitle": "Release 1.0",
    "embeddedScreenshots": true,
    "inlineAssets": true,
    showHooks: "always",
    reportFilename: "Release_1.0_[datetime]",
    timestamp: "longDate"
  },
  "video":false, // don't add video for each test case.
  
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require('cypress-mochawesome-reporter/plugin')(on);
      
    },
  },
});

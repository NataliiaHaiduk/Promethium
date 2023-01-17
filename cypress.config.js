const { defineConfig } = require("cypress");
const {downloadFile} = require('cypress-downloadfile/lib/addPlugin');

module.exports = defineConfig({
  viewportWidth: 1920,
  viewportHeight: 1080,
  chromeWebSecurity: false,
  defaultCommandTimeout: 7000,
  e2e: {
    setupNodeEvents(on, config) {
      on('task', {downloadFile});
    },
    baseUrl: 'http://promethium.ai/'
  },
});

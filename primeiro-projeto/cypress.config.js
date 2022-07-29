const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: '1xyy2g',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});

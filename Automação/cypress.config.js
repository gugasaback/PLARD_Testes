const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: '52sszm',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});

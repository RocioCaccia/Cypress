const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents(on, config) {
      return require('./cypress/Plugins/e2e.js')(on, config)
    },
    specPattern: 'cypress/e2e/Cucumber/*.feature',
  },
})



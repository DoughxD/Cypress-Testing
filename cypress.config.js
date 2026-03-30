const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // Força saída após os testes
      on('after:run', () => {
        process.exit(0)
      })
    },
    baseUrl: "https://opensource-demo.orangehrmlive.com/web/index.php",
    viewportWidth: 1280,
    viewportHeight: 720,
  },
  chromeWebSecurity: false,
  defaultCommandTimeout: 10000,
})
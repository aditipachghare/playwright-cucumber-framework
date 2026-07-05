const { defineConfig, devices } = require('@playwright/test');
const config = require('./src/support/config');

module.exports = defineConfig({
  testDir: './tests',
  use: {
    baseURL: config.baseURL,
    headless: config.headless,
    actionTimeout: config.actionTimeout,
    navigationTimeout: config.navigationTimeout,
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    trace: 'on-first-retry',
  },
  // rest of config...
});
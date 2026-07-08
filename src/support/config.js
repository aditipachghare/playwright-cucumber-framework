require('dotenv').config();

const config = {
  baseURL: process.env.BASE_URL || 'https://www.saucedemo.com',
  browser: process.env.BROWSER || 'chromium',
  headless: process.env.HEADLESS === 'true',
  navigationTimeout: parseInt(process.env.NAVIGATION_TIMEOUT) || 60000,
  actionTimeout: parseInt(process.env.ACTION_TIMEOUT) || 60000
};

module.exports = config;
const { Before, After, BeforeAll, AfterAll, setDefaultTimeout } = require('@cucumber/cucumber');
const { chromium, firefox, webkit } = require('@playwright/test');
const config = require('./config');

setDefaultTimeout(60 * 1000);

const browsers = { chromium, firefox, webkit };

BeforeAll(async function () {
});

Before(async function (scenario) {
  const browserType = browsers[config.browser];
  this.browser = await browserType.launch({ 
    headless: config.headless 
  });
  this.context = await this.browser.newContext({
    baseURL: config.baseURL
  });
  this.page = await this.context.newPage();
  this.page.setDefaultNavigationTimeout(config.navigationTimeout);
  this.page.setDefaultTimeout(config.actionTimeout);
  console.log(`\n Starting scenario: ${scenario.pickle.name}`);
});

After(async function (scenario) {
  if (scenario.result?.status === 'FAILED') {
    const screenshot = await this.page.screenshot({ fullPage: true });
    this.attach(screenshot, 'image/png');
  }
  await this.page.close();
  await this.context.close();
  await this.browser.close();
});

AfterAll(async function () {
});
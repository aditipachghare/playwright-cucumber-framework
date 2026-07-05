const { Before, After, BeforeAll, AfterAll } = require('@cucumber/cucumber');
const { chromium } = require('@playwright/test');

BeforeAll(async function () {
  // runs once before all scenarios
  // nothing needed here for now
});

Before(async function () {
  // runs before EACH scenario
  // launch fresh browser, context and page
  this.browser = await chromium.launch({ headless: false });
  this.context = await this.browser.newContext({
    baseURL: 'https://www.saucedemo.com'
  });
  this.page = await this.context.newPage();
});

After(async function (scenario) {
  // runs after EACH scenario
  // take screenshot if scenario failed
  if (scenario.result?.status === 'FAILED') {
    const screenshot = await this.page.screenshot();
    this.attach(screenshot, 'image/png');
  }
  // cleanup
  await this.page.close();
  await this.context.close();
  await this.browser.close();
});

AfterAll(async function () {
  // runs once after all scenarios
  // nothing needed here for now
});
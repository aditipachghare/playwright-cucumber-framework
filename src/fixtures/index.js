const { test: base } = require("@playwright/test");
const LoginPage = require("../pages/LoginPage");
const InventoryPage = require("../pages/InventoryPage");

const test = base.extend({
  // Fixture 1: loginPage - automatically creates LoginPage instance
  //to create login page instance, varible = loginPage
  loginPage: async ({ page }, use) => {
    const loginPage = new LoginPage(page);
    await use(loginPage); // handed to the test
  },
  // Fixture 2: inventoryPage - automatically creates InventoryPage instance
  //to create login page instance, varible = inventoryPage

  inventoryPage: async ({ page }, use) => {
    const inventoryPage = new InventoryPage(page);
    await use(inventoryPage); // handed to the test
  },

  // Fixture 3: authenticatedPage - logs in before handing control to test
  // Fixture 3: authenticatedPage - logs in AND returns page objects ready to use
  //here we are creating instance for inventary page also as it will open once login & we will use it by default
  authenticatedPage: async ({ page }, use) => {
    const loginPage = new LoginPage(page);
    const inventoryPage = new InventoryPage(page);

    loginPage.goto();
    await loginPage.login("standard_user", "secret_sauce");

    await use({ page, inventoryPage }); // handed to test

 //   await page.close(); // execute after test // but we dont need it as palywrite do it automatically 
  },
});

module.exports = { test, expect: require('@playwright/test').expect };
const { Given, When, Then } = require('@cucumber/cucumber');
const { expect } = require('@playwright/test');
const LoginPage = require('../pages/LoginPage');
const InventoryPage = require('../pages/InventoryPage');

Given('I am on the login page', async function () {
  this.loginPage = new LoginPage(this.page);
  await this.loginPage.goto();
});

When('I login with username {string} and password {string}', async function (username, password) {
  await this.loginPage.login(username, password);
});

Then('I should see the products page with title {string}', async function (expectedTitle) {
  this.inventoryPage = new InventoryPage(this.page);
  const title = await this.inventoryPage.getTitle();
  expect(title).toBe(expectedTitle);
});

Then('I should see an error message {string}', async function (expectedError) {
  const errorMsg = await this.loginPage.getErrorMessage();
  expect(errorMsg).toContain(expectedError);
});

When('I add {string} to cart', async function (productName) {
  await this.inventoryPage.addToCart(productName);
});

Then('the cart count should be {string}', async function (expectedCount) {
  const count = await this.inventoryPage.getCartCount();
  expect(count).toBe(expectedCount);
});
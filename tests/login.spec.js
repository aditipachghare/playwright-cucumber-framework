const { test, expect } = require("../src/fixtures/index"); // imported base folder

test.describe("Login functionality", () => {
  test("should login successfully with valid credentials", async ({
    loginPage,
    inventoryPage,
  }) => {
    await loginPage.goto();
    await loginPage.login("standard_user", "secret_sauce");

    const title = await inventoryPage.getTitle();
    expect(title).toBe("Products");
  });

  test("should show error with invalid credentials", async ({ loginPage }) => {
    await loginPage.goto();
    await loginPage.login("invalid_user", "wrong_password");

    const errorMsg = await loginPage.getErrorMessage();
    expect(errorMsg).toContain("Username and password do not match");
  });

  test("should add a product to cart after login", async ({
    authenticatedPage}) => {
        const { inventoryPage } = authenticatedPage;
    await inventoryPage.addToCart('sauce-labs-backpack');
    const count = await inventoryPage.getCartCount();
    expect(count).toBe("1");
  });

  
});

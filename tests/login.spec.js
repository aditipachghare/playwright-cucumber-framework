const {test, expect}= require ('@playwright/test');

const LoginPage  = require('../src/pages/LoginPage');
const InventoryPage = require('../src/pages/InventoryPage');

test.describe('Login functionality', () => {

    test('should login successfully with valid credentials',async ({page})=>{
      
        const loginPage  = new LoginPage (page);
        const inventoryPage = new InventoryPage (page);

        await loginPage.goto();
        await loginPage.login('standard_user', 'secret_sauce');

        const title = await inventoryPage.getTitle();
        expect(title).toBe('Products'); 


    });


    test('should show error with invalid credentials',async ({page})=>{
        const loginPage = new LoginPage(page);

        await loginPage.goto();
        await loginPage.login('invalid_user','wrong_password');

        const errorMsg = await loginPage.getErrorMessage();
        expect(errorMsg).toContain('Username and password do not match');

    });

});
import {test,expect} from '@playwright/test'

import LoginPage from '../../pageobjects/LoginPageObject'
import Utils from '../../Utilities/Utils';
test.describe.skip("Login Test Cases", {tag:'@swaglabtests'}, async () => {

test('Login with Valid Credentials', async ({page}) => 
{
     const utils = new Utils(page);
     
    await test.step('Navigating to Swag Labs Application', async () => {
        await page.goto('https://www.hyrtutorials.com/', {
            waitUntil: 'load',
            timeout : 60000
        });
      
    });

await page.waitForTimeout(5000);
    /*const loginPage = new LoginPage(page);
     await loginPage.enterUserName("problem_user");
     await loginPage.enterPassword("secret_sauce");
     await loginPage.clickLoginButton();

     await page.waitForTimeout(5000);
*/
});

test.skip('Login with InValid Credentials', async ({page}) => 
{
    await page.goto('/');
    const loginPage = new LoginPage(page);
     await loginPage.enterUserName("problem_user");
     await loginPage.enterPassword("Ajay");
     await loginPage.clickLoginButton();

     await expect(loginPage.getInValidLoginErrorMessage).toEqual('Epic sadface: Username and password do not match any user in this service');

});

});
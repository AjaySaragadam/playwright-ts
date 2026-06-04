import {expect} from '@playwright/test'
import  Utils  from '../../Utilities/Utils';import {test} from '../../fixtures/CustomFixtures'

test('Playwright Automation Prcatice Test', {tag : ['@basictest']}, async ({page, utils, loginpage}, TestInfo) =>{

    test.step('Navigating to the Application', async ()=> {
       await page.goto('https://demo.automationtesting.in/', {
        waitUntil : 'domcontentloaded',
        timeout : 60000
       });
       utils.attachScreenShotToReport('Navigating to the Application', TestInfo);
    });

    test.step('Clicking on Skip Button', async ()=> {
        await utils.clickOnWebElement('#btn2');
        utils.attachScreenShotToReport('Clicked on Skip Button', TestInfo);
    });

    test.step('Entering First name', async ()=>
    {
        await page.getByPlaceholder('First Name').fill('Ajay');
        utils.attachScreenShotToReport('Entered First name', TestInfo);
    })

    test.step('Uploading a File', async ()=>
    {
        await page.locator('#imagesrc').setInputFiles('./test-data/Payslip India January_2026.pdf');
        utils.attachScreenShotToReport('Uploaded a File', TestInfo);
    })
    
    test.step('Selecting a Male Radio Button', async ()=>
    {
        await page.locator('input[type=radio]').nth(1).check();
        utils.attachScreenShotToReport('Selected a Male Radio Button', TestInfo);
    })
});
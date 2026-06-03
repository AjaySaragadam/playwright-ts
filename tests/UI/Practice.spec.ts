import {test,expect} from '@playwright/test'
import Utils  from '../../Utilities/Utils';


test('Playwright Automation Prcatice Test', {tag : ['@basictest']}, async ({page}) =>{
    const utils = new Utils(page);

   await page.goto('https://demo.automationtesting.in/', {
  waitUntil: 'load',
  timeout: 60000
});
``
    await utils.clickOnWebElement('#btn2');
    await page.locator('#imagesrc').setInputFiles('./test-data/Payslip India January_2026.pdf');
});
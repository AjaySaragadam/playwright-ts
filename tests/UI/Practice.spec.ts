import {test,expect} from '@playwright/test'
import Utils  from '../../Utilities/Utils';


test('Playwright Automation Prcatice Test', {tag : ['@basictest']}, async ({page}) =>{
    const utils = new Utils(page);

    await page.goto('/');
    await utils.clickOnWebElement('#btn2');
    await page.pause();
    await page.locator('#imagesrc').setInputFiles('./test-data/Payslip India January_2026.pdf');

});
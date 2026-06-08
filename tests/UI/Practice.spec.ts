import {test} from '../../fixtures/CustomFixtures'
import testdata from '../../test-data/json/Practice.json'
test.describe.parallel('Parallel Execution Demo', async ()=> {

test('Test Case1', {tag : '@chrome'}, async ({page, utils, loginpage}, testInfo) =>{

   await  test.step('Navigating to the Application', async ()=> {
       await page.goto('https://demo.automationtesting.in/', {
        waitUntil : 'load',
        timeout : 60000
       });
       await utils.attachScreenShotToReport('Navigating to the Application', testInfo);
    });

    await test.step('Clicking on Skip Button', async ()=> {
        await utils.clickOnWebElement('#btn2');
        await utils.attachScreenShotToReport('Clicked on Skip Button', testInfo);
    });

    await test.step('Entering First name', async ()=>
    {
        await page.getByPlaceholder('First Name').fill(testdata[0].FirstName);
        await utils.attachScreenShotToReport('Entered First name', testInfo);
    });

    await test.step('Entering Last name', async ()=>
    {
        await page.getByPlaceholder('Last Name').fill(testdata[0].LastName);
        await utils.attachScreenShotToReport('Entered Last name', testInfo);
    });

    await test.step('Entering Address', async ()=>
    {
        await page.locator('textarea[class="form-control ng-pristine ng-untouched ng-valid"]').fill(testdata[0].Address);
        await utils.attachScreenShotToReport('Entered Address', testInfo);
    });

    await test.step('Entering Email', async ()=>
    {
        await page.locator('input[type="email"]').fill(testdata[0].Email);
        await utils.attachScreenShotToReport('Entered Email', testInfo);
    });

    await test.step('Entering Phone Number', async ()=>
    {
        await page.locator('input[type="tel"]').fill(testdata[0].Phone);
        await utils.attachScreenShotToReport('Entered Phone Number', testInfo);
    });


    await test.step('Selecting a Male Radio Button', async ()=>
    {
        await page.locator('input[type=radio]').nth(0).check();
        await utils.attachScreenShotToReport('Selected a Male Radio Button', testInfo);
    });

    await test.step('Checking All 3 CheckBoxes', async ()=>
    {
        await page.locator('#checkbox1').check();
        await page.locator('#checkbox2').check();
        await page.locator('#checkbox3').check();
        await utils.attachScreenShotToReport('Checked All 3 CheckBoxes', testInfo);
    });

    await test.step('Enter Language Details', async ()=>
    {
        await page.locator('#msdd').click();
        await page.locator('a[class="ui-corner-all"]').nth(7).click();
        await utils.attachScreenShotToReport('Entered Language Details', testInfo);
    });


    await test.step('Select Skills', async ()=>
    {
        await page.locator('(//*[@class="col-md-3 col-xs-3 col-sm-3 control-label"])[8]').click();
        await page.locator('#Skills').selectOption(testdata[0].Skills);
        await utils.attachScreenShotToReport('Selected Skills', testInfo);
    });

    await test.step('Select Country', async ()=>
    {
        await page.locator('span[role="combobox"]').click();
        await page.getByRole('treeitem', {name: testdata[0].Country}).click();
        await utils.attachScreenShotToReport('Selected Country', testInfo);
    });

    await test.step('Select Year', async ()=>
    {
        await page.locator('#yearbox').selectOption(testdata[0].dob.year);
        await utils.attachScreenShotToReport('Selected Year', testInfo);
    });

    await test.step('Select Month', async ()=>
    {
        await page.getByPlaceholder('Month').selectOption(testdata[0].dob.month);
        await utils.attachScreenShotToReport('Selected Month', testInfo);
    });


    await test.step('Select Day', async ()=>
    {
        await page.locator('#daybox').selectOption(testdata[0].dob.day);
        await utils.attachScreenShotToReport('Selected Day', testInfo);
    });

    await test.step('Enter Password', async ()=>
    {
        await page.locator('#firstpassword').fill(testdata[0].Password);
        await utils.attachScreenShotToReport('Entered Password', testInfo);
    });

    await test.step('Enter Confirm Password', async ()=>
    {
        await page.locator('#secondpassword').fill(testdata[0].ConfirmPassword);
        await utils.attachScreenShotToReport('Entered Confirm Password', testInfo);
    });

     await test.step('Uploading a File', async ()=>
    {
        await page.locator('#imagesrc').setInputFiles('./test-data/Payslip India January_2026.pdf');
        await utils.attachScreenShotToReport('Uploaded a File', testInfo);
    });

    await test.step('Clicking Submit Button', async ()=>
    {
        await page.locator('#submitbtn').click();
        await utils.attachScreenShotToReport('Clicked Submit Button', testInfo);
    });

});

test('Test Case2', {tag : '@edge'}, async ({page, utils, loginpage}, testInfo) =>{

   await  test.step('Navigating to the Application', async ()=> {
       await page.goto('https://demo.automationtesting.in/', {
        waitUntil : 'load',
        timeout : 60000
       });
       await utils.attachScreenShotToReport('Navigating to the Application', testInfo);
    });

    await test.step('Clicking on Skip Button', async ()=> {
        await utils.clickOnWebElement('#btn2');
        await utils.attachScreenShotToReport('Clicked on Skip Button', testInfo);
    });

    await test.step('Entering First name', async ()=>
    {
        await page.getByPlaceholder('First Name').fill(testdata[1].FirstName);
        await utils.attachScreenShotToReport('Entered First name', testInfo);
    });

    await test.step('Entering Last name', async ()=>
    {
        await page.getByPlaceholder('Last Name').fill(testdata[1].LastName);
        await utils.attachScreenShotToReport('Entered Last name', testInfo);
    });

    await test.step('Entering Address', async ()=>
    {
        await page.locator('textarea[class="form-control ng-pristine ng-untouched ng-valid"]').fill(testdata[1].Address);
        await utils.attachScreenShotToReport('Entered Address', testInfo);
    });

    await test.step('Entering Email', async ()=>
    {
        await page.locator('input[type="email"]').fill(testdata[1].Email);
        await utils.attachScreenShotToReport('Entered Email', testInfo);
    });

    await test.step('Entering Phone Number', async ()=>
    {
        await page.locator('input[type="tel"]').fill(testdata[1].Phone);
        await utils.attachScreenShotToReport('Entered Phone Number', testInfo);
    });

    await test.step('Selecting a Female Radio Button', async ()=>
    {
        await page.locator('input[type=radio]').nth(1).check();
        await utils.attachScreenShotToReport('Selected a Female Radio Button', testInfo);
    });

    await test.step('Checking All 3 CheckBoxes', async ()=>
    {
        await page.locator('#checkbox1').check();
        await page.locator('#checkbox2').check();
        await page.locator('#checkbox3').check();
        await utils.attachScreenShotToReport('Checked All 3 CheckBoxes', testInfo);
    });

    await test.step('Enter Language Details', async ()=>
    {
        await page.locator('#msdd').click();
        await page.locator('a[class="ui-corner-all"]').nth(7).click();
        await utils.attachScreenShotToReport('Entered Language Details', testInfo);
    });


    await test.step('Select Skills', async ()=>
    {
        await page.locator('(//*[@class="col-md-3 col-xs-3 col-sm-3 control-label"])[8]').click();
        await page.locator('#Skills').selectOption(testdata[1].Skills);
        await utils.attachScreenShotToReport('Selected Skills', testInfo);
    });

    await test.step('Select Country', async ()=>
    {
        await page.locator('span[role="combobox"]').click();
        await page.getByRole('treeitem', {name:'India'}).click();
        await utils.attachScreenShotToReport('Selected Country', testInfo);
    });

    await test.step('Select Year', async ()=>
    {
        await page.locator('#yearbox').selectOption(testdata[1].dob.year);
        await utils.attachScreenShotToReport('Selected Year', testInfo);
    });

    await test.step('Select Month', async ()=>
    {
        await page.getByPlaceholder('Month').selectOption(testdata[1].dob.month);
        await utils.attachScreenShotToReport('Selected Month', testInfo);
    });


    await test.step('Select Day', async ()=>
    {
        await page.locator('#daybox').selectOption(testdata[1].dob.day);
        await utils.attachScreenShotToReport('Selected Day', testInfo);
    });

    await test.step('Enter Password', async ()=>
    {
        await page.locator('#firstpassword').fill(testdata[1].Password);
        await utils.attachScreenShotToReport('Entered Password', testInfo);
    });

    await test.step('Enter Confirm Password', async ()=>
    {
        await page.locator('#secondpassword').fill(testdata[1].ConfirmPassword);
        await utils.attachScreenShotToReport('Entered Confirm Password', testInfo);
    });

     await test.step('Uploading a File', async ()=>
    {
        await page.locator('#imagesrc').setInputFiles('./test-data/Payslip India January_2026.pdf');
        await utils.attachScreenShotToReport('Uploaded a File', testInfo);
    });

    await test.step('Clicking Submit Button', async ()=>
    {
        await page.locator('#submitbtn').click();
        await utils.attachScreenShotToReport('Clicked Submit Button', testInfo);
    });

});



});
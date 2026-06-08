import { Page, TestInfo } from "@playwright/test";
// Use Uint8Array for screenshots to avoid depending on Node's Buffer types


export default class Utils
{
   readonly page: Page;

     constructor(page:Page)
     {
        this.page=page;
     }


     public async clickOnWebElement(locator: string) : Promise<void>
     {
        await this.page.locator(locator).click();
     }

     public async inputText(locator: string, data: string) : Promise<void>
     {
        await this.page.locator(locator).fill(data);
     }

     public async clearText(locator: string) : Promise<void>
     {
        await this.page.locator(locator).clear();
     }

     public async typeText(locator: string, data: string) : Promise<void>
     {
        await this.page.locator(locator).type(data);
     }

     public async uploadSingleFile(locator: string, filePath: string) : Promise<void>
     {
          await this.page.locator(locator).setInputFiles(filePath);
     }

     public async uploadMultipleFiles(locator: string, filePaths: string[]) : Promise<void>
     {
          await this.page.locator(locator).setInputFiles(filePaths);
     }

     public async takeScreenShot() : Promise<Uint8Array>
     {
        return await this.page.screenshot();
     }


     public async attachScreenShotToReport(stepDescription : string, testinfo: TestInfo) : Promise<void>
     {
         
            await testinfo.attach(stepDescription, { 
             
               body : await this.takeScreenShot(),
               contentType: 'image/png'

            })
     }

     
}
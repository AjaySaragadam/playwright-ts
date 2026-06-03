import { Page } from "@playwright/test";


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


     
}
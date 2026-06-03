import { Page } from "@playwright/test";

export default class LoginPage
{
    username : string ='#user-name';
    password: string = '#password';
    loginbutton : string = '#login-button';
    errorMessage : string ="//*[text()='Epic sadface: Username and password do not match any user in this service']";
    page: Page;

   constructor(page:Page)
   {
         this.page=page;
   }

    public async enterUserName(testdata : string) : Promise<void>
   {
       await  this.page.locator(this.username).fill(testdata);
   }

   public async enterPassword(testdata : string) : Promise<void>
   {
       await  this.page.locator(this.password).fill(testdata);
   }

   public async clickLoginButton() : Promise<void>
   {
       await  this.page.locator(this.loginbutton).click();
   }
   
    public async getInValidLoginErrorMessage(): Promise<string> {
    return (await this.page.locator(this.errorMessage).innerText())
   }
} 
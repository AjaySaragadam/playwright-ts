

import {test as base } from '@playwright/test'
import LoginPage from '../pageobjects/LoginPageObject'
import Utils from '../Utilities/Utils'

type Myfixtures=
{
    utils:Utils;
    loginpage : LoginPage;
}
export const test = base.extend<Myfixtures>({
    
    utils : async ({page}, use) => {
        await use(new Utils(page));
    },

    loginpage : async ({page}, use) => {
        await use(new LoginPage(page));
    }
});


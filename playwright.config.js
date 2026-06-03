import { chromium, defineConfig, devices } from "@playwright/test";

export default defineConfig ({

    testDir : './tests',
    use: {
            headless : process.env.CI? true : false,
            baseURL : 'https://demo.automationtesting.in/',
            viewport: null,
            launchOptions :{
              args : ['--start-maximized']
           }
    }
    
})
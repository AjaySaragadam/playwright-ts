import {defineConfig } from "@playwright/test";

export default defineConfig ({

    testDir : './tests',
    use: {
            viewport: null,
            launchOptions :{
              args : ['--start-maximized']
           },
           ignoreHTTPSErrors: true,
    },


    projects: [
        {
            name : 'chromium',
            use : { browserName : 'chromium', channel: 'chrome'},
            grep: /@chrome/
        },
        {
            name : 'edge',
            use : { browserName : 'chromium', channel: 'msedge'},
            grep: /@edge/
        },

        {
             name : 'edge',
            use : { browserName : 'chromium', headless: true},
            grep: /@api/
        }
    ]
    
})
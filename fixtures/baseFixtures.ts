import { test as base, expect, Page, BrowserContext } from '@playwright/test'
import path from 'path'

//path of auth file
const authFile = path.join(__dirname, '..', 'auth', 'storageState.json')

//declare the fixture type

type AuthFixtures = {
    loggedInPage: Page
}

//build the fixture

export const test = base.extend<AuthFixtures>({

<<<<<<< HEAD
    loggedInPage: async ({ browser }, use,testInfo) => {
        console.log("Fixture Started");
        console.log(`Worker : ${testInfo.workerIndex}`);
        console.log(`Test   : ${testInfo.title}`);

        // ── Setup ─────────────────────────────
        // Create a new context with saved auth state

        console.log("Creating BrowserContext...");
  

        const context: BrowserContext = await browser.newContext({
            storageState: authFile,
            recordVideo:{
                dir:testInfo.outputDir
            }
        })
        console.log("Creating Page..."); 
        //Hand authenticated page to test
        const page: Page = await context.newPage()
        console.log("Control passed to test...");

        await use(page)
        console.log("Control returned from test...");
=======
    loggedInPage: async ({ browser }, use) => {
        // ── Setup ─────────────────────────────
        // Create a new context with saved auth state

        const context: BrowserContext = await browser.newContext({
            storageState: authFile
        })

        //Hand authenticated page to test
        const page: Page = await context.newPage()
        await use(page)
>>>>>>> 67d5927c1beae166de0ca5150dc243c144b5e3be

        // ── Teardown ─────────────────────────────
        // Close the manually created context
        await context.close()
<<<<<<< HEAD
        console.log("Closing BrowserContext...");
        console.log("BrowserContext Closed");
        console.log("Fixture Finished");
        if (testInfo.status!='passed'){

            const videoPath=await page.video()?.path()
            if (videoPath)
            {
                await testInfo.attach('video',{path:videoPath,
                    contentType:'video/webm'})
            }

        }
        else{

            await page.video()?.delete()
        }
=======
>>>>>>> 67d5927c1beae166de0ca5150dc243c144b5e3be

    }

})

export { expect };
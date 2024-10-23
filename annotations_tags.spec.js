import { test } from '@playwright/test'
import { fstat } from 'fs';


// skip
test.skip('skip test', async ({ page }) => {
    //this test is skipped


})

// fail
test('Fail test', async ({ page }) => {
    //will mark test as failure
    test.fail();
    await page.goto("https://demo.applitools.com/")
})

// fix me 
test.fixme('Test not be excuted and to be fixed later', async ({ page }) => {
})

// it excutes slowly 
test('slow test @smoke', async ({ page }) => {
    test.slow()
    await page.goto("https://demo.applitools.com/")
    await page.locator("#username").click()
    await page.locator("#username").fill("testdemo")
    await page.locator("#password").click()
    await page.locator("#password").fill("test123")
    await page.locator("#log-in").click()
});

//only
test.only('focus this test', async ({ page }) => {
    //Run only focused tests in the entire project
});

// skip conditionally
test('smoke tag @smoke ',async ({ page }) => {
    await page.goto("https://demo.applitools.com/")
    await page.locator("#username").click()
    await page.locator("#username").fill("testdemo")
    await page.locator("#password").click()
    await page.locator("#password").fill("test123")
    await page.locator("#log-in").click()
});

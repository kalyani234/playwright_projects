import {test,expect, chromium} from '@playwright/test'
import { clear } from 'console';

test ('video recording' , async () => {
    //	1. Create a test and create browser context

    
    const browser = await chromium.launch(
        {
            slowMo: 2000,
            headless: false
        }
    );
    const context = await browser.newContext({
        recordVideo : {
            dir: 'videos/',
            size: {width:800, height:600}
        }
    });
    const page = await context.newPage();

    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    await page.locator("//input[@name='username']").click()
    await page.locator("//input[@name='username']").fill("Admin")
    await page.locator("//input[@name='password']").click()
    await page.locator("//input[@name='password']").fill("admin123")
    await page.locator("//button[@type='submit']").click()

    await context.close();
});
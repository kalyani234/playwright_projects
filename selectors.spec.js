import {expect, test} from '@playwright/test'

//test block
test('Selectors demo',async({page})=>{
 await page.goto('https://www.saucedemo.com/')
 await page.pause()
 await page.click("id=user-name")
 await page.locator("id=user-name").fill("standard_user")
 // css selector
 await page.locator("#password").click()
 //xpath
 await page.locator("//input[@id='password']").fill("secret_sauce")
 //await page.locator("text=Login").click()
 await page.locator("input:has-text('Login')").click()
});
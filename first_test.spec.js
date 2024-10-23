import { expect, test } from "@playwright/test";

test("Demo AppliTools Login Test Functionality ", async ({ page }) => {
    await page.goto("https://demo.applitools.com/")
    await page.locator("#username").click()
    await page.locator("#username").fill("testdemo")
    await page.locator("#password").click()
    await page.locator("#password").fill("test123")
    await page.locator("#log-in").click()

});


test.only("OrangeHRM Login Test Functionality", async ({ page }) => {
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    await page.locator("//input[@name='username']").click()
    await page.locator("//input[@name='username']").fill("Admin")
    await page.locator("//input[@name='password']").click()
    await page.locator("//input[@name='password']").fill("admin123")
    await page.locator("//button[@type='submit']").click()

});

test('Nopcommerce',async (page) => {
    await page.pause() 

await page.goto('https://admin-demo.nopcommerce.com/login');
  await page.getByLabel('Email:').press('ControlOrMeta+a');
  await page.getByLabel('Email:').fill('admin@yourstore.com');
  await page.getByLabel('Email:').press('Tab');
  await page.getByLabel('Password:').fill('admin');
  await page.getByRole('button', { name: 'Log in' }).click();
})
import { test } from '@playwright/test'
import { describe } from 'node:test';

test.describe('All My tests', ()=>{


    test.beforeEach(async ({ page }) => {

        await page.goto('https://www.saucedemo.com/');
        await page.locator('[data-test="username"]').click();
        await page.locator('[data-test="username"]').fill('standard_user');
        await page.locator('[data-test="password"]').click();
        await page.locator('[data-test="password"]').fill('secret_sauce');
        await page.locator('[data-test="login-button"]').click();
        //   await page.getByRole('button', { name: 'Open Menu' }).click();
        //   await page.locator('[data-test="logout-sidebar-link"]').click();
        //await page.close()

    })

    test.afterEach(async ({ page }) => {
        await page.close()
    })

    test('Homepage', async ({ page }) => {
        //     await page.goto('https://www.saucedemo.com/');
        //   await page.locator('[data-test="username"]').click();
        //   await page.locator('[data-test="username"]').fill('standard_user');
        //   await page.locator('[data-test="password"]').click();
        //   await page.locator('[data-test="password"]').fill('secret_sauce');
        //   await page.locator('[data-test="login-button"]').click();
        await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
        await page.locator('[data-test="add-to-cart-sauce-labs-bike-light"]').click();
        // await page.locator('[data-test="item-1-title-link"]').click();
        // await page.locator('[data-test="add-to-cart"]').click();
        // await page.close()
    })


    test('Logout', async ({ page }) => {
        //     await page.goto('https://www.saucedemo.com/');
        //   await page.locator('[data-test="username"]').click();
        //   await page.locator('[data-test="username"]').fill('standard_user');
        //   await page.locator('[data-test="password"]').click();
        //   await page.locator('[data-test="password"]').fill('secret_sauce');
        //   await page.locator('[data-test="login-button"]').click();
        await page.getByRole('button', { name: 'Open Menu' }).click();
        await page.locator('[data-test="logout-sidebar-link"]').click();
        //await page.close()
    })

    test('Sort', async ({ page }) => {
        await page.locator('[data-test="product-sort-container"]').selectOption('lohi');
        await page.locator('[data-test="add-to-cart-sauce-labs-onesie"]').click();

    })

})
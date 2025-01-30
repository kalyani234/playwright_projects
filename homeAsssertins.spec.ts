import { test, expect } from '@playwright/test';
import exp from 'constants';

test('Assertions', async ({ page }) => {
  
  await page.goto("https://practicesoftwaretesting.com/")

  // Ensure Signin is present
  await expect(page.getByTestId("nav-sign-in")).toHaveText("Sign in")
  //Verify the title
  await expect(page).toHaveTitle("Practice Software Testing - Toolshop - v5.0")

  // Verify the product count is 9
 const productGrid =  page.locator(".col-md-9");
  await expect(productGrid.getByRole('link')).toHaveCount(9)
  expect(await productGrid.getByRole("link").count()).toBe(9)
  //await expect(productGrid.getByText(" Thor Hammer ")).toBeVisible()

  //search for Thor Hammer  and 
  await page.getByTestId("search-query").fill("Thor Hammer");
  await page.getByTestId("search-submit").click()
  await expect(page.getByAltText("Thor Hammer")).toBeVisible();
});
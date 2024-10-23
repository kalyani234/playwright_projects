import { expect,test } from "@playwright/test";

test ("Assertions",async({page})=>{
  await page.goto("https://kitchen.applitools.com/")
 
 
  //check element is present or not
  await expect(page.locator("text=The Kitchen")).toHaveCount(1)

  if(await page.$('text=The Kitchen')){
    await page.locator('text=The Kitchen').click()
  }

  //check element hidden or visible
  await expect(page.locator("text=The Kitchen")).toBeVisible()
  //await expect(page.locator("text=The Kitchen")).toBeHidden() // failed stop execution
  //soft assertions to continue execution even fails
  await expect.soft(page.locator("text=The Kitchen")).toBeHidden()

  //Enabled or disabled
  await expect(page.locator("text=The Kitchen")).toBeEnabled()
  await expect.soft(page.locator("text=The Kitchen")).toBeDisabled()

  //check text
  await expect(page.locator("text=The Kitchen")).toHaveText("The Kitchen")
  await expect.soft(page.locator("text=The Kitchen")).not.toHaveText("The Kitchen")

  //check attribute Value
  await expect(page.locator("text=The Kitchen")).toHaveAttribute('class',/.*css-dpmy2a/)
  await expect(page.locator("text=The Kitchen")).toHaveClass(/.*css-dpmy2a/)
  
  // check URl
  await expect(page).toHaveURL(/kitchen.applitools.com/)

  //check Title
  await expect(page).toHaveTitle(/.*Kitchen/)
  await page.pause()
  //Screenshot
  await expect(page).toHaveScreenshot()
})
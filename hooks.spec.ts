const { test, expect } = require("@playwright/test");

test.describe("Homepage with no auth", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("https://practicesoftwaretesting.com/");
  });

  test("visual test no auth", async ({ page }) => {
     await page.waitForLoadState("networkidle");
    await expect(page).toHaveScreenshot("homepage-no-auth.png", {
      mask: [page.getByTitle("Practice Software Testing - Toolshop")],
    });
  });

  test("check sign In", async ({ page }) => {
    // Ensure Sign-in is present
    const signInButton = page.getByTestId("nav-sign-in");
    await expect(signInButton).toHaveText("Sign in");
  });

  test("validate title", async ({ page }) => {
    // Verify the page title
    await expect(page).toHaveTitle(
      "Practice Software Testing - Toolshop - v5.0"
    );
  });

  test("product count validation", async ({ page }) => {
    // Verify the product count is 9
    const productGrid = page.locator(".col-md-9");
    await expect(productGrid.getByRole("link")).toHaveCount(9);
  });

  test("search for Thor Hammer", async ({ page }) => {
    //search for Thor Hammer  and
    const productGrid = page.locator(".col-md-9");
    await page.getByTestId("search-query").fill("Thor Hammer");
    await page.getByTestId("search-submit").click();
    await expect(productGrid.getByRole("link")).toHaveCount(1);
    await expect(page.getByAltText("Thor Hammer")).toBeVisible();
  });
  test.afterEach(async ({ page }) => {
    await page.close();
  });
});

test.describe("HomePage with customer02 Auth", () => {
  test.use({ storageState: ".auth/customer02.json" });
  test.beforeEach(async ({ page }) => {
    await page.goto("https://practicesoftwaretesting.com/");
  });

  test("visual test  auth", async ({ page }) => {
     await page.waitForLoadState("networkidle");
    await expect(page).toHaveScreenshot("homepage-auth.png", {
      mask: [page.getByTitle("Practice Software Testing - Toolshop")],
    });
  });
  test("check sign In of customer02 Auth", async ({ page }) => {
    // Ensure Sign-in is present
    const signInButton = page.getByTestId("nav-sign-in");
    await expect(signInButton).not.toBeVisible();
    await expect(page.getByTestId("nav-menu")).toContainText(" Jack Howe ");
  });
});

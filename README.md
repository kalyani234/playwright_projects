# Playwright Setup and Commands

## Installation

### 1. Using VSCode Terminal

- **Run the following command to install Playwright:

```bash
npm init playwright@latest
```

- Verify installation and Playwright version:

``` bash
npm playwright -v
```
Check available Playwright commands:

```bash
npx playwright -h
```
Note: npx is used to execute Playwright commands locally.

## 2. Using VSCode Extension

- Install the **Playwright** extension from the VSCode marketplace.
- Open the **Command Palette** (`Ctrl+Shift+P`), and select **Install Playwright**.
  This will create the necessary files and folder structure.

## Running Tests

To run Playwright tests, use the following commands:

- **Run all tests in headless mode**:
  ```bash
  npx playwright test
  ```

- **Run tests with 3 workers in parallel:

```bash
npx playwright test --workers=3
```
- **Run a specific test file:

```bash
npx playwright test one.spec.js
```
- **Run multiple test files:

```bash
npx playwright test one.spec.js two.spec.js
```
- **Run files that have names containing one or two:

```bash
npx playwright test one two
```
Run a test by title:

bash
Copy code
npx playwright test -g "check title"
Run tests on a specific browser in headless mode:

bash
Copy code
npx playwright test --project=chromium
Run tests on a specific browser with the browser open (headed mode):

bash
Copy code
npx playwright test --project=chromium --headed
Run tests in debug mode:

bash
Copy code
npx playwright test --project=chromium --debug
Debug a specific test file:

bash
Copy code
npx playwright test example.spec.js --debug
Debug a specific line in a test file (e.g., line 21):

bash
Copy code
npx playwright test example.spec.js:21 --debug
Assertions
Assertions are used to check whether the actual output matches the expected output:

Check if an element is visible:

javascript
Copy code
await expect(page.locator("text=The Kitchen")).toBeVisible();
Soft assertions to continue execution even if a test fails:

javascript
Copy code
await expect.soft(page.locator("text=The Kitchen")).toBeHidden();
Code Generation
Playwright comes with a built-in tool for recording tests. This opens two windows: a browser window to interact with the website and an inspector window to record tests.

To record on a specific browser:

bash
Copy code
npx playwright codegen --browser=firefox
Record and save to a file:

bash
Copy code
npx playwright codegen --target=javascript -o record_test.spec.js
Set viewport size during recording:

bash
Copy code
npx playwright codegen --viewport-size=800,600
Emulate a device:

bash
Copy code
npx playwright codegen --device="iPhone 11"
Emulate a dark color scheme:

bash
Copy code
npx playwright codegen --color-scheme=dark
Trace Viewer
Playwright Trace Viewer is a GUI tool to view executed tests, snapshots, timeline, and failure details.

To enable tracing, modify the playwright.config.js file:

javascript
Copy code
trace: 'on-first-retry',
retries: 1,
To view the trace file:

bash
Copy code
npx playwright show-trace ./test-results/trace.zip
Different trace modes:

on-first-retry: Record trace only when retrying the test for the first time.
on: Record a trace for every test.
off: Do not trace tests.
retain-on-failure: Record trace for each test but remove it once successful.
View Trace Online
Visit trace.playwright.dev and drag and drop your trace.zip file.

Flaky Tests
Flaky tests produce inconsistent results (sometimes they pass, sometimes they fail). These tests make it difficult to determine whether the failure is due to the code or the test itself.

To run only a specific test:

javascript
Copy code
test.only("OrangeHRM Login Test Functionality", async ({ page }) => {});
Slow Motion and Video Recording
Enable slow motion and video recording via Playwright's configuration file.

In playwright.config.js:

javascript
Copy code
use: {
    video: 'on',
    launchOptions: {
        slowMo: 1000 // 1 second delay
    }
},
Video recording modes:

on: Record a video for each test.
off: Don’t record videos.
retain-on-failure: Record videos for tests but remove successful test videos.
on-first-retry: Record video only when retrying the test for the first time.
Alternatively, enable slow motion and video recording in the test file:

javascript
Copy code
const browser = await chromium.launch({ slowMo: 2000, headless: false });
const context = await browser.newContext({
    recordVideo: { dir: 'videos/', size: { width: 800, height: 600 } }
});
await context.close();
Timeouts
Specify timeouts in the configuration:

javascript
Copy code
timeout: 10 * 1000,
expect: {
  timeout: 5000
},
Hooks and Groups
Hooks
beforeAll(): Runs once before all tests.
beforeEach(): Runs before each individual test.
afterEach(): Runs after each individual test.
afterAll(): Runs once after all tests.
Grouping Tests
Use describe to group related tests:

javascript
Copy code
describe('My Tests', () => {
  beforeAll(() => { /* setup */ });
  afterAll(() => { /* teardown */ });

  test('example test', () => { /* test */ });
});
Annotations
Annotations modify test behavior:

Skip:

javascript
Copy code
test.skip('message');
Only:

javascript
Copy code
test.only('message');
Fail:

javascript
Copy code
test.fail('message');
Fixme:

javascript
Copy code
test.fixme('message');
Slow:

javascript
Copy code
test.slow('message');
Set custom timeout:

javascript
Copy code
test.setTimeout(timeout);
Tagging Tests
To tag tests, add a tag in the title (e.g., @smoke):

javascript
Copy code
test('My test @smoke', async ({ page }) => { /* test */ });
Run tests by tag:

bash
Copy code
npx playwright test --grep @smoke
Page Object Model (POM)
Steps to implement POM with Playwright:

Create a new folder and open VSCode.

Initialize a Playwright project:

bash
Copy code
npm init playwright@latest
Add tests in the tests folder.

Execute the test:

bash
Copy code
npx playwright test ./tests/login.spec.js --project=chromium --headed
Create a Pages folder for page objects.

Create a new file and class for each page, e.g., login.js.

Define element locators and action methods in the page class.

Playwright API
Create a new folder.

Open the folder in VSCode and initialize Playwright:

bash
Copy code
npm init playwright@latest
Example: Send a GET request and assert status code 200.

javascript
Copy code
const response = await page.request.get('https://example.com');
expect(response.status()).toBe(200);
Happy testing! 🎭

typescript
Copy code

You can save this as a `README.md` file for better readability in markdown format. Let me know if you need any modifications!





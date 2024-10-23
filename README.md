# Playwright Setup and Commands

## Installation

### 1. Using VSCode Terminal

- **Run the following command to install Playwright**:

```bash
npm init playwright@latest
```

- **Verify installation and Playwright version**:

``` bash
npm playwright -v
```
- **Check available Playwright commands**:

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

- **Run tests with 3 workers in parallel**:

```bash
npx playwright test --workers=3
```
- **Run a specific test file**:

```bash
npx playwright test one.spec.js
```
- **Run multiple test files**:

```bash
npx playwright test one.spec.js two.spec.js
```
- **Run files that have names containing one or two**:

```bash
npx playwright test one two
```
- **Run a test by title**:

```bash
npx playwright test -g "check title"
```
- **Run tests on a specific browser in headless mode**:

```bash
npx playwright test --project=chromium
```
- **Run tests on a specific browser with the browser open (headed mode)**:

```bash
npx playwright test --project=chromium --headed
```
- **Run tests in debug mode**:

```bash
npx playwright test --project=chromium --debug
```
- **Debug a specific test file**:

```bash
npx playwright test example.spec.js --debug
```
- **Debug a specific line in a test file (e.g., line 21)**:

```bash
npx playwright test example.spec.js:21 --debug
```

## Assertions
- **Assertions are used to check whether the actual output matches the expected output**:

- **Check if an element is visible**:

```javascript
await expect(page.locator("text=The Kitchen")).toBeVisible();
```
- **Soft assertions to continue execution even if a test fails**:

```javascript
await expect.soft(page.locator("text=The Kitchen")).toBeHidden();
```

## Code Generation
Playwright comes with a built-in tool for recording tests. This opens two windows: a browser window to interact with the website and an inspector window to record tests.

- **To record on a specific browser**:

```bash
npx playwright codegen --browser=firefox
```
- **Record and save to a file**:

```bash
npx playwright codegen --target=javascript -o record_test.spec.js
```
- **Set viewport size during recording**:

```bash
npx playwright codegen --viewport-size=800,600
```
- **Emulate a device**:

```bash
npx playwright codegen --device="iPhone 11"
```
- **Emulate a dark color scheme**:

```bash
npx playwright codegen --color-scheme=dark
```

## Trace Viewer
Playwright Trace Viewer is a GUI tool to view executed tests, snapshots, timeline, and failure details.

- **To enable tracing, modify the playwright.config.js file**:

```javascript
trace: 'on-first-retry',
retries: 1,
```
- **To view the trace file**:

```bash
npx playwright show-trace ./test-results/trace.zip
```

## Different Trace Modes

Playwright offers multiple trace modes for debugging tests. You can configure these modes based on your test scenarios:

- **on-first-retry**: Records a trace only when retrying the test for the first time.
- **on**: Records a trace for every test.
- **off**: Disables tracing for tests.
- **retain-on-failure**: Records a trace for each test but removes it once the test is successful.

## View Trace Online

- **To view the trace, follow these steps**:

1. Visit [trace.playwright.dev](https://trace.playwright.dev).
2. Drag and drop your `trace.zip` file onto the page to view the trace details.

## Flaky Tests

Flaky tests produce inconsistent results—sometimes they pass, and sometimes they fail. This inconsistency makes it difficult to determine whether the failure is caused by the code or the test itself. Identifying and fixing flaky tests is crucial for maintaining reliable test suites.

### Running a Specific Test

To isolate and run only a specific test, use the `.only()` method as shown below:

```javascript
test.only("OrangeHRM Login Test Functionality", async ({ page }) => {
  // Your test code here
});
```

## Slow Motion and Video Recording
- **Enable slow motion and video recording via Playwright's configuration file**.

In playwright.config.js:

```javascript
use: {
    video: 'on',
    launchOptions: {
        slowMo: 1000 // 1 second delay
    }
},
```
### Viewing the Recorded Videos
- **Once the tests have been executed, you can find the video recordings in the output folder**:

```bash
test-results/your-test-name/video.mp4
```

## Video recording modes:

- **on:** Record a video for each test.
- **off**: Don’t record videos.
- **retain-on-failure**: Record videos for tests but remove successful test videos.
- **on-first-retry**: Record video only when retrying the test for the first time.
Alternatively, enable slow motion and video recording in the test file:

```javascript
const browser = await chromium.launch({ slowMo: 2000, headless: false });
const context = await browser.newContext({
    recordVideo: { dir: 'videos/', size: { width: 800, height: 600 } }
});
await context.close();
```
### Timeouts
- **Specify timeouts in the configuration**:

```javascript
Copy code
timeout: 10 * 1000,
expect: {
  timeout: 5000
},
```
## Hooks and Groups
### Hooks
- **beforeAll()**: Runs once before all tests.
- **beforeEach()**: Runs before each individual test.
- **afterEach()**: Runs after each individual test.
- **afterAll()**: Runs once after all tests.

### Grouping Tests
- **Use describe to group related tests**:

```javascript
describe('My Tests', () => {
  beforeAll(() => { /* setup */ });
  afterAll(() => { /* teardown */ });

  test('example test', () => { /* test */ });
});
```

### Annotations
Annotations modify test behavior:

- **Skip**:

```javascript
test.skip('message');
```
- **Only**:

```javascript
test.only('message');
```
- **Fail**:

```javascript
test.fail('message');
```
- **Fixme**:

```javascript
test.fixme('message');
```

- **Slow**:
  
```
javascript
test.slow('message');
```
- **Set custom timeout**:

```javascript
test.setTimeout(timeout);
```
### Tagging Tests
- **To tag tests, add a tag in the title (e.g., @smoke)**:

```javascript
test('My test @smoke', async ({ page }) => { /* test */ });
```

### Run tests by tag:

```bash
npx playwright test --grep @smoke
```

## Page Object Model (POM)
- **Steps to implement POM with Playwright**:

1. Create a new folder and open VSCode.
2. Initialize a Playwright project:

```bash
npm init playwright@latest
```
3. Add tests in the tests folder.
4. Execute the test:

```bash
npx playwright test ./tests/login.spec.js --project=chromium --headed
```
5. Create a Pages folder for page objects.
6.  Create a new file and class for each page, e.g., login.js.
7.  Define element locators and action methods in the page class.

### Playwright API
1. Create a new folder.
2. Open the folder in VSCode and initialize Playwright:

```bash
npm init playwright@latest
```
Example: Send a GET request and assert status code 200.

``` javascript
const response = await page.request.get('https://example.com');
expect(response.status()).toBe(200);
```

Happy testing! 🎭



You can save this as a `README.md` file for better readability in markdown format. Let me know if you need any modifications!






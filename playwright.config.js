// @ts-check
import { defineConfig, devices } from '@playwright/test';

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// import dotenv from 'dotenv';
// import path from 'path';
// dotenv.config({ path: path.resolve(__dirname, '.env') });

/**
 * @see https://playwright.dev/docs/test-configuration
 */
export default defineConfig({
  testDir: './tests',
  /* Run tests in files in parallel */

  // look for .spec.js files inside any subfolder of testDir
  testMatch: '**/*.spec.js',

  // run tests in each file sequentially (safer for now)
  // we'll enable fullyParallel once we're confident tests are independent
  fullyParallel: true,

  // prevent accidental test.only() commits breaking CI
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,

    // retry failed tests twice on CI, no retries locally
  /* Retry on CI only */
  retries: process.env.CI ? 2 : 0,

   // parallel workers - auto locally, 1 on CI
  /* Opt out of parallel tests on CI. */
  workers: process.env.CI ? 1 : undefined,  


 
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
   // reporters - we use multiple reporters together
  reporter:  [
    ['html', { outputFolder: 'playwright-report', open: 'never' }],
    ['list'] // shows real-time test results in terminal
  ],
 
 
  use: {
    /* Base URL to use in actions like `await page.goto('')`. */
    // baseURL: 'http://localhost:3000',

    // base URL - no more hardcoded URLs in Page Objects!
    baseURL: 'https://www.saucedemo.com',

     // record trace on first retry for debugging CI failures
    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    trace: 'on-first-retry',
    // take screenshot only when test fails
    screenshot: 'only-on-failure',

    // record video only when test fails
    video: 'retain-on-failure',

    // global timeout for each action (click, fill etc.) - 30 seconds
    actionTimeout: 30000,

    // global timeout for page navigations - 30 seconds
    navigationTimeout: 30000,

    // run tests in headless mode (no browser UI)
    // change to false locally if you want to see the browser
    headless: true,
  },
  // global timeout for each test - 60 seconds
  timeout: 60000,

  // global timeout for each expect assertion - 10 seconds
  expect: {
    timeout: 10000
  },

  /* Configure projects for major browsers */
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },

    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },

    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
    },

    /* Test against mobile viewports. */
    // {
    //   name: 'Mobile Chrome',
    //   use: { ...devices['Pixel 5'] },
    // },
    // {
    //   name: 'Mobile Safari',
    //   use: { ...devices['iPhone 12'] },
    // },

    /* Test against branded browsers. */
    // {
    //   name: 'Microsoft Edge',
    //   use: { ...devices['Desktop Edge'], channel: 'msedge' },
    // },
    // {
    //   name: 'Google Chrome',
    //   use: { ...devices['Desktop Chrome'], channel: 'chrome' },
    // },
  ],

  /* Run your local dev server before starting the tests */
  // webServer: {
  //   command: 'npm run start',
  //   url: 'http://localhost:3000',
  //   reuseExistingServer: !process.env.CI,
  // },
});


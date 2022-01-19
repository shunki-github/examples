const { setHeadlessWhen } = require('@codeceptjs/configure');
const { devices } = require('playwright');
require('dotenv').config();
// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
//setHeadlessWhen(process.env.HEADLESS);
setHeadlessWhen(true);

exports.config = {
  tests: './Temp.js',
  output: './output',
  helpers: {
    Playwright: {
      url: 'https://web.bachelorapp.net',
      restart: false,
      keepBrowserState: true,
      keepCookies: true,
      waitForNavigation: 'domcontentloaded',
      browser: 'chromium',
      emulate: devices['iPhone 8']
    }
  },
  bootstrap: null,
  mocha: {},
  name: 'bachelor-user-frontend',
  plugins: {
    pauseOnFail: {},
    retryFailedStep: {
      enabled: true
    },
    tryTo: {
      enabled: true
    }
  }
};
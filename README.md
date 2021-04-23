# WDIO 7.5

## Bookmarks

- Demo app https://the-internet.herokuapp.com/
- Sync will not supported from 04.2021 https://webdriver.io/docs/sync-vs-async/
- Interesting boilerplate https://github.com/17thSep/WebdriverIO_Master
- All drivers https://github.com/christian-bromann/awesome-selenium#driver

## How to run

1). Install dependencies 

`npm install` 

2). Run chromedriver

`./chromedriver90 --port=4444 --verbose`

3a). Demo: Run test

`npx wdio run wdio.conf.js --spec test/specs/example.e2e.js`

3b). Demo: Mocking

`npx wdio wdio.conf.js --spec test/specs/example.mocking.js`
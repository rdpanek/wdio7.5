exports.config = {
    runner: 'local',
    specs: [
        './test/specs/**/*.js'
    ],
    hostname: 'localhost',
    port: 4444,
    path: '/',
    exclude: [],
    maxInstances: 10,
    capabilities: [{
        maxInstances: 1,
        browserName: 'chrome',
        acceptInsecureCerts: true
    }],
    logLevel: 'info',
    bail: 1,
    baseUrl: 'http://localhost',
    waitforTimeout: 10000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,
    framework: 'mocha',
    reporters: ['spec'],
    mochaOpts: {
        // Babel setup
        require: ['@babel/register'],
        ui: 'bdd',
        timeout: 60000
    },
  }
  
import {
  Config,
  browser
 } from 'protractor';

export let config: Config = {
  framework: 'custom',
  frameworkPath: require.resolve('protractor-cucumber-framework'),

  capabilities: {
    'browserName': 'chrome'
  },
  specs: [
    '../e2e/*.feature'
  ],

  seleniumAddress: 'http://127.0.0.1:4444/wd/hub',

  getPageTimeout: 60000,
  allScriptsTimeout: 500000,

  baseURL: 'http://localhost:4200/',
  useAllAngular2AppRoots: true,

  onPrepare: () => {

          browser.ignoreSynchronization = true;
          browser.manage().window().maximize();

  },

  cucumberOpts: {
//    compiler: "ts:ts-node/register",
    strict: true,
    format: 'pretty',
    require: [ 'e2e/**/*.steps.js', 'e2e/support/*.js' ],
    tags: '@TypescriptScenario or @CucumberScenario or @ProtractorScenario',
    monochrome: true,
    profile: false,
    'no-source': true
  }
}

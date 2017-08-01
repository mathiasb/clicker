import { browser, element, by, By, $, $$, ExpectedConditions } from 'protractor';
import { defineSupportCode } from 'cucumber';

import { ConnectPageObject } from '../../src/pages/connect/connect.object';

const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');

chai.use(chaiAsPromised);
const expect = chai.expect;

defineSupportCode(function({Given, When, Then}) {
  const connect = new ConnectPageObject();

  Given('I go to the Connect page', async() => {
    browser.get('http://localhost:8100/');
    await expect(browser.getTitle()).to.eventually.equal('Connect');
    // expect(connect.addTictailButton).to.not.equal(null);
  });

  When('I press the Connect Tictail button', async() => {
    const el = element(by.css('[id=add-tictail-button]'));
//    el.click();
    // A pop-up will be shown to ask whether to go to Tictail for
    // installation of the plugin in the app store
    // Fake installation procedure and callback to this page
  });

  When('I come back to the Connect page from Tictail', async() => {
    browser.get('http://localhost:8100/');
    await expect(browser.getTitle()).to.eventually.equal('Connect');
  });

  Then('my authentication credentials are saved', async() => {
    browser.get('http://localhost:8100/');
    await expect(browser.getTitle()).to.eventually.equal('Connect');
   });

});

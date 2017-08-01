import { browser, element, by, By, $, $$, ExpectedConditions } from 'protractor';
import { defineSupportCode } from 'cucumber';

var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');

chai.use(chaiAsPromised);
var expect = chai.expect;

defineSupportCode(function({Given, When, Then}) {

  Given('I find MSFT in investable instruments list on the Add page', async() => {
    browser.get('http://localhost:4200/add?useMockData=true');
    await expect(browser.getTitle()).to.eventually.equal('Add Investment');

  });

  When('I fill in price, date and comment field', async() => {

  });
});

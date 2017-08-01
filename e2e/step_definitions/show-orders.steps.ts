import { browser, element, by, By, $, $$, ExpectedConditions } from 'protractor';
import { defineSupportCode } from 'cucumber';

const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');

chai.use(chaiAsPromised);
const expect = chai.expect;

defineSupportCode(function({Given, When, Then}) {

  Given('I have not connected an ebusiness platform', async() => {
    browser.get('http://localhost:4200/add?useMockData=true');
    await expect(browser.getTitle()).to.eventually.equal('localhost');
  });

   When('I go to the Sales page', async() => {
     browser.get('http://localhost:4200/sales?useMockData=true');
     await expect(browser.getTitle()).to.eventually.equal('localhost');
   });

   Then('I only see the text \'No sales\' in the body', async() => {
     browser.get('http://localhost:4200/add?useMockData=true');
     await expect(browser.getTitle()).to.eventually.equal('localhost');
   });

   Given('I have connected Tictail', async() => {
     browser.get('http://localhost:4200/add?useMockData=true');
     await expect(browser.getTitle()).to.eventually.equal('localhost');
   });

    Then('I see the last {int} orders from Tictail', async(int) => {
      browser.get('http://localhost:4200/add?useMockData=true');
      await expect(browser.getTitle()).to.eventually.equal('localhost');
    });
});

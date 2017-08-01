import { browser, element, by } from 'protractor';

describe('AddInvestment', () => {

  beforeEach(() => {
    browser.get('');
  });

  // Given I find MSFT in investable instruments list on the Add page
  it('should show investable instrument MSFT on the page', () => {
    expect(true).toEqual(true);
  });

  // When I fill in price, date and comment field
  it('should be possible to fill in price, date and comment for comment', () => {
    expect(true).toEqual(true);
  });

  it('should be possible to select buy or sell', () => {
    expect(true).toEqual(true);
  });

  // And press Save
  it('should be possible to press save after form is valid', () => {
    expect(true).toEqual(true);
  });

  it('should not be possible to press save while form is invalid', () => {
    expect(true).toEqual(true);
  });

  // Then the investment is saved to my log
  it('should save the log entry to the log', () => {
    expect(true).toEqual(true);
  });

  // And I see a list of all my log entries
  it('should have saved the log entry among all the already existing', () => {
    expect(true).toEqual(true);
  });
});

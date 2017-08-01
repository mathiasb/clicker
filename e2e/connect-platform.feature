Feature: Connect platforms for ebusiness
  As an ecommerce business manager
  I should be able to connect my different platforms that I use
  In order to link the information together in this app

  @CucumberScenario
  Scenario: Connect Tictail
    Given I go to the Connect page
    When I press the Connect Tictail button
    And I come back to the Connect page from Tictail
    Then my authentication credentials are saved

  @CucumberScenario
  Scenario: Connect Paypal

  @CucumberScenario
  Scenario: Connect DHL

  @CucumberScenario
  Scenario: Connect iZettle

  @CucumberScenario
  Scenario: Connect Shopify

  @CucumberScenario
  Scenario: Connect WooCommerce

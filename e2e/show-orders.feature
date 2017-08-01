Feature: Show orders from sales
  As an ecommerce business manager
  I should see the orders from my ebusiness platforms
  In order to get an overview of sales and gross profit

    @CucumberScenario
    Scenario: Show empty sales page
      Given I have not connected an ebusiness platform
      When I go to the Sales page
      Then I only see the text 'No sales' in the body

    @CucumberScenario
    Scenario: Show sales page with Tictail orders
      Given I have connected Tictail
      When I go to the Sales page
      Then I see the last 20 orders from Tictail

Feature: Advantage Online Shopping

  Scenario: Search for a product and add to cart
    Given I visit the Advantage Online Shopping website
    When I search for "Laptop"
    And I add the product to the cart
    Then I should see the product in the cart on the payment screen
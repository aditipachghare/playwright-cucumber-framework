Feature: Login functionality
  As a user of Saucedemo
  I want to be able to login
  So that I can access the products page

  Scenario: Successful login with valid credentials
    Given I am on the login page
    When I login with username "standard_user" and password "secret_sauce"
    Then I should see the products page with title "Products"

  Scenario: Login with invalid credentials
    Given I am on the login page
    When I login with username "invalid_user" and password "wrong_password"
    Then I should see an error message "Epic sadface: Username and password do not match any user in this service"

  Scenario: Add product to cart after login
    Given I am on the login page
    When I login with username "standard_user" and password "secret_sauce"
    Then I should see the products page with title "Products"
    When I add "sauce-labs-backpack" to cart
    Then the cart count should be "1"
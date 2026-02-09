Feature: OrangeHRM Login

  Scenario: Successful login with valid credentials
    Given user is on OrangeHRM login page
    When user enters valid login credentials
    And user clicks on login button
    Then user should be logged in successfully

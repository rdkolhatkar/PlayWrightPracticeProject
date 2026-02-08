Feature: User Registration
  Scenario: Successful registration with valid details
    Given user is on registration page
    When user enters valid registration details
    And user submits the form
    Then registration should be successful

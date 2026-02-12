@registration @smoke
Feature: Registration Form Validation

  Scenario: User fills and submits the registration form successfully
    Given User launches the registration demo website
    When User enters first name "John"
    And User enters last name "Doe"
    And User selects gender as "Male"
    And User enters email "john.doe@test.com"
    And User enters mobile number "9876543210"
    And User enters date of birth "10/10/1995"
    And User enters address "Pune Maharashtra India"
    And User submits the registration form
    Then Registration should be successful





    

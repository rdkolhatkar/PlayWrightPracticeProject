@orangehrm
Feature: OrangeHRM Demo Website Contact Details Update

  Scenario Outline: Login and update contact details in OrangeHRM
    Given User launches the OrangeHRM demo website
    When User logs in with username "<username>" and password "<password>"
    Then Dashboard page should be displayed
    When User navigates to My Info section
    Then Personal Details page should be displayed
    When User clicks on Contact Details tab
    And User enters address details "<street1>" "<street2>" "<city>" "<state>"
    And User selects country as "<country>"
    And User enters phone numbers "<homePhone>" "<mobile>" "<workPhone>"
    And User enters work email as "<email>"

    Examples:
      | username | password | street1      | street2 | city | state       | country | homePhone  | mobile     | workPhone   | email              |
      | Admin    | admin123 | 123 Main St  | Apt 4B  | Pune | Maharashtra | India   | 1234567890 | 9876543210 | 5555555555  | test@example.com  |

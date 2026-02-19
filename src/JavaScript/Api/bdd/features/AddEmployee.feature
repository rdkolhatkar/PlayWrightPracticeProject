Feature: Add Employee API

  Scenario Outline: Verify employee is added successfully and stored in DB
    Given I set employee details with "<employee_name>" "<employee_id>" "<job_role>"
    When I send POST request to add employee
    Then the response status should be 201
    And the response message should be "Employee Added Successfully"
    And employee should be present in database

    Examples:
      | employee_name | employee_id | job_role              |
      | Suraj         | SJ123       | Front-End Developer   |
      | Ramesh        | RM456       | Backend Developer     |

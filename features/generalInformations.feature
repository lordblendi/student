Feature: General informations
  As a student
  I want to get general information

  Scenario: Get general information about the laboratory
    Given I am on the main page
    When I press the Labor button
    Then I see the date
    And I see the demonstrator's name: "Teszt Oktató 1"
    And I see the location: "IL105"

Feature: During Laboratory information
  As a student
  I want to get my entry test grade
  and I want to get my report grade
  and I want to get my laboratory grade
  and I want to get my laboratory review
  and I want to get my report review


  Scenario: Get remaining time and repository URL
    Given I am using the laboradmin portal
    And I am on the laboratory page
    When  I press the Labor után button
    Then I see the demonstrator's name and the entry test grade: 5 ("Teszt Oktató 1")
    And I see the report grade and the evaluator's name: 4 ("Teszt Oktató 2")
    And I see the laboratory grade and the demonstrator's name: 4 ("Teszt Oktató 1")
    And I see my laboratory review
    And I see my report review


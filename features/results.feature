Feature: During Laboratory information
  As a student
  I want to get my entry test grade
  and I want to get my report grade
  and I want to get my laboratory grade
  and I want to get my laboratory review
  and I want to get my report review


  Scenario: Get leftover time and repository URL
    Given I am on the home page
    And I am on the laboratory page
    When  I press the Labor után button
    Then I should see the demonstrator's name and the entry test grade: 5 ("Teszt Oktató 1")
    And I should see the report grade and the evaluator's name: 4 ("Teszt Oktató 2")
    And I should see the laboratory grade and the demonstrator's name: 4 ("Teszt Oktató 1")
    And I should see my laboratory review
    And I should see my report review


Feature: During Laboratory information
  As a student
  I want to get the git repository URL
  and I want to know the leftover time

  Scenario: Get leftover time and repository URL
    Given I am on the home page
    And I am on the during laboratory page
    When  I press the Labor alatt button
    Then I should see the remaining time till the deadline
    And I should see the repository URL: "git@gitlab.db.bme.hu:pelda/pelda.git"
    And I should see the entry test grade and the demonstrator's name: 5 ("Teszt Oktató 1")

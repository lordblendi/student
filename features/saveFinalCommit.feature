Feature: Save New Final Commit
  As a student
  I want to get the git repository URL
  and I want to know the leftover time

  Scenario: Get leftover time and repository URL
    Given I am on the laboradmin website
    And I am on the during laboratory tab
    When  I press the Mentés button
    Then I saved a new final commit

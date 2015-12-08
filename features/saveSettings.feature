Feature: Save Settings
  As a student
  I want to save a new password
  And I want to save a new ssh-key
  And I want to save a new e-mail
  And I want to change my notification settings
  And I want to change my mailinglist subscription

  Background:
    Given I am using laboradmin website
    And I am on the settings page
    And I fill the email field
    And I fill the ssh-key field

  Scenario: Set new ssh-key, e-mail, notification subscription and mailing list subscription
    When  I press the "Mentés" button
    Then I saved the new settings

  Scenario: Set new password
    Given I fill the password fields correctly
    When  I press the "Mentés" button
    Then I saved a new password

  Scenario: Try to set a new password incorrectly #1
    Given I fill the password fields incorrectly
    When  I press the "Mentés" button
    Then I could not save a new password

  Scenario: Try to set a new password incorrectly #2
    Given I fill the old password field
    When  I press the "Mentés" button
    Then I could not save a new password

  Scenario: Try to set a new password incorrectly #3
    Given I fill the new password again field
    When  I press the "Mentés" button
    Then I could not save a new password

  Scenario: Try to set a new password incorrectly #4
    Given I fill the new password field
    When  I press the "Mentés" button
    Then I could not save a new password

  Scenario: Try to set a new password incorrectly #5
    Given I fill the new password field
    And I fill the new password again field
    When  I press the "Mentés" button
    Then I could not save a new password

  Scenario: Try to set a new password incorrectly #6
    Given I fill the new password field
    And I fill the old password field
    When  I press the "Mentés" button
    Then I could not save a new password

  Scenario: Try to set a new password incorrectly #7
    Given I fill the new password again field
    And I fill the old password field
    When  I press the "Mentés" button
    Then I could not save a new password


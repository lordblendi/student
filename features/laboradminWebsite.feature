Feature: laboradmin website
  As a user of laboradmin
  I want to visit the portal

  Scenario: Opening the portal
    When I visit the laboradmin homepage
    Then I see "laboradmin" as the page title

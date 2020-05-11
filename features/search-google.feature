Feature: Search google


  Scenario: When I enter a keyword in google search
    Given that I'm at the search page
    When I enter search text "rubber ducking"
    And I click the search button
    Then the first test result should contain the word "rubber ducking"

Feature: Search IMDB

  Scenario: When I enter a keyword in the search field
    Given that I am on the IMDB site
    When I enter the search text "Die Hard"
    And I click search button
    Then the first search result should contain the word "Die Hard"

  Scenario: When I enter a keyword in the search field
    Given that I am on the IMDB site
    When I enter the search text "Die Hard" + ENTER
    Then the first search result should contain the word "Die Hard"
Feature: IMDb's Search Field

    As a visitor on IMDb, I want to be able to search for movies, actors/actresses, authors etc.
    Because finding what I'm looking for with just typing it; would be really helpful

  Scenario: Searching for something that doesn't exist using click
    Given that I am on IMDbs website
    When I type in search text "äpdqwjeha"
    And click the search button
    Then the search result should contain the text message "No results found for "

  Scenario: Searching for something that doesn't exist using ENTER
    Given that I am on IMDbs website
    When I type search text "löäkpälkadawjd" + ENTER
    Then the search result should contain the message "No results found for "

  Scenario: Navigate search suggestions and then press ENTER to load given suggestion
    Given that I am on IMDbs website
    When I type search text "The Shining"
    And then press down arrow + ENTER
    Then I should be taken to the detail page of "The Shining"

Scenario: Search for an existing movies 
    Given that I am on IMDbs website
    When I search for an existing movie "John Wick"
    And click the search button
    Then the search result should show result of "John Wick"
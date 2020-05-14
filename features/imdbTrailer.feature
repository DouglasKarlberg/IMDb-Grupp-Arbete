Feature: Visit a trailer and explore it


  Scenario: When I visit a trailer to watch
    Given that I am on IMDbs website
    When I click to browse trailers
    And click on any trailer and watch if it plays

  Scenario: When I visit a trailer and pause it once it plays
    Given that I am on the IMDB site trailers page
    And click on any trailer and pause it when it plays
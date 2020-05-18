Feature: Visit a trailer and explore it

  Scenario: When I visit a trailer to watch
    Given that I am on IMDbs website
    When I want to browse trailers
    And click on any trailer and watch if it plays

  Scenario: When I visit a trailer and pause it once it plays
    Given that I am on IMDB site trailers page
    And click on any trailer and pause it when it plays

  Scenario: Visiting a trailer and mute it 
    Given that I am on IMDB site trailers page
    And click on any trailer and mute it when it plays

  Scenario: I wanted to find out more about the trailer's movie
    Given that I am on IMDbs website
    When I click to browse trailers
    And click on any trailer
    And visit the trailer's movie detail page

  Scenario: When visitng a trailer's page, I will be able to add to my 'Watchlist' and view it.
    Given that I am on a trailers page
    When I click on the add icon left to the movie list, it would ask to sign in first
    Then I should be taken to page with sign in options
    When I click on Sign in with IMDb button
    Then I should be taken to sign in page
    When I click on Email input window
    And type in my email address
    And then click on Password input window
    And type in my password
    And click on Sign-In
    And I will be able to see my recent viewed list by visiting 'Watchlist'
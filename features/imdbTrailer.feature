Feature: Visit a trailer and explore it


  Scenario: When I visit a trailer to watch
    Given that I am on IMDbs website
    When I click to browse trailers
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


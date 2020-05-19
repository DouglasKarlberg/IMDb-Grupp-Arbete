Feature: General

  On IMDB site should be able to click on carousel, click on featured todays card,
  click on what to watch card, born today card, top news card and click on card.


  #Scenario: Navigate with help av arrows on carousel
  #   Given that I am on IMDbs website
  #   When I click left arrow
  #   Then I should se next image

  Scenario: Click on any card under what to watch.
    Given that I am on IMDbs website
    When I click on any card what to watch today
    Then I should see detail page

  Scenario: Click on born today card
    Given that I am on IMDbs website
    When I click on born today card
    Then it should take me to detail page

  Scenario: I click on top news
    Given that I am on IMDbs website
    When I click on on top news
    Then It should take me to detail page

  Scenario: Search for the move Home Alone and load result of writer
    Given that I am on IMDbs website
    When I type movie name "Home Alone"
    And then press + ENTER
    Then It should taken me to detail page of "Home Alone"
    And click on writer name
    Then It should take me to writers detail page

  Scenario: click on the movie´s star on detail page Interstellar
    Given that I am on IMDbs website
    When type the movie name "Interstellar"
    And to come to movie page press + ENTER
    Then come to detail page of "Interstellar"
    And click on stars of movie
    Then It should take me to stars detail page

  Scenario: visit movie´s director on detail page Fight Club
    Given that I am on IMDbs website
    When search for the movie name "Fight Club"
    And come to movie press + ENTER
    Then get to detail page of "Fight Club"
    And click on Director of movie
    Then should see detail page of Director of movie

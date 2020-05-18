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

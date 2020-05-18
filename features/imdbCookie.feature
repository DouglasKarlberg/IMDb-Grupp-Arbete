Feature: Clear and visit recently viewed movies

  Scenario: Clear my history from recently viewed movie's page
    Given that I load detail's page for a film
    When clicking on 'IMDb' brand logo to load startpage
    Then by clicking 'Clear all', all recently viewed will be cleared

  Scenario: Visit a recently viewed movie
    Given that I load detail's page for a film
    When clicking on 'IMDb' brand logo to load startpage
    Then click on the card under 'Recently viewed' for the movie's page you just left
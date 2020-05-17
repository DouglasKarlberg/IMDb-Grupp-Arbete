Feature: Clear and visit recently viewed movies

  Scenario: Clear my history from recently viewed movie's page
    Given that I load detail's page for a film
    When clicking on 'IMDb' brand logo to load startpage
    Then by clicking 'Clear all', all recently viewed will be cleared
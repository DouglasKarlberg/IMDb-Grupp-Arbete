Feature: Clear and visit recently viewed movies

  Scenario: Remove a recently viewed movie
    Given that I am on IMDbs website
    When I type search text "Parasite"
    And then press down arrow + ENTER
    Then I should be taken to the detail page of "Parasite"
    When I browse the detail page a little
    And then click home button
    Then startpage should load
    When I scroll down to recently viewed
    And then click on clear all button
    Then message "You have no recently viewed pages" should appear

  Scenario: Visit a recently viewed movie and the remove it
    Given that I am on IMDbs website
    When I type search text "Parasite"
    And then press down arrow + ENTER
    Then I should be taken to the detail page of "Parasite"
    When I browse the detail page a little
    And then click home button
    Then startpage should load
    When I scroll down to recently viewed
    And then click on the recently viewed movie
    Then I should be taken to the detail page of "Parasite"
    When I scroll down to recently viewed on detail page
    And click on clear all
    And then click home button
    Then startpage should load
    When I scroll down to recently viewed
    Then message "You have no recently viewed pages" should appear


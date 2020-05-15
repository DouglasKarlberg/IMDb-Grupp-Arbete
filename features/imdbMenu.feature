Feature: Explore menu, submenus and its contents


  Scenario: I will be able to visit any desired link 
    Given that I am on IMDbs website
    When I click the main menu
    And visit any title from the drop down menu

  Scenario: When open the main menu, I shall close it
    Given that I am on IMDbs website
    When I click the main menu
    And close the menu by clicking on 'X' button

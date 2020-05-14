Feature: Login and account

   As a regular visitor to IMDb's website; I would like to be able to have an account to login to
   and personilize so that I can express who I am and also keep track on bookmarked movies. I also
   want to be able to change  user ID incase I regret my ID name and change password

   Scenario: Sign in with IMDB
    Given that I am on IMDbs website
    When I click Sign in button
    Then I should be taken to page with sign in options
    When I click on Sign in with IMDb button
    Then I should be taken to sign in page
    When I click on Email input window
    And type in my email address
    And then click on Password input window
    And type in my password
    And click on Sign-In
    Then my username should appear up in right corner

   Scenario: Sign in with IMDB with correct email and wrong password
    Given that I am on IMDbs website
    When I click Sign in button
    Then I should be taken to page with sign in options
    When I click on Sign in with IMDb button
    Then I should be taken to sign in page
    When I click on Email input window
    And type in my email address
    And then click on Password input window
    And I type in incorrect password "WrongPassword123"
    And click on Sign-In
    Then I should receive an error message of any kind

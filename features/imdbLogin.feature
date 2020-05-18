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

   Scenario: Add and change bio text on edit profile
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
    Then I click on my username up in right corner
    And then I click on Your activity
    And then I click on Edit profile
    And then I click on bio input window
    And I type in any sample text into the bio
    And then I click on Save Description
    And then my sample text should appear on my profile
    And then I click on Edit profile
    And then I click on bio input window
    And I remove already existing bio and replace it with new sample text
    And then I click on Save Description

   Scenario: Change password and log in with new password
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
    Then I click on my username up in right corner
    And then I click on Account settings
    And then I click on Login & security
    And then I click on Edit for password
    And then I click on Current password input window
    And type in my current password
    And then I click on New Password input window
    And type in new password
    And then click on Reenter new password input window
    And type in new password again
    And I click on Save changes
    And I click Done button
    Then I click on my username up in right corner
    And then I click on Sign out
    When I click on Sign in with IMDb button
    Then I should be taken to sign in page
    When I click on Email input window
    And type in my email address
    And then click on Password input window
    And type in my new password
    And click on Sign-In
    Then my username should appear up in right corner

    Scenario: Change back to old password again
     Given that I am on IMDbs website
     When I click Sign in button
     Then I should be taken to page with sign in options
     When I click on Sign in with IMDb button
     Then I should be taken to sign in page
     When I click on Email input window
     And type in my email address
     And then click on Password input window
     And type in the new password
     And click on Sign-In
     Then I click on my username up in right corner
     And then I click on Account settings
     And then I click on Login & security
     And then I click on Edit for password
     And then I click on Current password input window
     And type in the new current password
     And then I click on New Password input window
     And type in old password
     And then click on Reenter new password input window
     And type in old password again
     And I click on Save changes
     And I click Done button
     Then I click on my username up in right corner
     And then I click on Sign out
     When I click on Sign in with IMDb button
     Then I should be taken to sign in page
     When I click on Email input window
     And type in my email address
     And then click on Password input window
     And type in my password
     And click on Sign-In
     Then my username should appear up in right corner

   Scenario: Changing IMDb user ID
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
    Then I click on my username up in right corner
    And then I click on Your activity
    And then I click on Edit profile
    And then I click on Edit for User ID
    And then I click on User ID input window
    And replace it with new User ID
    And then I click on Save changes
    Then I click on my username up in right corner
    And then I click on Your activity
    And my ID should be changed on profile to new ID

   Scenario: Changing IMDb user ID back to previous ID
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
    Then I click on my username up in right corner
    And then I click on Your activity
    And then I click on Edit profile
    And then I click on Edit for User ID
    And then I click on User ID input window
    And replace it with old User ID again
    And then I click on Save changes
    Then I click on my username up in right corner
    And then I click on Your activity
    And my ID should be changed on profile back to old ID


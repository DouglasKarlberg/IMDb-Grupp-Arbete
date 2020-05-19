let { $, sleep } = require('./funcs');
const {email, username, password} = require('./credentials.json');
const {email2, username2, password2} = require('./credentialsSecret.json');

module.exports = function () {

    let sleepTime = 0;

  /////////////////////////////////////
  //Given that I am on IMDb site
  /////////////////////////////////////
    
    //When I click Sign In button
    this.When(/^I click Sign in button$/, async function () {
        let imdbSignInButton = await driver.findElement(by.linkText('Sign In'));
        expect(imdbSignInButton, 'Sign in button was not found');
        await imdbSignInButton.click();
        await sleep(sleepTime)
    });

    //Then I should be taken to page with sign in options
    this.Then(/^I should be taken to page with sign in options$/, async function () {
        await driver.wait(until.elementLocated(By.css('div[id="signin-options"]')));
        let signInWithIMDb = await $('span[class="auth-sprite imdb-logo retina "');
        expect(signInWithIMDb, 'Sign in with IMDb button was not found');
    });

    //When I click on 'Sign In with IMDb' button
    this.When(/^I click on Sign in with IMDb button$/, async function () {
        let signInWithIMDb = await $('span[class="auth-sprite imdb-logo retina "');
        expect(signInWithIMDb, 'Sign in with IMDb button was not found');
        await signInWithIMDb.click();
        await sleep(sleepTime);
    });

    //Then I should be taken to sign in page
    this.Then(/^I should be taken to sign in page$/, async function () {
        let h1 = await $('h1[class="a-spacing-small"]');
        let h1GetText = await h1.getText();
        expect(h1GetText).to.include("Sign-In", 'Sign-In was not found on site');
        await sleep(sleepTime);
    });

    //When I click on Email input window
    this.When(/^I click on Email input window$/, async function () {
        let inputWindow = await $('input[name="email"]');
        expect(inputWindow, 'Email input window was not found');
        await inputWindow.click();
    });

    //When type in my email address
    this.When(/^type in my email address$/, async function () {
        let inputWindowEmail = await $('input[name="email"]');
        expect(inputWindowEmail, 'Email input window was not found');
        await inputWindowEmail.sendKeys(email);         //Type in first part of email which comes from credentialsP1.json
        await sleep(5000);                              //Wait 5 seconds
    });

    //And then click on password input window
    this.When(/^then click on Password input window$/, async function () {
        let inputWindowPassword = await $('input[name="password"]');
        expect(inputWindowPassword, 'Password input window was not found');
    });

    //When I type in my password
    this.When(/^type in my password$/, async function () {
        let inputWindowPassword = await $('input[name="password"]');
        expect(inputWindowPassword, 'Password input window was not found');
        await inputWindowPassword.sendKeys(password);   //Type in first part of password which comes from credentialsP1.json
        await sleep(5000);                              //Wait 5 seconds
    });

    //And click on Sign-In
    this.When(/^click on Sign\-In$/, async function () {
        let signInButton = await $('input[id="signInSubmit"]');
        expect(signInButton, 'Sign-In button was not found');
        await signInButton.click();
        await sleep(sleepTime);
    });

    //Then my username should appear up in right corner
    this.Then(/^my username should appear up in right corner$/, async function () {
        await driver.wait(until.elementLocated(By.css('.ipc-button__text')));
        let accountName = await $('label[aria-label="Toggle Acount Menu"]');
        expect(accountName, 'User name on up right corner was not found');
        let accountNameGetText = await accountName[1].getText();
        expect(accountNameGetText).to.include(username);
    });


    //================= SCENARIO: 'Sign in with IMDB with correct email and wrong password' BEGINS =================

    ///////////////////////////////////
    //Given that I am on IMDbs website
    ///////////////////////////////////

    ///////////////////////////////////
    //When I click Sign in button
    ///////////////////////////////////

    ///////////////////////////////////
    //Then I should be taken to page with sign in options
    ///////////////////////////////////

    ///////////////////////////////////
    //When I click on Sign in with IMDb button
    ///////////////////////////////////

    ///////////////////////////////////
    //Then I should be taken to sign in page
    ///////////////////////////////////

    ///////////////////////////////////
    //When I click on Email input window
    ///////////////////////////////////

    ///////////////////////////////////
    //And type in my email address
    ///////////////////////////////////

    ///////////////////////////////////
    //And then click on Password input window
    ///////////////////////////////////

    //When type in incorrect password
    this.When(/^I type in incorrect password "([^"]*)"$/, async function (wrongPassword) {
        let inputWindowPassword = await $('input[name="password"]');
        expect(inputWindowPassword, 'Password input window was not found');
        expect(wrongPassword).to.not.equal(password, 'wrongPassword was equal to password');
        await inputWindowPassword.sendKeys(wrongPassword);
        await sleep(sleepTime);
    });

    //Then I should receive an error message of any kind
    this.Then(/^I should receive an error message of any kind$/, async function () {
        let h4 = await $('h4');
        let h4GetText = await h4.getText();
        expect(h4GetText).to.include("There was a problem");
    });

    //================= SCENARIO: 'Sign in with IMDB with correct email and wrong password' ENDS =================

    //================= SCENARIO: 'Add and change bio text on edit profile' BEGINS =================´

    ///////////////////////////////////
    //Given that I am on IMDbs website
    ///////////////////////////////////

    ///////////////////////////////////
    //When I click Sign in button
    ///////////////////////////////////

    ///////////////////////////////////
    //Then I should be taken to page with sign in options
    ///////////////////////////////////

    ///////////////////////////////////
    //When I click on Sign in with IMDb button
    ///////////////////////////////////

    ///////////////////////////////////
    //Then I should be taken to sign in page
    ///////////////////////////////////

    ///////////////////////////////////
    //When I click on Email input window
    ///////////////////////////////////

    ///////////////////////////////////
    //And type in my email address
    ///////////////////////////////////

    ///////////////////////////////////
    //And then click on Password input window
    ///////////////////////////////////

    ///////////////////////////////////
    //And type in my password
    ///////////////////////////////////

    ///////////////////////////////////
    //And click on Sign-In
    ///////////////////////////////////

    //Then I click on my username up in right corner
    this.Then(/^I click on my username up in right corner$/, async function () {
        await driver.wait(until.elementLocated(By.css('.ipc-button__text'))); 
        let userNameToggleMenu = await $('label[aria-label="Toggle Acount Menu"]')//Since there are 2 label[aria-label="Toggle Acount Menu"] in an array
        expect(userNameToggleMenu, 'Toggle Acount Menu was not found');
        userNameToggleMenu[1].click();                                            //I click on the second element instead of the first one, because the second element highlights the button
        await sleep(sleepTime);
    });

    //Then I click on Your activity
    this.Then(/^then I click on Your activity$/, async function () {
        await driver.wait(until.elementLocated(By.css('a[role="menuitem"]')));                 //Wait for a[role="menuitem"] to be located before step continues
        let yourActivityButton = await driver.findElement(By.partialLinkText('Your activity'));//I find the button through it's link text which is 'Your activity' and send it to 'yourActivityButton'
        expect(yourActivityButton, '"Your Activity" was not found');
        await yourActivityButton.click();
        await sleep(1500);    
    });

    //Then I click on Edit profile
    this.Then(/^then I click on Edit profile$/, async function () {   
        await driver.wait(until.elementLocated(By.css('div[class="aux-content-widget-2"]')));
        let editProfileButton = await driver.findElement(By.partialLinkText('Edit profile'));//Find element with partial link text 'Edit profile'
        expect(editProfileButton, 'Edit profile was not found');
        await editProfileButton.click();
        await sleep(1500);
    });

    //Then I click on bio input window
    this.Then(/^then I click on bio input window$/, async function () {
        await driver.wait(until.elementLocated(By.css('div[data-userbio]')));
        let bioTextWindow = await $('textarea[name="bio"]');
        expect(bioTextWindow, 'Bio text window was not found');
        await bioTextWindow.click();
        await sleep(500);
    });

    //Then I type in any sample text into the bio
    this.Then(/^I type in any sample text into the bio$/, async function () {
        let bioTextWindow = await $('textarea[name="bio"]');
        expect(bioTextWindow, 'Bio text window was not found');
        await bioTextWindow.sendKeys("Sample text bio");
        await sleep(sleepTime);
    });

    //Then I click on Save Description
    this.Then(/^then I click on Save Description$/, async function () {
        //let saveDescButton = await $('div[class="user-bio-actions"]');
        let saveDescButton2 = await $('div[class="auth-button-link auth-button--primary"]');
        expect(saveDescButton2, 'Save Description button was not found');
        await saveDescButton2.click();
        await sleep(500);
    });

    //Then my sample text should appear on my profile
    this.Then(/^then my sample text should appear on my profile$/, async function () {
        await driver.wait(until.elementLocated(By.css('div[class="header"]')));
        await driver.wait(until.elementLocated(By.css('h1')));
        let bioText = await $('div[class="toggle-overflow biography markdown"]');
        expect(bioText, 'Bio text was not found');
        let bioTextGetText = await bioText.getText();
        expect(bioTextGetText).to.equal("Sample text bio", 'bio text did not match what was written');
        await sleep(500);
    });

    ///////////////////////////////////
    //Then I click on Edit profile
    ///////////////////////////////////

    ///////////////////////////////////
    //Then I click on bio input window
    ///////////////////////////////////

    //Then I remove already existing bio and replace it with new sample text
    this.Then(/^I remove already existing bio and replace it with new sample text$/, async function () {
        await driver.wait(until.elementLocated(By.css('div[data-userbio]')));
        let bioTextWindow = await $('textarea[name="bio"]');
        expect(bioTextWindow, 'Bio Text Window was not found');
        bioTextWindow.sendKeys(selenium.Key.CONTROL, 'a');      //Send in CTRL + A
        await sleep(1000);
        bioTextWindow.sendKeys(selenium.Key.DELETE);            //Send in DELETE this works like backspace in this case
        await sleep(500);
    });

    ///////////////////////////////////
    //Then I click on Save Description
    ///////////////////////////////////
    
    //================= SCENARIO: 'Add and change bio text on edit profile' ENDS =================

    //================= SCENARIO: 'Change password and log in with new password' BEGINS =================

    ///////////////////////////////////
    //Given that I am on IMDbs website
    ///////////////////////////////////
    //When I click Sign in button
    ///////////////////////////////////
    //Then I should be taken to page with sign in options
    ///////////////////////////////////
    //When I click on Sign in with IMDb button
    ///////////////////////////////////
    //Then I should be taken to sign in page
    ///////////////////////////////////
    //When I click on Email input window
    ///////////////////////////////////
    //And type in my email address
    ///////////////////////////////////
    //And then click on Password input window
    ///////////////////////////////////
    //And type in my password
    ///////////////////////////////////
    //And click on Sign-In
    ///////////////////////////////////
    //Then I click on my username up in right corner//
    ///////////////////////////////////

    //Then I click on Account settings
    this.Then(/^then I click on Account settings$/, async function () {
        await driver.wait(until.elementLocated(By.css('a[role="menuitem"]')));                 
        let AccountSettingsButton = await driver.findElement(By.partialLinkText('Account settings'));
        expect(AccountSettingsButton, '"Account settings" was not found');
        await AccountSettingsButton.click();
        await sleep(sleepTime);  
    });

    //Then I click on login & security
    this.Then(/^then I click on Login & security$/, async function () {
        await driver.wait(until.elementLocated(By.css('div[class="article"]')));
        let loginAndSecurityButton = await driver.findElement(By.partialLinkText('Login and security'));
        expect(loginAndSecurityButton, '"Login and security" was not found');
        await loginAndSecurityButton.click();
        await sleep(1000);
    });

    //Then I click on Edit for password
    this.Then(/^then I click on Edit for password$/, async function () {
        let editPasswordButton = await $('input[id="auth-cnep-edit-password-button"]');
        expect(editPasswordButton, 'Edit button was not found');
        await editPasswordButton.click();
        await sleep(1000);
    });

    //Then I click on Current password input window
    this.Then(/^then I click on Current password input window$/, async function () {
        await driver.wait(until.elementLocated(By.css('div[class="a-box"]')));
        let currentPwWindow = await $('input[id="ap_password"]');
        expect(currentPwWindow, 'Current password input window was not found');
        await currentPwWindow.click();
        await sleep(1000);
    });

    //Then type in my current password
    this.Then(/^type in my current password$/, async function () {
        let currentPwWindow = await $('input[id="ap_password"]');
        expect(currentPwWindow, 'Current password input window was not found');
        await currentPwWindow.sendKeys(password);
        await sleep(1000);
    });

    //Then I click on New Password input window
    this.Then(/^then I click on New Password input window$/, async function () {
        let newPwWindow = await $('input[id="ap_password_new"]');
        expect(newPwWindow, 'New password input window was not found');
        await newPwWindow.click();
        await sleep(1000);
    });

    //Then type in new password
    this.Then(/^type in new password$/, async function () {
        let newPwWindow = await $('input[id="ap_password_new"]');
        expect(newPwWindow, 'New password input window was not found');
        await newPwWindow.sendKeys("SeleniumNewPW123");
        await sleep(1000);
    });

    //Then click on Reenter new password input window
    this.Then(/^then click on Reenter new password input window$/, async function () {
        let newPwWindowCheck = await $('input[id="ap_password_new_check"]');
        expect(newPwWindowCheck, 'Reenter new password input window was not found');
        await newPwWindowCheck.click();
        await sleep(1000);
    });

    //Then type in new password again
    this.Then(/^type in new password again$/, async function () {
        let newPwWindowCheck = await $('input[id="ap_password_new_check"]');
        expect(newPwWindowCheck, 'Reenter new password input window was not found');
        await newPwWindowCheck.sendKeys("SeleniumNewPW123");
        await sleep(1000);
    });

    //Then I click on Save changes
    this.Then(/^I click on Save changes$/, async function () {
        let saveChangesButton = await $('input[id="cnep_1D_submit_button"]');
        expect(saveChangesButton, 'Save changes button was not found');
        await saveChangesButton.click();
        await sleep(1000);
    });

    //Then I click Done button
    this.Then(/^I click Done button$/, async function () {
        let doneButton = await driver.findElement(By.partialLinkText('Done'));
        expect(doneButton, 'Done button was not found');
        await doneButton.click();
        await sleep(200);
        return true;
    });

    ///////////////////////////////////
    //Then I click on my username up in right corner
    ///////////////////////////////////

    //Then I click on Sign out
    this.Then(/^then I click on Sign out$/, async function () {
        await driver.wait(until.elementLocated(By.css('a[role="menuitem"]')));                 
        let signOutButton = await driver.findElement(By.partialLinkText('Sign out'));
        expect(signOutButton, '"Account settings" was not found');
        await signOutButton.click();
        await sleep(1000);
    });

    ///////////////////////////////////
    //When I click on Sign in with IMDb button
    ///////////////////////////////////
    //Then I should be taken to sign in page
    ///////////////////////////////////
    //Then I click on Email input window
    ///////////////////////////////////
    //And type in my email address
    ///////////////////////////////////
    //And I click on Password input window
    ///////////////////////////////////

    //When I type in my new password
    this.When(/^type in my new password$/, async function () {
        let inputWindowPassword = await $('input[name="password"]');
        expect(inputWindowPassword, 'Password input window was not found');
        await inputWindowPassword.sendKeys("SeleniumNewPW123");
        await sleep(5000);   
    });

    ///////////////////////////////////
    //And click on Sign-In
    ///////////////////////////////////
    //Then my username should appear up in right corner
    ///////////////////////////////////


    //================= SCENARIO: 'Change password and log in with new password' ENDS =================

    //================= SCENARIO: 'Change back to old password again' BEGINS =================


    ///////////////////////////////////
    //Given that I am on IMDbs website
    ///////////////////////////////////
    //When I click on Sign in button
    ///////////////////////////////////
    //Then I should be taken to page with sign in options
    ///////////////////////////////////
    //When I click on Sign in with IMDb button
    ///////////////////////////////////
    //Then I should be taken to sign in page
    ///////////////////////////////////
    //When I click on Email input window
    ///////////////////////////////////
    //And type in my email address
    ///////////////////////////////////
    //And then click on password input window
    ///////////////////////////////////
    

    //And type in the new password
    this.When(/^type in the new password$/, async function () {
        let inputWindowPassword = await $('input[name="password"]');
        expect(inputWindowPassword, 'Password input window was not found');
        await inputWindowPassword.sendKeys("SeleniumNewPW123");
        await sleep(5000); 
    });

    ///////////////////////////////////
    //And click on Sign-In
    ///////////////////////////////////
    //Then I click on my username up in right corner
    ///////////////////////////////////
    //And then I click on Account settings
    ///////////////////////////////////
    //And then I click on Login & security
    ///////////////////////////////////
    //And then I click on Current password input window
    ///////////////////////////////////

    //Then type in new current password
    this.Then(/^type in the new current password$/, async function () {
        let currentPwWindow = await $('input[id="ap_password"]');
        expect(currentPwWindow, 'Current password input window was not found');
        await currentPwWindow.sendKeys("SeleniumNewPW123");
        await sleep(sleepTime);
    });

    ///////////////////////////////////
    //And then I click on the new password input window
    ///////////////////////////////////

    //Then type in old password
    this.Then(/^type in old password$/, async function () {
        let newPwWindow = await $('input[id="ap_password_new"]');
        expect(newPwWindow, 'New password input window was not found');
        await newPwWindow.sendKeys(password);
        await sleep(sleepTime);
    });

    ///////////////////////////////////
    //Then I click on Reenter new password input window
    ///////////////////////////////////

    //Then type in old password again
    this.Then(/^type in old password again$/, async function () {
        let newPwWindowCheck = await $('input[id="ap_password_new_check"]');
        expect(newPwWindowCheck, 'Reenter new password input window was not found');
        await newPwWindowCheck.sendKeys(password);
        await sleep(sleepTime);
    });

    ///////////////////////////////////
    //And I click on Save changes
    ///////////////////////////////////
    //And I click on Done button
    ///////////////////////////////////
    //Then I click on my username up in right corner
    ///////////////////////////////////
    //And then I click on Sign out
    ///////////////////////////////////
    //When I click on Sign in with IMDb button
    ///////////////////////////////////
    //Then I should be taken to sign in page
    ///////////////////////////////////
    //When I click on Email input window
    ///////////////////////////////////
    //And type in my email address
    ///////////////////////////////////
    //And then click on Password input window
    ///////////////////////////////////
    //And type in my password
    ///////////////////////////////////
    //And click on Sign-In
    ///////////////////////////////////
    //Then my username should appear up in right corner
    ///////////////////////////////////

    //================= SCENARIO: 'Change back to old password again' ENDS =================

    //================= SCENARIO: 'Changing IMDb user ID' BEGINS =================

    ///////////////////////////////////
    //Given that I am on IMDbs website
    ///////////////////////////////////
    //When I click Sign in button
    ///////////////////////////////////
    //Then I should be taken to page with sign in options
    ///////////////////////////////////
    //When I click on Sign in with IMDb button
    ///////////////////////////////////
    //Then I should be taken to sign in page
    ///////////////////////////////////
    //When I click on Email input window
    ///////////////////////////////////
    //And type in my email address
    ///////////////////////////////////
    //And then click on Password input window
    ///////////////////////////////////
    //And type in my password
    ///////////////////////////////////
    //And click on Sign-In
    ///////////////////////////////////
    //Then I click on my usename up in right corner
    ///////////////////////////////////
    //And then I click on Your activity
    ///////////////////////////////////
    //And then I click on Edit profile
    ///////////////////////////////////

    //Then I click on Edit for User ID
    this.Then(/^then I click on Edit for User ID$/, async function () {
        await driver.wait(until.elementLocated(By.css('div[class="auth-input-container"]')));
        let editButton = await driver.findElement(By.partialLinkText('Edit'));
        expect(editButton, 'Edit button was not found');
        await editButton.click();
        await sleep(sleepTime);
    })

    //Then I click on User ID input window
    this.Then(/^then I click on User ID input window$/, async function () {
        await driver.wait(until.elementLocated(By.css('form[method="POST"]')));
        let userIdInputWindow = await $('input[class="auth-input--input"]');
        expect(userIdInputWindow, 'User ID input window was not found');
        await userIdInputWindow.click();
        await sleep(sleepTime);
    });

    //Then replace it with new User ID
    this.Then(/^replace it with new User ID$/, async function () {
        let userIdInputWindow = await $('input[class="auth-input--input"]');
        expect(userIdInputWindow, 'User ID input window was not found');
        userIdInputWindow.sendKeys(selenium.Key.CONTROL, 'a');
        await sleep(500);
        userIdInputWindow.sendKeys(selenium.Key.DELETE);
        await sleep(500);
        userIdInputWindow.sendKeys("newseleniumimdb");
    });

    //Then I click on Save changes
    this.Then(/^then I click on Save changes$/, async function () {
        let saveChangesButton = await $('input[class="pretty_btn"]');
        expect(saveChangesButton, 'Save Changes button was not found');
        await saveChangesButton.click();
    });

    ///////////////////////////////////
    //Then I click on my username up in right corner
    ///////////////////////////////////
    //And then I click on Your activity
    ///////////////////////////////////

    //Then my ID should be change on profile to new ID
    this.Then(/^my ID should be changed on profile to new ID$/, async function () {
        await driver.wait(until.elementLocated(By.css('.header')));
        let h1 = await $('h1');
        let h1GetText = await h1[0].getText();
        expect(h1GetText).to.include("newseleniumimdb", 'User ID was not changed or not found');
        await sleep(sleepTime);
    });

    //================= SCENARIO: 'Changing IMDb user ID' ENDS =================

    //================= SCENARIO: 'Changing IMDb user ID back to previous ID' BEGINS =================

    ///////////////////////////////////
    //Given that I am on IMDbs website
    ///////////////////////////////////
    //When I click Sign in button
    ///////////////////////////////////
    //Then I should be taken to page with sign in options
    ///////////////////////////////////
    //When I click on Sign in with IMDb button
    ///////////////////////////////////
    //Then I should be taken to sign in page
    ///////////////////////////////////
    //When I click on Email input window
    ///////////////////////////////////
    //And type in my email address
    ///////////////////////////////////
    //And then click on Password input window
    ///////////////////////////////////
    //And type in my password
    ///////////////////////////////////
    //And click on Sign-In
    ///////////////////////////////////
    //Then I click on my usename up in right corner
    ///////////////////////////////////
    //And then I click on Your activity
    ///////////////////////////////////
    //And then I click on Edit profile
    ///////////////////////////////////
    //And then I click on Edit for User ID
    ///////////////////////////////////
    //And then I click on User ID input window
    ///////////////////////////////////

    //And replace it with old User ID again
    this.Then(/^replace it with old User ID again$/, async function () {
        let userIdInputWindow = await $('input[class="auth-input--input"]');
        expect(userIdInputWindow, 'User ID input window was not found');
        userIdInputWindow.sendKeys(selenium.Key.CONTROL, 'a');
        await sleep(500);
        userIdInputWindow.sendKeys(selenium.Key.DELETE);
        await sleep(500);
        userIdInputWindow.sendKeys(username);
    });

    ///////////////////////////////////
    //And then I click on Save changes
    ///////////////////////////////////
    //Then I click on my username up in right corner
    ///////////////////////////////////
    //And then I click on Your activity
    ///////////////////////////////////

    //And my ID should be changed on profile back to old ID
    this.Then(/^my ID should be changed on profile back to old ID$/, async function () {
        await driver.wait(until.elementLocated(By.css('.header')));
        let h1 = await $('h1');
        let h1GetText = await h1[0].getText();
        expect(h1GetText).to.include(username, 'User ID was not changed or not found');
        await sleep(sleepTime);
    });

    //================= SCENARIO: 'Changing IMDb user ID back to previous ID' ENDS =================
}
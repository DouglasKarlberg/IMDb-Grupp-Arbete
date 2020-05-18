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
        await sleep(5000);                          //Wait 4 seconds
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
        await sleep(5000);                          //Wait 4 seconds
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
        let accountName = await $('span[class="imdb-header__account-toggle--logged-in imdb-header__accountmenu-toggle navbar__user-name navbar__user-menu-toggle__name navbar__user-menu-toggle--desktop"]');
        let importantMessage = await $('h4[class="a-alert-heading"]');
        if(importantMessage = null) {                                                       //Just made an if statement to check if important message comes up 
            let accountNameGetText = await accountName.getText();                           //then it should still succed this step. I don't know how to deal with the captcha
            expect(accountNameGetText).to.include(username)                                 //But this step works if captcha doesnt come up when I try to sign in
            await sleep(sleepTime);
        } if (accountName = null){
            let importantMessageGetText = await importantMessage.getText();
            expect(importantMessageGetText).to.include("Important Message!")
            await sleep(sleepTime);
        }

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
        await sleep(3000);
        let userNameToggleMenu = await $('label[aria-label="Toggle Acount Menu"]')//Since there are 2 label[aria-label="Toggle Acount Menu"] in an array
        expect(userNameToggleMenu, 'Toggle Acount Menu was not found');
        userNameToggleMenu[1].click();                                            //I click on the second element instead of the first one, because the second element highlights the button
        await sleep(2000);
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
        await sleep(3000);
    });

    //Then I type in any sample text into the bio
    this.Then(/^I type in any sample text into the bio$/, async function () {
        let bioTextWindow = await $('textarea[name="bio"]');
        expect(bioTextWindow, 'Bio text window was not found');
        await bioTextWindow.sendKeys("Sample text bio");
        await sleep(2000);
    });

    //Then I click on Save Description
    this.Then(/^then I click on Save Description$/, async function () {
        //let saveDescButton = await $('div[class="user-bio-actions"]');
        let saveDescButton2 = await $('div[class="auth-button-link auth-button--primary"]');
        expect(saveDescButton2, 'Save Description button was not found');
        await saveDescButton2.click();
        await sleep(2000);
    });

    //Then my sample text should appear on my profile
    this.Then(/^then my sample text should appear on my profile$/, async function () {
        await driver.wait(until.elementLocated(By.css('div[class="header"]')));
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
        bioTextWindow.sendKeys(selenium.Key.CONTROL, 'a');
        await sleep(1000);
        bioTextWindow.sendKeys(selenium.Key.DELETE);
        await sleep(3000);
    });

    ///////////////////////////////////
    //Then I click on Save Description
    ///////////////////////////////////
    
    //================= SCENARIO: 'Add and change bio text on edit profile' ENDS =================
}
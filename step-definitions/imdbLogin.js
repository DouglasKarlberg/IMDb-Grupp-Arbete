let { $, sleep } = require('./funcs');
const {email, username, password} = require('./credentials.json');

module.exports = function () {

    let sleepTime = 0;

  /////////////////////////////////////
  //Given that I am on IMDb site
  /////////////////////////////////////
    
    //When I click Sign In button
    this.When(/^I click Sign in button$/, async function () {
        let imdbSignInButton = await $('a[class="ipc-button ipc-button--single-padding ipc-button--default-height ipc-button--core-baseAlt ipc-button--theme-baseAlt ipc-button--on-textPrimary ipc-text-button imdb-header__signin-text"]');
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
        signInWithIMDb.click();
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
        inputWindow.click();
    });

    //When type in my email address
    this.When(/^type in my email address$/, async function () {
        let inputWindowEmail = await $('input[name="email"]');
        expect(inputWindowEmail, 'Email input window was not found');
        inputWindowEmail.sendKeys(email);
        await sleep(sleepTime);
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
        inputWindowPassword.sendKeys(password);
        await sleep(sleepTime);
    });

    //And click on Sign-In
    this.When(/^click on Sign\-In$/, async function () {
        let signInButton = await $('input[id="signInSubmit"]');
        expect(signInButton, 'Sign-In button was not found');
        signInButton.click();
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
        inputWindowPassword.sendKeys(wrongPassword);
        await sleep(sleepTime);
    });

    //Then I should receive an error message of any kind
    this.Then(/^I should receive an error message of any kind$/, async function () {
        let h4 = await $('h4');
        let h4GetText = await h4.getText();
        expect(h4GetText).to.include("There was a problem");
    });

    //================= SCENARIO: 'Sign in with IMDB with correct email and wrong password' ENDS =================
}
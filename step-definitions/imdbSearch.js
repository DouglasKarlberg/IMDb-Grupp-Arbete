let {
  $,
  sleep
} = require("./funcs");

module.exports = function () {
  let sleepTime = 0;

  //================= SCENARIO: 'Searching for something that doesn't exist using click' BEGINS =================
  //Given that I am on IMDb's website
  this.Given(/^that I am on IMDbs website$/, async function () {
    await helpers.loadPage("https://www.imdb.com"); //'Load a URL, returning only when the <body> tag is present' - npmjs.com
    await sleep(sleepTime); //sleep(SleepTime) delays this step for the given amount of time 'sleepTime' is set to
  });

  //When I type in search text "äpdqwjeha"
  this.When(/^I type in search text "([^"]*)"$/, async function (badInputText) {
    let imdbSearchField = await $('input[placeholder="Search IMDb"]'); //'imdbSearchField' receives document.queryslector('input[placeholder="Search IMDb"')
    //input[placeholder="Search IMDb"] is the placeholder text within the search window
    expect(imdbSearchField, "Search Field was not found"); //Expect imdbSearchField to exist/be true. If not; throw error 'Search Field was not found'
    imdbSearchField.sendKeys(badInputText); //SendKeys will type in the given letters from 'badInputText' into imdbSearchField
    //which is input[placeholder="Search IMDb"]
    await sleep(sleepTime); //sleep(sleepTime) delays this step from closing based on the time(value) 'sleepTime' has
  });

  //And I click the search button
  this.When(/^click the search button$/, async function () {
    let searchButton = await $("#suggestion-search-button"); //'searchButton' receives document.queryselector('#suggestions-search-button')
    expect(searchButton, "Search button was not found"); //Expect searchButton to exist/be true. If not; throw error 'Search button was not found
    await searchButton.click(); //click on searchButton meaning = click on '#suggestions-search-button'
  });

  //Then the search result should contain the text message "No results found for "
  this.Then(
    /^the search result should contain the text message "([^"]*)"$/,
    async function (noResult) {
      await driver.wait(
        until.elementLocated(By.css(".findResult, .findNoResults"))
      ); //Wait until element .findResult or .findNoResults has been located
      let findNoResults = await $(".findNoResults"); //'findNoResults' receives div.findNoResults
      let h1 = await $("h1.findHeader"); //'h1' receives document.queryselector('h1.findHeader')
      let noResultsFound = await h1.getText(); //'noResultsFound' receives the text content within h1 with help of 'getText()' method
      let noResultsFoundSliced = noResultsFound.slice(0, 21); //noResultFoundSliced receives the cut off text from noResultsFound which is 'No results found for '
      expect(findNoResults, "findNoResults was not found"); //Expect findNoResults to be exist/true
      expect(noResultsFoundSliced).to.include(noResult); //Expect noResultFoundSliced to include noReult which is "No results found for "
      await sleep(sleepTime); //sleep(sleepTime) delays this step from closing based on the time(value) 'sleepTime' has
    }
  );

  //================= SCENARIO: 'Searching for something that doesn't exist using click' ENDS =================

  //================= SCENARIO: 'Searching for something that doesn't exist using ENTER' BEGINS =================

  /////////////////////////////////////
  //Given that I am on IMDb site
  /////////////////////////////////////

  //When I type search text "löäkpälkadawjd" and presses ENTER
  this.When(/^I type search text "([^"]*)" \+ ENTER$/, async function (
    badInputText2
  ) {
    let imdbSearchField = await $('input[placeholder="Search IMDb"]'); //'imdbSearchField' receives document.queryselector('input[placeholder="Search IMDb"]')
    expect(imdbSearchField, "Search Field was not found"); //Expect imdbSearchField to exist/be true
    imdbSearchField.sendKeys(badInputText2); //SendKeys will type in the given letters from 'badInputText2' into imdbSearchField
    await imdbSearchField.sendKeys(selenium.Key.ENTER); //Send key ENTER to imdbSearchField
  });

  //Then the search result should contain the message "No results found for "
  this.Then(
    /^the search result should contain the message "([^"]*)"$/,
    async function (noResult) {
      await driver.wait(
        until.elementLocated(By.css(".findResult, .findNoResults"))
      ); //Wait until element .findResult or .findNoResults has been located
      let findNoResults = await $(".findNoResults"); //'findNoResults' receives div.findNoResults
      let h1 = await $("h1.findHeader"); //'h1' receives document.queryselector('h1.findHeader')
      let noResultsFound = await h1.getText(); //'noResultsFound' receives the text content within h1 with help of 'getText()' method
      let noResultsFoundSliced = noResultsFound.slice(0, 21); //noResultFoundSliced receives the cut off text from noResultsFound which is 'No results found for '
      expect(findNoResults, "findNoResults was not found"); //Expect findNoResults to be exist/true
      expect(noResultsFoundSliced).to.include(noResult); //Expect noResultFoundSliced to include noReult which is "No results found for "
      await sleep(sleepTime); //sleep(sleepTime) delays this step from closing based on the time(value) 'sleepTime' has
    }
  );

  //================= SCENARIO: 'Searching for something that doesn't exist using ENTER' ENDS =================

  //================= SCENARIO: 'Navigate search suggestions and then press ENTER to load given suggestion' BEGINS =================

  //When I type search text "The Shining"
  this.When(/^I type search text "([^"]*)"$/, async function (inputText) {
    let imdbSearchField = await $('input[placeholder="Search IMDb"]'); //imdbSearchField receives document.querySelector('input[placeholder="Search IMDb"]')
    expect(imdbSearchField, "Search Field was not found"); //Expect imdbSearchField to exist/be true or basically not false or null
    await imdbSearchField.sendKeys(inputText); //Send keys "The Shining" to imdbSearchField
    await sleep(500); //Delay 0.5 seconds (Probably not necessary)
  });

  //And then press down arrow + ENTER
  this.When(/^then press down arrow \+ ENTER$/, async function () {
    let imdbSearchField = await $('input[placeholder="Search IMDb"'); //imdbSearchField receives document.querySelector('input[placeholder="Search IMDb"]')
    await sleep(1000); //Delay 1 Seond OBSERVE! This is necessary for it takes around <1 second for suggestions to load
    await imdbSearchField.sendKeys(selenium.Key.ARROW_DOWN); //Send key ARROW_DOWN to imdbSearchField
    await sleep(sleepTime); //Delay
    await imdbSearchField.sendKeys(selenium.Key.ENTER); //Send key ENTER to imdbSearchField
    await sleep(sleepTime); //Delay
  });

  //Then I should be taken to the detail page of "The Shining"
  this.Then(
    /^I should be taken to the detail page of "([^"]*)"$/,
    async function (inputText) {
      await driver.wait(until.elementLocated(By.css(".title_wrapper"))); //Wait for element css '.title_wrapper' to be located (basically just wait for it to load)
      //This wait method is used because it's not a garantee that the detail page will load at
      //the same speed on different computers, so use this is a better alternative to sleep mehtod
      let titleWrapper = await $('div[class="title_wrapper"]'); //'titleWrapper' receives document.querySelector('div[class="title_wrapper"]')
      let titleWrapperGetText = await titleWrapper.getText(); //titleWrapperGetText receives text content from within titleWrapper
      titleWrapperSliced = titleWrapperGetText.slice(0, 11); //titleWrapperSliced receives titleWrapperGetText's string but sliced to "The Shining"
      expect(titleWrapperSliced).to.include(inputText); //Expect titleWrapperSliced to include inputText which is "The Shining"
    }
  );

  // That I am on IMDB and search for John Wick

  //I search for existing movie Johan Wick
  this.When(/^I search for an existing movie "([^"]*)"$/, async function (
    inputText2
  ) {
    let imdbSearch2 = await $('input[placeholder="Search IMDb"]');
    expect(imdbSearch2, "Didn´t find search field").to.exist;
    await imdbSearch2.sendKeys(inputText2);
    await sleep(5000);
  });

  //Then search result should show detail page of John Wick
  this.Then(
    /^the search result should show result of "([^"]*)"$/,
    async function (inputText) {
      await driver.wait(until.elementLocated(By.css('.findResult, .findNoResults')));
      // now the search has finisehd
      let results = await $('.findResult');
      assert(results, 'Could not find any results');
      let firstResult = results[0];
      let resultText = await firstResult.getText();
      assert.include(resultText, inputText, 'Could not find the phrase ' + inputText + ' in the first search result.');
      await sleep(sleepTime);
    }
  );

  //================= SCENARIO: 'Navigate search suggestions and then press ENTER to load given suggestion' ENDS =================
};
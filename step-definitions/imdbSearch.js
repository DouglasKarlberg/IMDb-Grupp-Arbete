let { $, sleep } = require('./funcs');

module.exports = function () {

  let sleepTime = 1000;

  //================= SCENARIO: 'Searching for something that doesn't exist using click' BEGINS =================
  //Given that I am on IMDb's website
  this.Given(/^that I am on IMDbs website$/, async function () {
    await helpers.loadPage('https://www.imdb.com');
    await sleep(sleepTime);
  });

  //When I type in search text "äpdqwjeha"
  this.When(/^I type in search text "([^"]*)"$/, async function (badInputText) {
    let imdbSearchField = await $('input[placeholder="Search IMDb"]');
    expect(imdbSearchField, 'Search Field was not found');
    imdbSearchField.sendKeys(badInputText);
    await sleep(sleepTime);
  });

  //And I click the search button
  this.When(/^click the search button$/, async function () {
    let searchButton = await $('#suggestion-search-button');
    expect(searchButton, 'Search button was not found');
    await searchButton.click();

  });

  //Then the search result should contain the text message "No results found for "
  this.Then(/^the search result should contain the text message "([^"]*)"$/, async function (noResult) {
    await driver.wait(until.elementLocated(By.css('.findResult, .findNoResults')));   //Wait until element .findResult or .findNoResults has been located
    let findNoResults = await $('.findNoResults');                                    //'findNoResults' receives div.findNoResults
    let h1 = await $('h1.findHeader');                                                //'h1' receives document.queryselector('h1.findHeader')
    let noResultsFound = await h1.getText();                                          //'noResultsFound' receives the text content within h1 with help of 'getText()' method
    let noResultsFoundSliced = noResultsFound.slice(0, 21);                           //noResultFoundSliced receives the cut off text from noResultsFound which is 'No results found for '     
    expect(findNoResults, 'findNoResults was not found');            //Expect findNoResults to be exist/true
    expect(noResultsFoundSliced).to.include(noResult);               //Expect noResultFoundSliced to include noReult which is "No results found for "
    await sleep(sleepTime);
  });

  //================= SCENARIO: 'Searching for something that doesn't exist using click' ENDS =================

  //================= SCENARIO: 'Searching for something that doesn't exist using ENTER' BEGINS =================
  //Given that I am on IMDb site
  this.Given(/^that I am on IMDb site$/,  function () {

  });

  //When I type search text "löäkpälkadawjd" and presses ENTER
  this.When(/^I type search text "([^"]*)" \+ ENTER$/, async function (badInputText2) {
    let imdbSearchField = await $('input[placeholder="Search IMDb"]');
    expect(imdbSearchField, 'Search Field was not found');
    imdbSearchField.sendKeys(badInputText2);
    await imdbSearchField.sendKeys(selenium.Key.ENTER);
  });

  //Then the search result should contain the message "No results found for "
  this.Then(/^the search result should contain the message "([^"]*)"$/, async function (noResult) {
    await driver.wait(until.elementLocated(By.css('.findResult, .findNoResults')));   //Wait until element .findResult or .findNoResults has been located
    let findNoResults = await $('.findNoResults');                                    //'findNoResults' receives div.findNoResults
    let h1 = await $('h1.findHeader');                                                //'h1' receives document.queryselector('h1.findHeader')
    let noResultsFound = await h1.getText();                                          //'noResultsFound' receives the text content within h1 with help of 'getText()' method
    let noResultsFoundSliced = noResultsFound.slice(0, 21);                           //noResultFoundSliced receives the cut off text from noResultsFound which is 'No results found for '     
    expect(findNoResults, 'findNoResults was not found');                             //Expect findNoResults to be exist/true
    expect(noResultsFoundSliced).to.include(noResult);                                //Expect noResultFoundSliced to include noReult which is "No results found for "
    await sleep(sleepTime);
  });

  //================= SCENARIO: 'Searching for something that doesn't exist using ENTER' ENDS =================
}
let { $, sleep } = require('./funcs');

module.exports = function () {

  let sleepTime = 1000;

  this.Given(/^that I am on the IMDB site$/, async function () {
    await helpers.loadPage('https://www.imdb.com');
    await sleep(sleepTime);
  });

  this.When(/^I enter the search text "([^"]*)"$/, async function (searchText) {
    let searchField = await $('input[placeholder="Search IMDb"]');
    assert(searchField, 'Can not find the search field on the page');
    searchField.sendKeys(searchText);
    await sleep(sleepTime);
  });

  this.When(/^I enter the search text "([^"]*)" \+ ENTER$/, async function (searchText) {
    let searchField = await $('input[placeholder= "Search IMDb"]');
    assert(searchField, 'Can not find the search field on the page');
    searchField.sendKeys(searchText);
    // You can find a complete list of special keys here:
    // https://selenium.dev/selenium/docs/api/javascript/module/selenium-webdriver/lib/input_exports_Key.html
    await searchField.sendKeys(selenium.Key.ENTER);
  });

  this.When(/^I click search button$/, async function () {
    let searchButton = await $('#suggestion-search-button');
    assert(searchButton, 'Could not find the search button');
    await searchButton.click();
  });

  this.Then(/^the first search result should contain the word "([^"]*)"$/, async function (phrase) {
    // when the search has finished on IMDB
    // we either get one or more results
    // in elements with the class findResult
    // or (if no results) we get an element
    // with the class findNoResults...
    // so wait for this to happen
    await driver.wait(until.elementLocated(By.css('.findResult, .findNoResults')));
    // now the search has finisehd
    let results = await $('.findResult');
    assert(results, 'Could not find any results');
    let firstResult = results[0];
    let resultText = await firstResult.getText();
    assert.include(resultText, phrase, 'Could not find the phrase ' + phrase + ' in the first search result.');
    await sleep(sleepTime);
  });

}


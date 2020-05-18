let {$, sleep} = require('./funcs');

module.exports = function() {

  let searchField

  this.Given(/^that I'm at the search page$/, async function () {
    await helpers.loadPage('https://google.com');
    await sleep(1000)
    searchField = await $('input.gLFyf')
    assert.instanceOf(searchField, searchField.constructor, "Expected a web element")
  });

  this.When(/^I enter search text "([^"]*)"$/, async function (searchString) {
    await searchField.sendKeys(searchString)
    await sleep(3000)
  });

  this.When(/^I click the search button$/, async function () {
    let button = await $('div.tfB0Bf:nth-child(7) > center:nth-child(2) > input:nth-child(1)')
    button.click()
    await sleep(4000)
  });

  this.Then(/^the first test result should contain the word "([^"]*)"$/, async function (searchString) {
    let results = await $('h3')
    let found = false
    for(let result of results){
      console.log('text', await result.getText())
      let text = await result.getText()
      if( text.toLowerCase().includes( searchString.toLowerCase() ) ){
        found = true
        break
      }
    }

    assert(found, 'expected to find ' + searchString)

  });


}


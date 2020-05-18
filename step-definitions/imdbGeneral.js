let {
  $,
  sleep
} = require("./funcs");

module.exports = function () {
  let sleepTime = 0;



  // click on any card what to watch today

  this.When(/^I click on any card what to watch today$/, async function () {
    let whatTowatch = await driver.findElement(by.linkText('Joker'));
    expect(whatTowatch, 'couldn´t find  left arrow button'); //check if arrow exist true
    await sleep(3000)
    await whatTowatch.click();
    await sleep(5000);
  });
  // should come to detail page
  this.Then(/^I should see detail page$/, async function () {
    await driver.wait(until.elementLocated(By.css(".title_wrapper"))); //Wait for element css '.title_wrapper' to be located (basically just wait for it to load)
    //This wait method is used because it's not a garantee that the detail page will load at
    //the same speed on different computers, so use this is a better alternative to sleep mehtod
    let titleWrapper = await $('div[class="title_wrapper"]'); //'titleWrapper' receives document.querySelector('div[class="title_wrapper"]')
    let titleWrapperGetText = await titleWrapper.getText(); //titleWrapperGetText receives text content from within titleWrapper
    titleWrapperSliced = titleWrapperGetText.slice(0, 5); //titleWrapperSliced receives titleWrapperGetText's string but sliced to "Joker"
    expect(titleWrapperSliced).to.include('Joker'); //Expect titleWrapperSliced to include inputText which is "Joker"
  });


  // click on born today card
  this.When(/^I click on born today card$/, async function () {
    let pagebody = await $('body');
    await sleep(1000);
    pagebody.sendKeys(selenium.Key.PAGE_DOWN);
    await sleep(1000);
    pagebody.sendKeys(selenium.Key.PAGE_DOWN);
    await sleep(1000);
    pagebody.sendKeys(selenium.Key.PAGE_DOWN);
    await sleep(1000);
    let bornTodayPerson = await $('div[class="ipc-avatar ipc-avatar--baseAlt ipc-avatar--dynamic-width"]')
    expect(bornTodayPerson, 'couldn´t find born today');
    await bornTodayPerson[0].click();
    await sleep(3000);

  });
  // check that i am on born today detail page
  this.Then(/^it should take me to detail page$/, async function () {
    await sleep(1000);
    let personDetail = await $('td[class="name-overview-widget"]');
    expect(personDetail, 'Doesn´t exist');
    await sleep(2000);
  });
  //Click on top news
  this.When(/^I click on on top news$/, async function () {
    let pagebody = await $('body');
    await sleep(1000);
    pagebody.sendKeys(selenium.Key.PAGE_DOWN);
    await sleep(1000);
    pagebody.sendKeys(selenium.Key.PAGE_DOWN);
    await sleep(1000);
    pagebody.sendKeys(selenium.Key.PAGE_DOWN);
    await sleep(1000);
    pagebody.sendKeys(selenium.Key.PAGE_DOWN);
    await sleep(1000);
    let clickTopNews = await driver.findElement(By.linkText('Top news'));
    expect(clickTopNews, 'couldn´t find top news');
    await clickTopNews.click();
    await sleep(3000);
  });

  // come to top news page
  this.Then(/^It should take me to detail page$/, async function () {

    let personDetail = await $('h1[class="news-page__title"]');
    expect(personDetail, 'Doesn´t exist');
    await sleep(1000);

  });
  // movie hoe alone
  this.When(/^I type movie name "([^"]*)"$/, async function (inputText) {
    let imdbSearchField = await $('input[placeholder="Search IMDb"]'); //imdbSearchField receives document.querySelector('input[placeholder="Search IMDb"]')
    expect(imdbSearchField, "Search Field was not found"); //Expect imdbSearchField to exist/be true or basically not false or null
    await imdbSearchField.sendKeys(inputText); //Send keys "The Shining" to imdbSearchField
    await sleep(500); //Delay 0.5 seconds (Probably not necessary)
  });

  this.When(/^then press \+ ENTER$/, async function () {
    let imdbSearchField = await $('input[placeholder="Search IMDb"'); //imdbSearchField receives document.querySelector('input[placeholder="Search IMDb"]')
    await sleep(1000); //Delay 1 Seond OBSERVE! This is necessary for it takes around <1 second for suggestions to load
    await imdbSearchField.sendKeys(selenium.Key.ARROW_DOWN); //Send key ARROW_DOWN to imdbSearchField
    await sleep(sleepTime); //Delay
    await imdbSearchField.sendKeys(selenium.Key.ENTER); //Send key ENTER to imdbSearchField
    await sleep(sleepTime); //Delay
  });
  // detail page of movie Home Alone
  this.Then(/^It should taken me to detail page of "([^"]*)"$/, async function (inputText) {
    await driver.wait(until.elementLocated(By.css(".title_wrapper"))); //Wait for element css '.title_wrapper' to be located (basically just wait for it to load)
    //This wait method is used because it's not a garantee that the detail page will load at
    //the same speed on different computers, so use this is a better alternative to sleep mehtod
    let titleWrapper = await $('div[class="title_wrapper"]'); //'titleWrapper' receives document.querySelector('div[class="title_wrapper"]')
    let titleWrapperGetText = await titleWrapper.getText(); //titleWrapperGetText receives text content from within titleWrapper
    titleWrapperSliced = titleWrapperGetText.slice(0, 10); //titleWrapperSliced receives titleWrapperGetText's string but sliced to "Home Alone"
    expect(titleWrapperSliced).to.include(inputText); //Expect titleWrapperSliced to include inputText which is "Home Alone"
    await sleep(3000); //Delay
  });
  //click on the movie writer
  this.Then(/^click on writer name$/, async function () {
    let clickWriterName = await driver.findElement(By.linkText('John Hughes'));
    expect(clickWriterName, 'couldn´t find top news');
    await clickWriterName.click();
    await sleep(3000);
  });

  this.Then(/^It should take me to writers detail page$/, async function () {
    let writerDetail = await $('h1[class="news-page__title"]');
    expect(writerDetail, 'Doesn´t exist');
    await sleep(1000);
  });

};
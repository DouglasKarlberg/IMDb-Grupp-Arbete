let { $, sleep } = require('./funcs');

module.exports = function () {

  let sleepTime = 0;

  //================= SCENARIO: 'Remove a recently viewed movie' BEGINS =================

  /////////////////////////////////////
  //Given that I am on IMDbs website
  /////////////////////////////////////
  //When I type search text "Parasite"
  /////////////////////////////////////
  //And then press down arrow + ENTER
  /////////////////////////////////////
  //Then I should be taken to the detail page of "Parasite"
  /////////////////////////////////////

  //When I browse the detail page a little
  this.When(/^I browse the detail page a little$/, async function () {
    await driver.wait(until.elementLocated(By.css('div[class="title_block"]')));
    let pagebody = await $('body');
    await sleep(1000);
    pagebody.sendKeys(selenium.Key.PAGE_DOWN);
    await sleep(600);
    pagebody.sendKeys(selenium.Key.PAGE_DOWN);
    await sleep(600);
    pagebody.sendKeys(selenium.Key.PAGE_DOWN);
    await sleep(600);
    pagebody.sendKeys(selenium.Key.PAGE_DOWN);
    await sleep(600);
    pagebody.sendKeys(selenium.Key.PAGE_UP);
    await sleep(600);
    pagebody.sendKeys(selenium.Key.PAGE_UP);
    await sleep(600);
    pagebody.sendKeys(selenium.Key.PAGE_UP);
    await sleep(600);
  });

  //And then click home button
  this.When(/^then click home button$/, async function () {
    let homeButton = await $('a[id="home_img_holder"]');
    await homeButton.click();
    await sleep(3000);
  });

  //Then Startpage should load
  this.Then(/^startpage should load$/, async function () {
    await driver.wait(until.elementLocated(By.css('div[id="ipc-wrap-background-id"]')));
    await sleep(1000);
  });

  //When I scroll down to recently viewed
  this.When(/^I scroll down to recently viewed$/, async function () {
    let pagebody = await $('body');
    await sleep(1000);
    pagebody.sendKeys(selenium.Key.PAGE_DOWN);
    await sleep(600);
    pagebody.sendKeys(selenium.Key.PAGE_DOWN);
    await sleep(800);
    pagebody.sendKeys(selenium.Key.PAGE_DOWN);
    await sleep(800);
    pagebody.sendKeys(selenium.Key.PAGE_DOWN);
  });

  //And then click on clear all button
  this.When(/^then click on clear all button$/, async function () {
    let clearAll = await driver.findElement(by.linkText('Clear all'));
    expect(clearAll, 'Clear all button was not found');
    await clearAll.click();
    await sleep(3000);
  });

  //Then message "You have no recently viewed pages"
  this.Then(/^message "([^"]*)" should appear$/, async function (noRecentlyViewed) {
    let recentlyViewedContent = await $('div[class="recently-viewed"]');
    let recentlyViewedGetText = await recentlyViewedContent.getText();
    let recentlyViewedSliced = await recentlyViewedGetText.slice(16, 49);
    expect(recentlyViewedSliced).to.include(noRecentlyViewed, 'Recently viewed was not cleared or found');
    await sleep(sleepTime);
  });

  //================= SCENARIO: 'Remove a recently viewed movie' ENDS =================

  //================= SCENARIO: 'Visit a recently viewed movie and the remove it' BEGINS =================

  /////////////////////////////////////
  //Given that I am on IMDbs website
  /////////////////////////////////////
  //When I type search text "Parasite"
  /////////////////////////////////////
  //And then press down arrow + ENTER
  /////////////////////////////////////
  //Then I should be taken to the detail page of "Parasite"
  /////////////////////////////////////
  //When i browse detail page a little
  /////////////////////////////////////
  //And then click on home button
  /////////////////////////////////////
  //When I scroll down to recently viewed
  /////////////////////////////////////

  //And then click on recently viewed movies
  this.When(/^then click on the recently viewed movie$/, async function () {
    let parasiteCard = await driver.findElement(by.linkText('Gisaengchung'));
    expect(parasiteCard, 'The recently viewed movie was not found');
    await parasiteCard.click();
    await sleep(3000);
  });

  /////////////////////////////////////
  //Then I hsould be taken to the detail page of Parasite
  /////////////////////////////////////
  
  //When I scroll down to recently viewed on detail page
  this.When(/^I scroll down to recently viewed on detail page$/, async function () {
    let pagebody = await $('body');
    await sleep(1000);
    pagebody.sendKeys(selenium.Key.PAGE_DOWN);
    await sleep(600);
    pagebody.sendKeys(selenium.Key.PAGE_DOWN);
    await sleep(800);
    pagebody.sendKeys(selenium.Key.PAGE_DOWN);
    await sleep(800);
    pagebody.sendKeys(selenium.Key.PAGE_DOWN);
    await sleep(800);
    pagebody.sendKeys(selenium.Key.PAGE_DOWN);
    await sleep(800);
    pagebody.sendKeys(selenium.Key.PAGE_DOWN);
  });

  //And click on clear all
  this.When(/^click on clear all$/, async function () {
    let clearHistory = await driver.findElement(by.linkText('Clear your history'));
    expect(clearHistory, 'Clear your history button was not found');
    await clearHistory.click();
    await sleep(3000);
  });

  /////////////////////////////////////
  //And then click on home button
  /////////////////////////////////////
  //Then startpage should load
  /////////////////////////////////////
  //When I scroll down to recently viewed
  /////////////////////////////////////
  //Then message "You have no recently viewed pages" should appear

  //================= SCENARIO: 'Visit a recently viewed movie and the remove it' ENDS =================
}
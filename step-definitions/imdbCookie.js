let { $, sleep } = require('./funcs');

module.exports = function () {

  let sleepTime = 0;

  //================= SCENARIO: 'Clear my history from recently viewed movie's page' =================

  this.Given(/^that I load detail's page for a film$/, async function () {
    await helpers.loadPage('https://www.imdb.com/title/tt6751668/?ref_=hm_rvi_tt');       //Load a chosen movie detail's page
    await sleep(2000);                                                                    //delays here is set to 2 seconds

  });

  this.When(/^clicking on 'IMDb' brand logo to load startpage$/, async function () {
    let logoButton = await driver.findElement(By.css('#home_img_holder'));    //assigns css element by using findElement to variable logoButton
    expect(logoButton, 'Logo button was not found');                          //throws an error if css element was not found by using expect
    await logoButton.click();                                                 //click method, when click, redirects page to the start page
    await sleep(5000);                                                        //delays here is set to 5 seconds
  });

  this.Then(/^by clicking 'Clear all', all recently viewed will be cleared$/, async function () {
    let clearTextButton = await driver.wait(until.elementLocated(By.linkText('Clear all')));  //assign the link text by using elemntLocated to variable clearTextButton
    expect(clearTextButton, 'clear all button was not found');                                //throws an error if element was not found by using expect
    await clearTextButton.click();                                                            //click method, when click, clear what has been viewed recently from the list of 'Recently viewed'
    await sleep(3000);                                                                        //delays here is set to 3 seconds
  });

  this.Then(/^click on the card under 'Recently viewed' for the movie's page you just left$/, async function () {
    let recentViewdButton = await driver.wait(until.elementLocated(By.linkText('Gisaengchung')));   //assign the link text by using elemntLocated to variable recentViewdButton
    expect(recentViewdButton, 'Recent Viewed button was not found');                                //throws an error if css element was not found by using expect
    await recentViewdButton.click();                                                                //click method, when click, redirects to the viewed recently for movie detail's page I just visited
    await sleep(5000);                                                                              //delays here is set to 5 seconds

  });

}
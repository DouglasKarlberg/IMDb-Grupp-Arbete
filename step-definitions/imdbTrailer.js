let { $, sleep } = require('./funcs');

let timeLimit = 5000;
const waitForEl = async css =>
  driver.wait(until.elementLocated(By.css(css)), timeLimit);  // Time limit whe waiting for elements to be located, fick från Tomas

module.exports = function () {

  let sleepTime = 0;

  //================= SCENARIO: 'When I visit a trailer to watch' =================

  /////////////////////////////////////
  //Given that I am on IMDbs website
  /////////////////////////////////////

  this.When(/^I want to visit trailers' page$/, async function () {
    await helpers.loadPage('https://www.imdb.com/trailers/?ref_=hm_hp_sm');    //Load trailers' page
  });


  this.When(/^click on any trailer and check if it plays$/, async function () {
    await helpers.loadPage('https://www.imdb.com/video/vi686013977?ref_=vi_tr_tr_vp_0');    //'Load an IMDB URL for the given trailer's page
    await sleep(2000);                                                                      //delays here is set to 2 seconds
    let clickedTrailer = await $('#imdb-jw-video-1');                                       //assign 'clickedTrailer' to the query selector ('#imdb-jw-video-1')
    expect(clickedTrailer, 'Play button was not found');                                    //throws an error if the query selector ('#imdb-jw-video-1') was not found by using expect
    await clickedTrailer.click();                                                           //click method, when the video trailer has been clicked to play
    await sleep(5000);                                                                     //delays here is set to 10 seconds until the video has started to play
  });

  //================= SCENARIO: 'When I visit a trailer and pause it once it plays' =================

  this.Given(/^that I am on IMDB site trailers page$/, async function () {
    await helpers.loadPage('https://www.imdb.com/trailers/?ref_=hm_hp_sm');       //Load an IMDB URL browse trailers' page
    await sleep(3000);                                                            //delays here is set to 3 seconds
  });

  this.When(/^click on any trailer and pause it when it plays$/, async function () {
    await helpers.loadPage('https://www.imdb.com/video/vi686013977?ref_=vi_tr_tr_vp_0');    //'Load an IMDB URL for the given trailer's page
    await sleep(2000);                                                                      //delays here is set to 2 seconds
    let clickedTrailer = await $('#imdb-jw-video-1');                                       //assign 'clickedTrailer' to the query selector ('#imdb-jw-video-1')
    expect(clickedTrailer, 'Play button was not found');                                    //throws an error if the query selector ('#imdb-jw-video-1') was not found by using expect
    await clickedTrailer.click();                                                           //click method, when the video trailer has been clicked to play it
    await sleep(5000);                                                                      //delays here is set to 5 seconds until the video has started to play
    await clickedTrailer.click();                                                           //click method again, and click on the video trailer to pause it
    await sleep(3000);                                                                      //delays here is set to 3 seconds to check the video trailer has been paused before the browse closes
  });

  //================= 'SCENARIO: Visit a trailer and mute it' ================= 

  this.Given(/^that I am on a trailers video page$/, async function () {
    await helpers.loadPage('https://www.imdb.com/video/vi686013977?ref_=vi_tr_tr_vp_0');  //Load a trailer's video page
  });

  this.Given(/^the jwplayer has loaded$/, async function () {
    await waitForEl('.jw-controls');  //Wait for this element to be loaded, fick från Tomas
  });

  this.Given(/^the user has 'activated' the page by clicking somewhere on it$/, async function () {
    let bodyEl = await $('body');   //Assigns the elemnt to bodyEl variable
    await bodyEl.click();           //Clicking somewhere on the page
    await sleep(5000);
  });

  this.Given(/^the user has clicked to mute the sound$/, async function () {
    driver.executeScript('jwplayer().pause()');         // pause just so that we can see the controls, fick från Tomas
    driver.executeScript('jwplayer().setMute(true)');   // now mute, fick från Tomas
  });

  this.Then(/^the 'is muted button' should be shown$/, async function () {
    await waitForEl('.jw-button-container [aria-label="Volume"].jw-off'); //show the mute button when it is off, fick från Tomas
  });


  //================= 'SCENARIO: I wanted to find out more about the trailer's movie' =================

  this.When(/^visit any trailer$/, async function () {
    await helpers.loadPage('https://www.imdb.com/video/vi686013977?ref_=vi_tr_tr_vp_2');       //Load trailer's page
    await sleep(3000);                                                                         //delays here is set to 3 seconds
  });

  this.When(/^visit the trailer's movie detail page$/, async function () {
    let clickedPage = await await driver.findElement(By.css('h5.RelationInfostyles__RelationTitle-sc-1a6joiq-1.iMMyKJ'));   //assigns css element by using findElement to the variable clickedPage
    expect(clickedPage, 'Details page was not found');                                                                      //throws an error if css element was not found by using expect
    await clickedPage.click();                                                                                              //click method, when click, redirects page to the details page
    await sleep(2000);                                                                                                      //delays here is set to 2 seconds

  });

  //================= 'SCENARIO: When visitng a trailer's page, I will be able to add to my 'Watchlist' and view it.' =================

  this.Given(/^that I am on a trailers page$/, async function () {
    await helpers.loadPage('https://www.imdb.com/title/tt6156584/?ref_=vp_vi_tt');      //Load a movie trailer's page
    await sleep(3000);                                                                  //delays here is set to 3 seconds
  });

  this.When(/^I click on the add icon left to the movie list, it would ask to sign in first$/, async function () {
    let clickToAddButton = await $('div[class="primary_ribbon"]');  //assign 'clickToAddButton' to the query selector
    expect(clickToAddButton, 'add button was not found');           //throws an error if query selector was not found by using expect
    await clickToAddButton.click();                                 //click method, when click, it should take me to sign in page
    await sleep(5000);                                              //delays here is set to 5 seconds
  });

  this.When(/^I will be able to see my recent viewed list by visiting 'Watchlist'$/, async function () {
    let clickToseeButton = await $('a[class="ipc-button ipc-button--single-padding ipc-button--default-height ipc-button--core-baseAlt ipc-button--theme-baseAlt ipc-button--on-textPrimary ipc-text-button"]');   //assign 'clickToseeButton' to the query selector
    expect(clickToseeButton, 'add button was not found');                                                                                                                                                          //throws an error if query selector was not found by using expect
    await clickToseeButton.click();                                                                                                                                                                                //click method, when click, it should take me to 'Watchlist' page
    await sleep(2000);                                                                                                                                                                                             //delays here is set to 2 seconds
  });

}
let { $, sleep } = require('./funcs');

module.exports = function () {

  let sleepTime = 0;

  //================= SCENARIO: 'When I visit a trailer to watch' =================

  /////////////////////////////////////
  //Given that I am on IMDbs website
  /////////////////////////////////////

  this.When(/^I click to browse trailers$/, async function () {
    await helpers.loadPage('https://www.imdb.com/trailers/?ref_=hm_hp_sm');       //Load an IMDB URL browse trailers' page
    await sleep(3000);                                                            //delays here is set to 3 seconds
  });


  this.When(/^click on any trailer and watch if it plays$/, async function () {
    await helpers.loadPage('https://www.imdb.com/video/vi686013977?ref_=vi_tr_tr_vp_0');    //'Load an IMDB URL for the given trailer's page
    await sleep(2000);                                                                      //delays here is set to 2 seconds
    let clickedTrailer = await $('#imdb-jw-video-1');                                       //assign 'clickedTrailer' to the query selector ('#imdb-jw-video-1')
    expect(clickedTrailer, 'Play button was not found');                                    //throws an error if the query selector ('#imdb-jw-video-1') was not found by using expect
    await clickedTrailer.click();                                                           //click method, when the video trailer has been clicked to play
    await sleep(10000);                                                                     //delays here is set to 10 seconds until the video has started to play
  });

  //================= SCENARIO: 'When I visit a trailer and pause it once it plays' =================
  this.Given(/^that I am on the IMDB site trailers page$/, async function () {
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

}




let { $, sleep } = require('./funcs');

module.exports = function () {

  let sleepTime = 0;

  //================= SCENARIO: 'Clear my history from recently viewed movie's page' =================

  this.Given(/^that I load detail's page for a film$/, async function () {
    await helpers.loadPage('https://www.imdb.com/title/tt6751668/?ref_=hm_rvi_tt');       //Load a chosen movie detail's page
    await sleep(2000);
  });

  this.When(/^clicking on 'IMDb' brand logo to load startpage$/, async function () {
    let logoButton = await driver.findElement(By.css('#home_img_holder'));
    expect(logoButton, 'Logo button was not found');
    await logoButton.click();
    await sleep(5000);
  });

  this.Then(/^by clicking 'Clear all', all recently viewed will be cleared$/, async function () {
    let clearTextButton = await driver.wait(until.elementLocated(By.linkText('Clear all')));
    expect(clearTextButton, 'clear all button was not found');
    await clearTextButton.click();
    await sleep(3000);
  });

}
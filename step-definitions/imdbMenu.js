let { $, sleep } = require('./funcs');

module.exports = function () {

  let sleepTime = 0;

  //================= SCENARIO: 'I will be able to visit any desired link' =================

  /////////////////////////////////////
  //Given that I am on IMDbs website
  /////////////////////////////////////

  this.When(/^I click the main menu$/, async function () {
    let menuClicked = await $('#imdbHeader-navDrawerOpen--desktop');      //assign the css element of menu to menuButton
    await menuClicked.click();                                            //Main menu is clicked by calling click method
    await sleep(2000);                                                   //set sleep timer to 2 seconds
  });

  this.When(/^visit any title from the drop down menu$/, async function () {
    let dropMenuClicked = await driver.wait(until.elementLocated(By.linkText('Toronto Int\'l Film Festival')));  //assign the link text by using elemntLocated of drop-menu to dropMenuClicked
    await dropMenuClicked.click();                                                                               //drop menu title is clicked by calling click method                                                                                         //set sleep timer to 2 seconds
  });

  //================= SCENARIO: 'When open the main menu, I shall close it' =================

  this.When(/^close the menu by clicking on 'X' button$/, async function () {
    let clickedXButton = await await driver.findElement(By.css
      ('label.ipc-icon-button.BoMErbIIt00tb_ZoTOWZv.ipc-icon-button--baseAlt.ipc-icon-button--onBase'));   //assigns css element by using findElement to the variable clickedXButton
    expect(clickedXButton, 'X Button was not found');                                                      //throws an error if css element was not found by using expect
    await clickedXButton.click();                                                                          //click method, when click, closes the main menu
  });
}
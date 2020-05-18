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



  //pagebody.sendKeys(selenium.Key.PAGE_DOWN);


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

  this.Then(/^it should take me to detail page$/, async function () {
    await sleep(1000);
    let personDetail = await $('td[class="name-overview-widget"]');
    expect(personDetail, 'Doesn´t exist');

    await sleep(2000);

  });

};
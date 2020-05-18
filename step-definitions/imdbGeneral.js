let {
  $,
  sleep
} = require("./funcs");

module.exports = function () {
  let sleepTime = 0;

  //================= SCENARIO: 'carousel and other things in general =================

  // Click on left arrow on carousel
  /*  this.When(/^I click left arrow \+ ENTER$/, async function () {
     let el = await $('div[aria-label="Previous slide"]'); //grap the left arrow
     expect(el, 'couldn´t find  left arrow button'); //check if arrow exist true
     await sleep(3000)
     await el.click();
     await sleep(5000);
   });

   

   this.Then(/^I should se next image$/, async function () {
     await driver.wait(until.elementLocated(By.css('.findResult, .findNoResults')));
     // now the search has finisehd
     let results = await $('.findResult');
     expect(results, 'Could not find any results').to.exist;
     let firstResult = results[0];
     let resultText = await firstResult.getText();

     await sleep(5000);

   }); */

  // click on any card what to watch today

  this.When(/^I click on any card what to watch today$/, async function () {
    let whatTowatch = await driver.findElement(by.linkText('Joker'));
    expect(whatTowatch, 'couldn´t find  left arrow button'); //check if arrow exist true
    await sleep(3000)
    await whatTowatch.click();
    await sleep(5000);
  });

  this.Then(/^I should see detail page$/, async function () {
    await driver.wait(until.elementLocated(By.css(".title_wrapper"))); //Wait for element css '.title_wrapper' to be located (basically just wait for it to load)
    //This wait method is used because it's not a garantee that the detail page will load at
    //the same speed on different computers, so use this is a better alternative to sleep mehtod
    let titleWrapper = await $('div[class="title_wrapper"]'); //'titleWrapper' receives document.querySelector('div[class="title_wrapper"]')
    let titleWrapperGetText = await titleWrapper.getText(); //titleWrapperGetText receives text content from within titleWrapper
    titleWrapperSliced = titleWrapperGetText.slice(0, 5); //titleWrapperSliced receives titleWrapperGetText's string but sliced to "Joker"
    expect(titleWrapperSliced).to.include('Joker'); //Expect titleWrapperSliced to include inputText which is "Joker"
  });

};
const {assert} = require('chai');
const {buildItemObject} = require('../test-utils');

describe('User visits the create page', () => {
  describe('posts a new item', () => {
    it('and is rendered', () => {
         const itemToCreate = buildItemObject();
         browser.url('/items/create');
         browser.setValue('#title-input', itemToCreate.title);
         browser.setValue('#description-input', itemToCreate.description);
         browser.setValue('#imageUrl-input', itemToCreate.imageUrl);
         browser.click('#submit-button');

         // User is redirected back to main page
	 // Can see the created item
         assert.include(browser.getText('body'), itemToCreate.title);
         assert.include(browser.getAttribute('body img', 'src'), itemToCreate.imageUrl);


	 // click on the item. '.item-card a'
         browser.click('.item-card a');
         assert.include(browser.getText('body'), itemToCreate.descripton);
     });
  });
});

const {assert} = require('chai');
const request = require('supertest');

const Item = require('../../models/item');
const app = require('../../app');

const {parseTextFromHTML, seedItemToDatabase} = require('../test-utils');
const {connectDatabaseAndDropData, diconnectDatabase} = require('../setup-teardown-utils');

describe('Server path: /items/:id', () => {
  beforeEach(connectDatabaseAndDropData);

  afterEach(diconnectDatabase);

  describe('renders single item page', () => {
    
    it('it displays all item information', async () => {
       const item = await seedItemToDatabase();
       const response = await request(app)
        .get('/items/' + item._id);

      assert.include(response.text, item.title);
      assert.include(response.text, item.description);
      assert.include(response.text, item.imageUrl);
    });
  });
});

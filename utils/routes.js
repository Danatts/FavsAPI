const fav = require('../api/favs');
const item = require('../api/item');
const user = require('../api/user');

function routes(app) {
  app.use('/api/favs', fav);
  app.use('/api/item', item);
  app.use('/api/user', user);
}

module.exports = routes;

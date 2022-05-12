const fav = require('../api/favs');
const item = require('../api/item');

function routes(app) {
  app.use('/api/favs', fav);
  app.use('/api/item', item);
}

module.exports = routes;

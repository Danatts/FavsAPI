const fav = require('../api/favs');

function routes(app) {
  app.use('/api/favs', fav);
}

module.exports = routes;

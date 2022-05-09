const FavModel = require('./favs.model');

const createFav = (fav) => {
  return FavModel.create(fav);
};

module.exports = { createFav };

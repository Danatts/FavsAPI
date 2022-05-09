const FavModel = require('./favs.model');

const getAllFavs = () => {
  return FavModel.find({});
};

const getFavById = (id) => {
  return FavModel.findById(id);
};

const createFav = (fav) => {
  return FavModel.create(fav);
};

const deleteFavById = (id) => {
  return FavModel.findByIdAndDelete(id);
};

const updateFavById = (id, body) => {
  return FavModel.findByIdAndUpdate(id, body, { new: true });
};

module.exports = {
  getAllFavs,
  getFavById,
  createFav,
  deleteFavById,
  updateFavById,
};

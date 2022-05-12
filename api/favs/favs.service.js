const FavModel = require('./favs.model');

const getAllFavs = () => {
  return FavModel.find({}).populate({ path: 'items', select: 'title' });
};

const getFavById = (id) => {
  return FavModel.findById(id).populate({ path: 'items', select: 'title' });
};

const createFav = (body) => {
  return FavModel.create(body);
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

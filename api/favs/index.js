const express = require('express');

const router = express.Router();

const {
  handleGetAllFavs,
  handleGetFavById,
  handleCreateFav,
  handleDeleteFavById,
  handleUpdateFavById,
} = require('./favs.controller');

router.route('/')
  .get(handleGetAllFavs)
  .post(handleCreateFav);

router.route('/:id')
  .get(handleGetFavById)
  .delete(handleDeleteFavById)
  .patch(handleUpdateFavById);

module.exports = router;

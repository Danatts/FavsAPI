const express = require('express');

const router = express.Router();

const { isAuth } = require('../../auth/auth.service');

const {
  handleGetAllFavs,
  handleGetFavById,
  handleCreateFav,
  handleDeleteFavById,
  handleUpdateFavById
} = require('./favs.controller');

router.route('/')
  .get(isAuth(), handleGetAllFavs)
  .post(isAuth(), handleCreateFav);

router.route('/:id')
  .get(isAuth(), handleGetFavById)
  .delete(isAuth(), handleDeleteFavById)
  .patch(isAuth(), handleUpdateFavById);

module.exports = router;

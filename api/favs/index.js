const express = require('express');

const router = express.Router();

const {
  handleCreateFav,
} = require('./favs.controller');

router.route('/')
  .post(handleCreateFav);

module.exports = router;

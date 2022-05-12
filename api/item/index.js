const express = require('express');

const router = express.Router();

const {
  handleCreateItem,
} = require('./item.controller');

router.route('/')
  .post(handleCreateItem);

module.exports = router;


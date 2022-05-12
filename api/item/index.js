const express = require('express');

const router = express.Router();

const {
  handleCreateItem,
} = require('./item.controller');

router.route('/:id')
  .post(handleCreateItem);

module.exports = router;


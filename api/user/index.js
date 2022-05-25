const express = require('express');

const router = express.Router();

const {
  handleCreateUser
} = require('./user.controller');

router.route('/')
  .post(handleCreateUser);

module.exports = router;

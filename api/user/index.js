const express = require('express');

const router = express.Router();

const {
  handleCreateUser
} = require('./user.controller');

router.route('/signup')
  .post(handleCreateUser);

module.exports = router;

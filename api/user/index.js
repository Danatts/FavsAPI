const express = require('express');

const router = express.Router();

const {
  handleCreateUser,
  handleGetAllUsers,
} = require('./user.controller');

router.route('/')
  .get(handleGetAllUsers)
  .post(handleCreateUser);

module.exports = router;

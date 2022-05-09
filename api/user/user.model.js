const mongoose = require('mongoose');

const { Schema, model } = mongoose;

const userSchema = new Schema({
  name: String,
  last: String,
  email: String,
  password: String,
  lists: [],
}, {
  timestamps: true,
  versionKey: false,
});

const user = model('User', userSchema);

module.exports = user;

const mongoose = require('mongoose');

const { Schema, model } = mongoose;

const listSchema = new Schema({
  name: String,
  favs: [],
}, {
  timestamps: true,
  versionKey: false,
});

const list = model('List', listSchema);

module.exports = list;

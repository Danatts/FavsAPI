const mongoose = require('mongoose');

const { Schema, model } = mongoose;

const favSchema = new Schema({
  title: String,
  description: String,
  link: String,
}, {
  timestamps: true,
  versionKey: false,
});

const fav = model('Fav', favSchema);

module.exports = fav;

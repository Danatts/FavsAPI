const mongoose = require('mongoose');

const { Schema, model } = mongoose;

const favSchema = new Schema({
  name: String,
  favs: [{
    title: String,
    desc: String,
    link: String,
  }],
}, {
  timestamps: true,
  versionKey: false,
});

const fav = model('Fav', favSchema);

module.exports = fav;

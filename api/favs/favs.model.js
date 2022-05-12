const { Schema, model } = require('mongoose');

const favSchema = new Schema({
  name: String,
  favs: [{ 
    type: Schema.Types.ObjectId,
    ref: 'Item'
  }]
}, {
  timestamps: true,
  versionKey: false,
});

const fav = model('Fav', favSchema);

module.exports = fav;

const { Schema, model } = require('mongoose');

const itemSchema = new Schema({
  title: String,
  desc: String,
  link: String,
  favList: {
    type: Schema.Types.ObjectId,
    ref: 'Fav',
  } 
}, {
  timestamps: true,
  versionKey: false,
});

const item = model('Item', itemSchema);

module.exports = item;

const { Schema, model } = require('mongoose');

const favSchema = new Schema({
  name: {
    type: String,
    require: true,
    trim: true,
    unique: true,
  },
  items: [{ 
    type: Schema.Types.ObjectId,
    ref: 'Item',
    trim: true,
  }]
}, {
  timestamps: true,
  versionKey: false,
});

const fav = model('Fav', favSchema);

module.exports = fav;

const { Schema, model } = require('mongoose');

const userSchema = new Schema({
  name: {
    require: true,
    trim: true,
    type: String,
  },
  email: {
    require: true,
    trim: true,
    type: String,
    unique: true,
  },
  password: {
    require: true,
    trim: true,
    type: String,
  },
  lists: [{
    type: Schema.Types.ObjectId,
    ref: 'Fav',
    trim: true,
  }],
}, {
  timestamps: true,
  versionKey: false,
});

const user = model('User', userSchema);

module.exports = user;

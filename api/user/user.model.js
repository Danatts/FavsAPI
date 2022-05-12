const { Schema, model } = require('mongoose');

const userSchema = new Schema({
  name: String,
  email: String,
  password: String,
  lists: [{
    type: Schema.Type.ObjectId,
    ref: 'Fav',
  }],
}, {
  timestamps: true,
  versionKey: false,
});

const user = model('User', userSchema);

module.exports = user;

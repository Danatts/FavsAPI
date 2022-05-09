const mongoose = require('mongoose');

const connectDB = async (uri) => {
  try {
    await mongoose.connect(uri);
    console.log('Connected to database');
  } catch (err) {
    console.log(err);
  }
};

module.exports = connectDB;

const UserModel = require('./user.model');

const getUserByEmail = (email) => {
  return UserModel.findOne({email: email});
};

const createUser = (body) => {
  return UserModel.create(body);
};

module.exports = {
  getUserByEmail,
  createUser,
};

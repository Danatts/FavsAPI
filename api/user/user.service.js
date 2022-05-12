const UserModel = require('./user.model');

const createUser = (body) => {
  return UserModel.create(body);
};

module.exports = {
  createUser,
};

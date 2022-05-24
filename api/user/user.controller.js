const {
createUser,
} = require('./user.service');

/**
 * ! Route: POST api/user/signup
 * ! Desc: Registrer an user
 * ! Access: Public
 */

const handleCreateUser = async (req, res) => {
  const { body } = req;
  try {
    if (!body.name | !body.email | !body.password) {
      return res.status(400).json({ message: 'some missing values on request body' })
    }
    const response = await createUser(body);
    return res.status(201).json(response);
  } catch (err) {
    console.log(err);
    return res.status(400).json({ message: 'Error' });
  }
};

module.exports = {
  handleCreateUser,
};

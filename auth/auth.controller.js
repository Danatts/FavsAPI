const { getUserByEmail } = require("../api/user/user.service");
const { signToken } = require("./auth.service");

/**
 * ! Route: POST auth/local/login
 * ! Desc: Check if the email is registred and return and authentication token
 * ! Access: Public
 */

const handleLogin = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await getUserByEmail(email);

    if(!user) {
      return res.status(401).json({message: 'invalid email or password'})
    };

    const isMatch = await user.comparePassword(password);

    if (!isMatch) {
      return res.status(401).json({message: 'invalid email or password'})
    };

    const token = await signToken({email});

    return res.status(200).json({token, email});
  } catch (err) {
    return res.status(400).json(err);
  }
}

module.exports = {
  handleLogin,
};

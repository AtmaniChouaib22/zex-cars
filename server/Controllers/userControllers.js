const User = require('../Models/UserSchema.js');
const { genPassword } = require('../Utils/passwordUtils.js');

//register user

const register_user = async (req, res, next) => {
  const { first_name, last_name, email, password, phone } = req.body;
  //check if user already exists
  const isAlreadyUser = await User.findOne({ email });
  if (isAlreadyUser) {
    const err = new Error('User already exists');
    next(err);
    return;
  }

  const { salt, hash } = genPassword(password); //hashing the password
  try {
    const user = new User({
      first_name,
      last_name,
      email,
      hash,
      salt,
      phone,
    });
    await user.save().then((user) => {
      res.json({ message: 'User created', user });
    });
  } catch (error) {
    const err = new Error('Error creating user');
    next(err);
  }
};

//login user

module.exports = { register_user };

const User = require('../Models/UserSchema.js');
const Deal = require('../Models/DealSchema.js');
const fs = require('fs');
const path = require('path');
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
    await user.save().then(() => {
      res.json({ message: 'User created' });
    });
  } catch (error) {
    const err = new Error('Error creating user');
    next(err);
  }
};

//get profile
const get_profile = async (req, res, next) => {
  const { _id } = req.user;
  try {
    const user = await User.findOne({ _id }, { hash: 0, salt: 0, __v: 0 });
    res.json({ message: 'User profile', user });
  } catch (error) {
    const err = new Error('Error getting user profile');
    next(err);
  }
};

//get user deals  for user

const get_user_deals = async (req, res, next) => {
  const { _id } = req.user;
  try {
    const [buying_deals, selling_deals] = await Promise.all([
      Deal.find({ buyer: _id }),
      Deal.find({ seller: _id }),
    ]);
    res.json({
      message: 'User deals',
      buying_deals,
      selling_deals,
    });
  } catch (error) {
    const err = new Error('Error getting user  deals');
    next(err);
  }
};

//add avatar/update the user profile and delete previous avatar
const add_avatar = async (req, res, next) => {
  const { _id } = req.user;
  const avatar = req.file.filename;
  try {
    const user = await User.findById(_id);
    //delete previous avatar from the file system
    if (user.avatar !== '' || user.avatar !== undefined) {
      fs.unlink(
        path.join(
          __dirname,
          '..',
          '..',
          'client',
          'uploads',
          'avatars',
          user.avatar,
        ),
        (err) => {
          if (err) {
            console.error(err);
            return;
          }
        },
      );
    }
    await User.findByIdAndUpdate(_id, { avatar });
    res.json({ message: 'Avatar added' });
  } catch (error) {
    const err = new Error('Error adding avatar');
    err.status = 500;
    next(err);
  }
};

module.exports = { register_user, get_profile, get_user_deals, add_avatar };

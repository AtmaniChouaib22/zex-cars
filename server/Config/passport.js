const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const User = require('../Models/UserSchema');
const { validatePassword } = require('../Utils/passwordUtils');

//custom fields to be used in the strategy to define the fields to be used treated as username
//in the request
const customFields = {
  usernameField: 'email',
  passwordField: 'password',
};

//query the database to find the user
function verifyCallback(email, password, done) {
  User.findOne({ email: email })
    .then((user) => {
      if (!user) {
        return done(null, false, { message: 'User not found' });
      }
      const isValid = validatePassword(password, user.hash, user.salt);
      if (isValid) {
        return done(null, user);
      } else {
        return done(null, false, { message: 'Incorrect password' });
      }
    })
    .catch((err) => {
      done(err);
    });
}

const strategy = new LocalStrategy(customFields, verifyCallback);

passport.use(strategy);

// decide which information is stored inside the session(user Id in this case)
passport.serializeUser((user, done) => {
  done(null, user.id);
});

//is used to retrieve the user information from the session given the user id it returns the user object
passport.deserializeUser((userId, done) => {
  User.findById(userId)
    .then((user) => {
      done(null, user);
    })
    .catch((err) => done(err));
});

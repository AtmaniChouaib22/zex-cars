const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const User = require('../Models/UserSchema');
const { validatePassword } = require('../Utils/passwordUtils');

const customFields = {
  usernameField: 'email',
  passwordField: 'password',
};

function verifyCallback(email, password, done) {
  User.findOne({ email: email })
    .then((user) => {
      if (!user) {
        return done(null, false, { message: 'user not found' });
      }
      const isValid = validatePassword(password, user.hash, user.salt);
      if (isValid) {
        return done(null, user);
      } else {
        return done(null, false, { message: 'incorrect password' });
      }
    })
    .catch((err) => {
      done(err);
    });
}

const strategy = new LocalStrategy(customFields, verifyCallback);

passport.use(strategy);

//decide which information is stored inside the session(user Id in this case)
passport.serializeUser((user, done) => {
  done(null, user.id);
});
// retrieve the user information from the session
passport.deserializeUser((userId, done) => {
  User.findById(userId)
    .then((user) => {
      done(null, user);
    })
    .catch((err) => done(err));
});

const router = require('express').Router();
const passport = require('passport');
const { register_user } = require('../Controllers/userControllers');

router.get('/', (req, res) => {
  res.json({ message: 'Hello World' });
});

router.post('/register', register_user);

router.post('/login', passport.authenticate('local'), (req, res) => {
  res.send('logged in');
});

module.exports = router;

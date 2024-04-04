const router = require('express').Router();
const passport = require('passport');
const multer = require('multer');
const path = require('path');
const {
  register_user,
  get_profile,
  get_user_deals,
  add_avatar,
} = require('../Controllers/userControllers');
const {
  create_car,
  buy_car,
  get_available_cars,
  get_single_car,
} = require('../Controllers/carControllers');
const {
  get_pending_cars,
  get_unconfirmed_deals,
  set_available_car,
  set_rejected_car,
  confirm_deal,
  reject_deal,
} = require('../Controllers/adminControllers');
const { isAuth, isAdmin } = require('../Utils/authent');

// Multer configuration
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, '../client/uploads/cars');
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
    cb(
      null,
      file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname),
    );
  },
});
const upload = multer({ storage: storage });
//avatar upload
const storage_av = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, '../client/uploads/avatars');
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
    cb(
      null,
      file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname),
    );
  },
});
const upload_av = multer({ storage: storage_av });

router.get('/', (req, res) => {
  res.json({ message: 'Hello World' });
});

// authentification post requests
router.post('/register', register_user);

router.post('/login', passport.authenticate('local'), (req, res) => {
  const { first_name, last_name, email, avatar, admin, id, phone } = req.user;
  res.json({ first_name, last_name, email, avatar, admin, id, phone });
});

router.post('/logout', isAuth, function (req, res) {
  req.logout(function (err) {
    if (err) {
      return next(err);
    } else {
      req.session.destroy(function (err) {
        if (err) {
          return next(err);
        } else {
          res.clearCookie('connect.sid');
          return res.status(200).json({ message: 'Successfully logged out' });
        }
      });
    }
  });
});

// add a car post request
router.post('/sellcar', isAuth, upload.single('image'), create_car);

router.post('/avatar', isAuth, upload_av.single('avatar'), add_avatar);

router.post('/buycar', isAuth, buy_car);

// get requests
router.get('/profile', isAuth, get_profile);

router.get('/cars-av', get_available_cars);

router.get('/mydeals', isAuth, get_user_deals);

router.get('/cars-av/:id', get_single_car);

//admin routes
router.get('/waitingcars', isAdmin, get_pending_cars);

router.get('/unconfirmeddeals', isAdmin, get_unconfirmed_deals);

router.patch('/setavailable', isAdmin, set_available_car);

router.patch('/setrejected', isAdmin, set_rejected_car);

router.patch('/confirmdeal', isAdmin, confirm_deal);

router.patch('/rejectdeal', isAdmin, reject_deal);

module.exports = router;

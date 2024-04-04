const CustomError = require('../Utils/errorMiddleware');
const isAuth = (req, res, next) => {
  if (req.isAuthenticated()) {
    next();
  } else {
    const err = new CustomError('you are not authenticated', 400);
    next(err);
  }
};

const isAdmin = (req, res, next) => {
  if (req.isAuthenticated() && req.user.admin) {
    next();
  } else {
    const err = new CustomError('you are not authorized as admin', 400);
    next(err);
  }
};

module.exports = { isAuth, isAdmin };

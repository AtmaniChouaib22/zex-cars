const isAuth = (req, res, next) => {
  if (req.isAuthenticated()) {
    next();
  } else {
    const err = new Error('you are not authenticated by middleware');
    err.status = 400;
    next(err);
  }
};

module.exports = { isAuth };

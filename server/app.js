require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const MongoStore = require('connect-mongo');
const cors = require('cors');
const session = require('express-session');
const passport = require('passport');

//environment variables
const PORT = process.env.PORT || 3000;
const MONGO_URI = process.env.MONGO_URI;
const SESSION_SECRET = process.env.SESSION_SECRET;

//database session store
const sessionStore = new MongoStore({
  mongoUrl: MONGO_URI,
  collection: 'sessions',
});

//server start funtion
async function serverLunch() {
  try {
    await mongoose.connect(MONGO_URI);
    console.log('Database connected');
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  } catch (error) {
    console.error('error connecting to the database', error);
  }
}

const app = express();

app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//cors middelware config
app.use(
  cors({
    origin: 'http://localhost:5173',
    credentials: true,
    widthCredentials: true,
  }),
);

//session config
app.use(
  session({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    store: sessionStore,
    cookie: {
      maxAge: 1000 * 60 * 60 * 8,
    },
  }),
);

//passport authentication and session middleware
app.use(passport.initialize());
app.use(passport.session());

app.get('/', (req, res) => {
  res.send('Hello World');
});

//error handling middleware for development environment
app.use(function (err, req, res, next) {
  res.status(err.status || 500);
  res.json({
    message: err.message,
    error: app.get('env') === 'development' ? err : {},
  });
  s;
});

serverLunch();

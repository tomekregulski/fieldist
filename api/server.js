const express = require('express');
const path = require('path');
const session = require('express-session');
const SequelizeStore = require('connect-session-sequelize')(session.Store);
const sequelize = require('./config/connection');
// const helpers = require('./utils/helpers');
const cors = require('cors');
const errorHandler = require('./_helpers/error-handler');

// const hbs = exphbs.create({ helpers });

// Sets up the Express App
const app = express();
const PORT = process.env.PORT || 8081;

// Create a new sequelize store using the express-session package
const sess = {
  secret: process.env.SESSION_SECRET, // key to sign the cookie
  cookie: {
    httpOnly: true,
    // maxAge: process.env.SESSION_MAX_AGE
  },
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize,
  }),
};

app.use(session(sess));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());
app.use(require('./controllers'));
app.use(errorHandler);

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});

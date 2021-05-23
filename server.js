const express = require('express');
const path = require('path');
const session = require('express-session');
const SequelizeStore = require('connect-session-sequelize')(session.Store);
const sequelize = require('./config/connection');
const helpers = require('./utils/helpers');

// const hbs = exphbs.create({ helpers });

// Sets up the Express App
const app = express();
const PORT = process.env.PORT || 3001;

// Create a new sequelize store using the express-session package
const sess = {
  secret: 'SECRET', // key to sign the cookie
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize,
  }),
};

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
// app.use(require('./controllers'));

// Starts the server to begin listening
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});

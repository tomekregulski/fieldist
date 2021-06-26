const express = require('express');
const path = require('path');
const session = require('express-session');
const sequelize = require('./config/connection');
const cors = require('cors');
const helmet = require("helmet");
const { clientOrigins, serverPort } = require("./config/env.dev");
const errorHandler = require('./_helpers/error-handler');

// Sets up the Express App
const routes = require('./controllers');
const PORT = process.env.PORT || 8081;

const SequelizeStore = require('connect-session-sequelize')(session.Store);

const store = new SequelizeStore({
  db: sequelize,
  tableName: 'sessions',
});

// Create a new sequelize store using the express-session package
const sessionOptions = {
  secret: process.env.SESSION_SECRET || 'development', // key to sign the cookie
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store,
};

const app = express();

app.use(session(sessionOptions));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, 'public')));

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, 'client/build')));
}

app.use(express.json());
app.use(helmet());
app.use(cors({ origin: clientOrigins }));
app.use(routes);
app.use(errorHandler);

sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}!`);
  });
});

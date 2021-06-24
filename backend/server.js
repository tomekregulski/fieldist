const express = require('express');
const path = require('path');
const session = require('express-session');
const sequelize = require('./config/connection');
const cors = require('cors');
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
  cookie: {
    httpOnly: true,
    // maxAge: process.env.SESSION_MAX_AGE
  },
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
app.use(cors());
app.use(routes);
app.use(errorHandler);

sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT} son!`);
  });
});

// sequelize.sync({ force: false }).then(() => {
//   app.listen(PORT, () => console.log('Now listening'));
// });

const express = require('express');
const bodyParser = require("body-parser");
const path = require('path');
// const session = require('express-session');
const sequelize = require('./config/connection');
const cors = require('cors');

const routes = require('./controllers');
const PORT = process.env.PORT || 8081;

// const errorHandler = require('./_helpers/error-handler');
// Sets up the Express App


// const SequelizeStore = require('connect-session-sequelize')(session.Store);

// const store = new SequelizeStore({
//   db: sequelize,
//   tableName: 'sessions',
// });

// Create a new sequelize store using the express-session package
// const sessionOptions = {
//   secret: process.env.SESSION_SECRET || 'development', // key to sign the cookie
//   cookie: {},
//   resave: false,
//   saveUninitialized: true,
//   store,
// };

const app = express();

var corsOptions = {
  origin: "/"
};

app.use(cors(corsOptions));

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.json());

app.use(express.static(path.join(__dirname, 'public')));

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, 'client/build')));
}

app.use(routes);

sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}!`);
  });
});


require('dotenv').config();
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const routes = require('./routes.js');
const path = require('path');
const helmet = require('helmet');
const csrf = require('csurf');
const session = require('express-session');
const MongoStore = require('connect-mongo');
const sessionOptions = session({
  secret: process.env.SECRET,
  store: MongoStore.create({
    mongoUrl: process.env.URI
  }),
  resave: false,
  saveUninitialized: false,
  cookie: {
    httpOnly: true,
    maxAge: 1000 * 60 * 60 * 24 * 7,
  }
});
const csrfProtectMiddleware = require('./src/middlewares/csrfProtect.js');
const csrfTokenMiddleware = require('./src/middlewares/csrfToken.js');

mongoose.connect(process.env.URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(res => app.emit('connected'))
  .catch(e => console.log(e));

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.resolve(__dirname, 'public')));
app.set('views', path.resolve(__dirname, 'src', 'views'));
app.set('view engine', 'ejs');
app.use(sessionOptions)
app.use(helmet());
app.use(csrf());
app.use(csrfProtectMiddleware);
app.use(csrfTokenMiddleware);
app.use(routes);

app.on('connected', () => {
  app.listen(process.env.PORT, () => {
    console.log('Server running at http://localhost:' + process.env.PORT);
  });
});

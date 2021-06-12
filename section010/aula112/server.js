require('dotenv').config();

const path = require('path');
const express = require('express');
const app = express();
const mongoose = require('mongoose');

mongoose.connect(process.env.URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(res => app.emit('connected'))
  .catch(e => console.log(e));

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.resolve(__dirname, 'public')));

const session = require('express-session');
const MongoStore = require('connect-mongo');
const flash = require('connect-flash')
const routes = require('./routes.js');

const sessionOptins = session({
  secret: process.env.SECRET,
  store: MongoStore.create({ mongoUrl: process.env.URI }),
  resave: false,
  saveUninitialized: false,
  cookie: {
    maxAge: 1000 * 60 * 60 * 24 * 7,
    httpOnly: true
  }
});

app.use(sessionOptins);
app.use(flash());
app.set('views', path.resolve(__dirname, 'src', 'views'));
app.set('view engine', 'ejs');
app.use(routes);

app.on('connected', () => {
  app.listen(process.env.PORT, () => {
    console.log('Server running at http://localhost:' + process.env.PORT);
  });
});


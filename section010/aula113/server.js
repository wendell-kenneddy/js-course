require('dotenv').config();
const path = require('path');
const express = require('express');
const app = express();
const routes = require('./routes.js');
const { run } = require('./src/models/mongo.js');
const globalMiddleware = require('./src/middlewares/globalMiddleware.js');

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.resolve(__dirname, 'public')));

app.set('views', path.resolve(__dirname, 'src', 'views'));
app.set('view engine', 'ejs');
app.use(globalMiddleware);
app.use(routes);

run().then(() => {
  app.listen(process.env.PORT, () => {
    console.log('Server running at http://localhost:' + process.env.PORT);
  });
});

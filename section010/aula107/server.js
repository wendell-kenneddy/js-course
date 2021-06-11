const express = require('express');
const app = express();
const route = require('./routes.js');
const port = 3000;
const path = require('path');

app.use(express.urlencoded({ extended: true }));
app.set('views', path.resolve(__dirname, 'src', 'views'));
app.set('view engine', 'ejs');
app.use(route);

app.listen(port, () => {
  console.log('Server running at http://localhost:' + port);
});

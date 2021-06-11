const express = require('express');
const app = express();
const router = require('./routes.js');
const port = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(router);

app.listen(port, () => {
  console.log('Server running at http://localhost:' + port);
});

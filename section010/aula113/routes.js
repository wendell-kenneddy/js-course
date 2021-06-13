const express = require('express');
const routes = express.Router();
const home = require('./src/controllers/homeController.js');

routes.get('/', home.getHome);
routes.post('/', home.postHome);

module.exports = routes;

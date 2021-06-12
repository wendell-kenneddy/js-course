const express = require('express');
const routes = express.Router();
const home = require('./src/controllers/homeController.js');

routes.get('/', home.getHome);

module.exports = routes;

const express = require('express');
const route = express.Router();
const home = require('./src/controllers/homeController.js');

route.get('/', home.getHome);

module.exports = route;

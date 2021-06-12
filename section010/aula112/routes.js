const express = require('express');
const routes = express.Router();
const home = require('./src/controllers/homeController.js');
const postUserMiddleware = require('./src/middlewares/postUserMiddleware.js');

routes.get('/', home.getHome);
routes.post('/', postUserMiddleware, home.postHome);

module.exports = routes;

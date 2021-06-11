const express = require('express');
const router = express.Router();
const home = require('./controllers/homeController.js');
const { getUsersHome } = require('./controllers/usersController.js');

router.get('/', home.getHome);
router.post('/', home.postHome);
router.get('/users', getUsersHome);

module.exports = router;

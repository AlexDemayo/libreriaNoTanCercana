const express = require('express');
const router = express.Router();
const usersController = require('../controllers/usersController');
const validator = require('../middleWares/validator');
const { body } = require('express-validator');

router.get('/login-register', usersController.logYreg);
router.get('/user', usersController.user);
router.post('/register', validator.register, usersController.register);
router.post('/login', validator.login, usersController.login);
router.post('/logout', usersController.logout);

module.exports = router;

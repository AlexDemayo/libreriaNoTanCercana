const express = require('express');
const router = express.Router();
const usersController = require('../controllers/usersController');
const validator = require('../middleWares/validator');
const {body} = require('express-validator');



router.get('/', usersController.root);
router.post('/', validator.register, usersController.register);
router.post('/', validator.login, usersController.login);

module.exports = router;
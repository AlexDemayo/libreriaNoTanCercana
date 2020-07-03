const express = require('express');
const router = express.Router();
const {body} = require('express-validator');
const loginController = require('../controllers/loginController')
const jsonModel = require('../models/jsonModel');
const userModel = jsonModel('users');
const bcryptjs = require('bcryptjs');


router.get('/', loginController.root);
router.post('/',
[	body('email')
        .custom((value, {req}) => {
            // buscamos un usuario por email
            let user = userModel.findBySomething(user => user.email == value)

            
        })
], loginController.login);


module.exports = router;
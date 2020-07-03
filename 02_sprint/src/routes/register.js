var express = require('express');
var router = express.Router();
const logyregController = require('../controllers/logyregController');
const {body} = require('express-validator');
const jsonModel = require('../models/jsonModel');
const userModel = jsonModel('users');

router.get('/', logyregController.root);
router.post('/', [
    body('username').isLength().withMessage('El campo no puede estar vacío'),
    body('username').isLength({min:5}).withMessage('El campo debe tener un mínimo de cinco caracteres'),

    body('email').isEmail().withMessage('Email invalido'),
    body('email').custom((value, {req}) => {
        let user = userModel.findBySomething(user => user.email == value)
        if(user.email == req.body.email){
            return false
        } else return true
        
    }).withMessage('Email ya existente'),
     
    body('password').isLength({ min: 8 }).withMessage('La contraseña debe tener almenos ocho caracteres')
],logyregController.store);

module.exports = router;

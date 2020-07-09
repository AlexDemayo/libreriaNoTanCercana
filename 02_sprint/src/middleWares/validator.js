const { body } = require('express-validator');
const path = require('path');
const bcrypt = require('bcryptjs');
const jsonModel = require('../models/jsonModel');
const users = jsonModel('users');

const validator = {
    register: [
        body('username')
            .notEmpty()
            .withMessage('Campo obligatorio')
            .bail()
            .isLength({min:5})
            .withMessage('El campo debe tener un mínimo de cinco caracteres'),
        
        body('email')
            .notEmpty()
            .withMessage('Campo obligatorio')
            .bail()
            .isEmail()
            .withMessage('Email invalido')
            .bail()
            .custom((value, {req}) => {
            let user = users.findBySomething(user => user.email == value);
            return !user;
            })
            .withMessage('Email ya existente'),
        
        body('password')
            .notEmpty()
            .withMessage('Campo obligatorio')
            .bail()
            .isLength({ min: 8 })
            .withMessage('La contraseña debe tener un mínimo de ocho caracteres'),
        
        body('confirmPassword')
            .notEmpty()
            .withMessage('Campo obligatorio')
            .bail()
            .custom((value, {req}) => req.body.password === value)
            .withMessage('Las contraseñas no coinciden')
    ],

    login: [
        body('email')
            .notEmpty()
            .withMessage('Campo obligatorio')
            .bail()
            .custom((value, {req}) => {
            const user = User.findBySomething((user) => user.email == value);

            if (user) {
              return bcrypt.compareSync(req.body.password, user.password);
            } else {
              return false;
            }
            })
            .withMessage('Email o contraseña invalidos'),

        body('password')
            .notEmpty()
            .withMessage('Campo obligatorio'),
    ]
}

module.exports = validator;

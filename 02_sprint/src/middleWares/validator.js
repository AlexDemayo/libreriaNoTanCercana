const { body } = require('express-validator');
const path = require('path');
const bcrypt = require('bcryptjs');
const jsonModel = require('../models/jsonModel');
const usersModel = jsonModel('users');

const validator = {
    register: [
        body('usernameReg')
            .notEmpty()
            .withMessage('Campo obligatorio')
            .bail()
            .isLength({min:5})
            .withMessage('El campo debe tener un mínimo de cinco caracteres'),
        
        body('emailReg')
            .notEmpty()
            .withMessage('Campo obligatorio')
            .bail()
            .isEmail()
            .withMessage('Email invalido')
            .bail()
            .custom((value, {req}) => {
            let user = usersModel.findBySomething(user => user.emailReg == value);
            return !user;
            })
            .withMessage('Email ya existente'),
        
        body('passwordReg')
            .notEmpty()
            .withMessage('Campo obligatorio')
            .bail()
            .isLength({ min: 8 })
            .withMessage('La contraseña debe tener un mínimo de ocho caracteres'),
        
        body('confirmPasswordReg')
            .notEmpty()
            .withMessage('Campo obligatorio')
            .bail()
            .custom((value, {req}) => req.body.passwordReg === value)
            .withMessage('Las contraseñas no coinciden'),

        body('image')
            .custom((value, { req }) => {
                if (req.file) {
                return true;
                } else {
                return false;
                }
            })
            .withMessage('Campo obligatorio')
            .bail() 
            .custom((value, {req}) => {
                const acceptedExtensions = ['.jpg', '.png', '.jpeg'];
                const ext = path.extname(req.file.originalname);

                if(acceptedExtensions.includes(ext)){
                    return true
                } else{
                    return false
                }
            })
            .withMessage('Extensión invalida')
    ],

    login: [
        body('emailLog')
            .notEmpty()
            .withMessage('Campo obligatorio')
            .bail()
            .custom((value, {req}) => {
            const user = usersModel.findBySomething(user => user.emailReg == value);

            if (user) {
              return bcrypt.compareSync(req.body.passwordLog, user.passwordReg);
            } else {
              return false;
            }
            })
            .withMessage('Email o contraseña invalidos'),

        body('passwordLog')
            .notEmpty()
            .withMessage('Campo obligatorio'),
    ]
}

module.exports = validator;

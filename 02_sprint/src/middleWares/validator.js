const { body } = require('express-validator');
const path = require('path');
const bcrypt = require('bcryptjs');
const db = require('../database/models');


const validator = {
    register: [
        body('userName')
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
            
            db.User.findOne({where: {email : value}})
            .then(function(user){
                console.log('Este es user: ' + !user);
                // console.log('Este es user negado: ' + !user)
                if(user){
                    return Promise.reject('El usuario ya existe')
                }
            })
            .catch(error => {
                console.log(error)
            })
            
        }),
        
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
        .bail(),
        // .custom((value, {req}) => {
        //     // const user = usersModel.findBySomething(user => user.email == value);
            
        //     db.User.findOne({where: {email : value}})
        //     .then(function(user){
        //         if (user) {
        //             return bcrypt.compareSync(req.body.passwordLog, user.password);
        //         } else {
        //             return false;
        //         }
        //     })
        // })
        // .withMessage('Email o contraseña invalidos'),
        
        body('passwordLog')
        .notEmpty()
        .withMessage('Campo obligatorio'),
    ]
}


module.exports = validator;
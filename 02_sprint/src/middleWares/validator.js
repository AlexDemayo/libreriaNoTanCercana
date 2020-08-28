const { body, oneOf } = require('express-validator');
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
        .withMessage('Email inválido')
        .bail()
        .custom((value, {req}) => {
            
            return db.User.findOne({where: {email : value}})
            .then(user => {
                if(user){
                    return Promise.reject('Usuario ya existente')
                }
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
        .withMessage('Extensión inválida')
    ],
    login: [
        body('emailLog')
        .notEmpty()
        .withMessage('Campo obligatorio')
        .bail()
        .custom((value, {req}) => {
            
            return db.User.findOne({where: {email : value}})
            .then(function(user){
                if (user) {
                    if(!bcrypt.compareSync(req.body.passwordLog, user.password)){
                        return Promise.reject('Email o contraseña inválidos')
                    }   
                } else {
                    return Promise.reject('Email o contraseña inválidos')
                }
            })
        }),
        
        body('passwordLog')
        .notEmpty()
        .withMessage('Campo obligatorio'),
    ],
    
    update: [
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
        .withMessage('Email inválido')
        .bail()
        .custom((value, {req}) => {
        
            return db.User.findOne({where: {email : value}})
             .then(function(user){
                //  console.log('Este es user: ' + !user);
                 // console.log('Este es user negado: ' + !user)
                 if(user && user.email != req.session.user.email){
                     return Promise.reject('Usuario ya existente')
                 }
             })
        
         }),
        
        body('password')
        .notEmpty()
        .withMessage('Campo obligatorio')
        .bail()
        .isLength({ min: 8 })
        .withMessage('La contraseña debe tener un mínimo de ocho caracteres')
        .custom((value, {req}) => {
            return db.User.findByPk(req.session.user.id)
            .then(user => {
                if(!bcrypt.compareSync(value, user.password)){
                    return Promise.reject("Contraseña incorrecta");
                }
            })
        }),
        
        body('image')
        .custom((value, {req}) => {
            
            if(req.file){
                const acceptedExtensions = ['.jpg', '.png', '.jpeg'];
                const ext = path.extname(req.file.originalname);
                
                if(acceptedExtensions.includes(ext)){
                    return true
                } else {
                    return false
                }

            } else {
                return true
            }
                
        
        })
        .withMessage('Extensión inválida')

    ],
    
    updatePassword: [

        body('password')
        .notEmpty()
        .withMessage('Campo obligatorio')
        .bail()
        .custom((value, {req}) => {
            return db.User.findByPk(req.session.user.id)
            .then(user => {
                if(!bcrypt.compareSync(value, user.password)){
                    return Promise.reject("Contraseña incorrecta");
                }
            })
        }),

        body('newPassword')
        .notEmpty()
        .withMessage('Campo obligatorio')
        .bail()
        .isLength({ min: 8 })
        .withMessage('La contraseña debe tener un mínimo de ocho caracteres'),

        body('confirmNewPassword')
        .notEmpty()
        .withMessage('Campo obligatorio')
        .bail()
        .custom((value, {req}) => req.body.newPassword === value)
        .withMessage('Las contraseñas no coinciden')       
    ]
}


module.exports = validator;
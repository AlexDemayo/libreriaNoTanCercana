const { body } = require('express-validator');
const path = require('path');
const db = require('../database/models');


const productValidator = {
    create: [
        body('title')
        .notEmpty()
        .withMessage('Campo obligatorio'),

        body('author')
        .notEmpty()
        .withMessage('Campo obligatorio'),

        body('publisher')
        .notEmpty()
        .withMessage('Campo obligatorio'),

        body('datePublished')
        .notEmpty()
        .withMessage('Campo obligatorio')
        .bail()
        .isDate()
        .withMessage('Campo inválido'),

        body('category')
        .notEmpty()
        .withMessage('Campo obligatorio'),


        // body('subCategory')
        // .notEmpty()
        // .withMessage('Campo obligatorio'),



        body('pages')
        .notEmpty()
        .withMessage('Campo obligatorio')
        .bail()
        .isNumeric()
        .withMessage('Campo inválido'),

        body('cover')
        .notEmpty()
        .withMessage('Campo obligatorio'),
        
        body('isbn')       
        .notEmpty()
        .withMessage('Campo obligatorio'),


        body('price')
        .notEmpty()
        .withMessage('Campo obligatorio')
        .bail()
        .isNumeric()
        .withMessage('Campo inválido'),

        body('description')
        .notEmpty()
        .withMessage('Campo obligatorio'),

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

    update: [
        body('title')
        .notEmpty()
        .withMessage('Campo obligatorio'),

        body('author')
        .notEmpty()
        .withMessage('Campo obligatorio'),

        body('publisher')
        .notEmpty()
        .withMessage('Campo obligatorio'),

        body('datePublished')
        .notEmpty()
        .withMessage('Campo obligatorio')
        .bail()
        .isDate()
        .withMessage('Campo inválido'),

        body('category')
        .notEmpty()
        .withMessage('Campo obligatorio'),


        body('subCategory')
        .notEmpty()
        .withMessage('Campo obligatorio'),


        body('pages')
        .notEmpty()
        .withMessage('Campo obligatorio')
        .bail()
        .isNumeric()
        .withMessage('Campo inválido'),

        body('cover')
        .notEmpty()
        .withMessage('Campo obligatorio'),
        
        body('isbn')       
        .notEmpty()
        .withMessage('Campo obligatorio'),


        body('price')
        .notEmpty()
        .withMessage('Campo obligatorio')
        .bail()
        .isNumeric()
        .withMessage('Campo inválido'),

        body('description')
        .notEmpty()
        .withMessage('Campo obligatorio'),

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
    ]
}

module.exports = productValidator;
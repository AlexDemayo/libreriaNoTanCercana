const jsonModel = require('../models/jsonModel');
const userModel = jsonModel('users');
const bcrypt = require('bcryptjs');
const {validationResult} = require('express-validator')

const usersController = {
    root: function(req,res){
        res.render('login-register')
    }, 

    register: function(req,res){
        const errors = validationResult(req);

        if(errors.isEmpty()){
            delete req.body.confirmPassword;
            req.body.password = bcrypt.hashSync(req.body.password, 10);

            userModel.create({
                id : " ",
                ...req.body
            })
    
            return res.redirect('/');

        }else{
            return res.render('login-register', {errorsRegister : errors.mapped(), oldRegister : req.body});
        }
    },

    login: function(req,res){
        const errors = validationResult(req);

        if(errors.isEmpty()){
            let user = userModel.findBySomething(user => user.email == req.body.email);
            
            delete user.password;

            req.session.user = user; //lo guarda en sesión

            if(req.body.remember){
                res.cookie('remember', user.email, { maxAge: 1000 * 60 * 60 * 24 }); 
            } 
            // si el usuario puso remember, guardamos el mail por un día 

            return res.redirect('/');
            
        } else {
            return res.render('login-register', {errorsLogin : errors.mapped(), oldLogin : req.body});
        }
    }
};

module.exports = usersController
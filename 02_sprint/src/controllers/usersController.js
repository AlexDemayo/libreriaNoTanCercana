const jsonModel = require('../models/jsonModel');
const userModel = jsonModel('users');
const bcrypt = require('bcryptjs');
const {validationResult} = require('express-validator')

const usersController = {
    logYreg: function(req,res){
        res.render('login-register')
    }, 

    register: function(req,res){
        const errors = validationResult(req);

        if(errors.isEmpty()){
            delete req.body.confirmPasswordReg;
            req.body.passwordReg = bcrypt.hashSync(req.body.passwordReg, 10);

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
            let user = userModel.findBySomething(user => user.emailReg == req.body.emailLog);
            
            delete user.passwordReg;

            req.session.user = user; //lo guarda en sesión

            if(req.body.remember){
                res.cookie('remember', user.emailReg, { maxAge: 1000 * 60 * 60 * 24 }); 
            } 
            // si el usuario puso remember, guardamos el mail por un día 

            return res.redirect('/');
            
        } else {
            return res.render('login-register', {errorsLogin : errors.mapped(), oldLogin : req.body});
        }
    },
    
    logout: function(req, res) {
    
        req.session.destroy();
    
        if(req.cookies.email){
          res.clearCookie('remember');
        }
    
        return res.redirect('/')
    
      }
};

module.exports = usersController
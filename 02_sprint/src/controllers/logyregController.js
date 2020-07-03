const jsonModel = require('../models/jsonModel');
const userModel = jsonModel('users');
const bcryptjs = require('bcryptjs');
const {validationResult} = require('express-validator')



const logyregController = {
    root : function(req,res){
        res.render('register')
    },
    store: function(req,res){
        let errors = validationResult(req);

        if(errors.isEmpty()){
            delete req.body.confirmPassword;
            req.body.password = bcryptjs.hashSync(req.body.password, 10);
    
            let user = {
                id : " ",
                ...req.body,
            };
    
            userModel.guardarUno(user);
    
            return res.redirect('/')

        } else{
            
            return res.render('register',{errors : errors.errors});
        }

        
    }
}


module.exports = logyregController;
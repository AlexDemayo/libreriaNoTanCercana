const jsonModel = require('../models/jsonModel');
const userModel = jsonModel('users');

module.exports = (req,res,next) => {
    
    res.locals.user = false;

    if(!req.session.user){
       console.log("no esta logueado")
       res.redirect('/users/login-register')
        return next();
    } else{
        return next();
    }
    
}
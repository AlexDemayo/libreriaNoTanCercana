const jsonModel = require('../models/jsonModel');
const userModel = jsonModel('users');

module.exports = (req,res,next) => {
    
    res.locals.user = false;

    if(req.session.user){
       console.log("ya esta logueado")
       res.redirect('http://localhost:3030/')
        return next();
    } else{
        return next();
    }
    
}
const jsonModel = require('../models/jsonModel');
const userModel = jsonModel('users');

module.exports = (req,res,next) => {
    
    res.locals.user = false;

    if(req.session.user){
        res.locals.user = req.session.user;
        return next();
    } else if(req.cookies.remember){
        let user = userModel.findBySomething(user => user.emailReg == req.cookies.emailReg);

        // delete user.passwordReg;

        req.session.user = user;
        res.locals.user = user;

        return next();

    } else {
        return next();
    }
}
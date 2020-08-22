
const db = require('../database/models')

module.exports = (req,res,next) => {
    
    res.locals.user = false;

    if(req.session.user){
        res.locals.user = req.session.user;
        return next();
    } else if(req.cookies.remember){
       
        db.User.findOne({where: { email : req.cookies.remember}})
        .then(function(user){
            
            req.session.user = user;
            res.locals.user = user;
            return next()
        })
        .catch(error => {
            console.log('error de log: ' + error)
        })

    } else {
        return next();
    }
}



const db = require('../database/models');

module.exports = (req,res,next) => {

    if(req.session.user){
        db.User.findOne({where: {email : req.session.user.email}})
        .then(function(user){
            if (user.admin == 0){
                res.redirect('/')
                return next()
    
            } else {
                return next()
            }
        })
        .catch(err => console.log('error de admin: ' + err))
    } else {
        res.redirect('/')
        next()
    }

 
}


module.exports = (req,res,next) => {
    
    if(!req.session.user){
       console.log("no esta logueado")
       res.redirect('/users/login-register')
        return next();
    } else{
        return next();
    }
    
}
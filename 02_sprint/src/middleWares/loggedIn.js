
module.exports = {
    
    logged : (req,res,next) => {
        if(req.session.user){
           console.log("ya esta logueado")
           res.redirect('/')
            return next();
        } else{
            return next();
        }
    },

    noLogged : (req,res,next) => {

        if(!req.session.user){
           console.log("no esta logueado")
           res.redirect('/users/login-register')
            return next();
        } else{
            return next();
        }
        
    }
}
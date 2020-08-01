
module.exports = (req,res,next) => {
    
    // res.locals.user = false;

    if(req.session.user){
       console.log("ya esta logueado")
       res.redirect('/')
        return next();
    } else{
        return next();
    }
    
}

module.exports = (req,res,next) => {
    
    if(req.session.user){
       console.log("ya esta logueado")
       res.redirect('/')
        return next();
    } else{
        return next();
    }
    
}
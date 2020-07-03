const jsonModel = require('../models/jsonModel');
const userModel = jsonModel('users');
const {validationResult} = require('express-validator')



const loginController = {
    root: function(req,res){
        res.render('login')
    },
    
    login : function(req,res){
        let errors = validationResult(req);
        
        if (errors.isEmpty()){
            let users = userModel.leerJson();

            for(let i = 0; i < users.length ; i++){
                if(users[i].email == req.body.email){
                    if(bcryptjs.compareSync(users[i].password, req.body.password)){
                        var userLogin = user[i];
                        break;
                    }
                }
            }
            
            if(userLogin == undefined){
                return res.render("login", {errors: [
                    {msg: "Crendeciales invalidas"}
                ]});
            }
            
            req.session.userLogged = userLogin;
            // res.redirect('/')
            res.render("sucess")
            
        } else {
            // return res.render('login', {errors : errors.errors})
            return res.send('hay errores')
        }
    }
    
}

module.exports = loginController;


// processLogin: function(req, res) {
//     let errors = validationResult(req);

//     if (errors.isEmpty()) {
//         let usersJSON= fs.readFileSync("users.json", { encoding: utf-8 })
//         let users;
//         if (usersJSON == "") {
//             users = [];
//         }else{
//             users= JSON.parse(usersJSON);
//         }

//         for(let i= 0; i < users.length; i++){
//             if (users[i].email == req.body.email){
//                 if(bcrypt.compareSync(req.body.password, users[i].password))
//                 let usuarioALoguearse= users[i];
//                 break;
//             }
//         }
//         if(usuarioAloguearse == undefined){
//             return res.render("login", {errors: [
//                 {msg: "Crendeciales invalidas"}
//             ]});
//         }
//         req.session.usuarioLogueado = usuarioALoguearse;
//         res.render("success");
//     } else {
//         return res.render('login', { errors: errors.errors });
//     }
// }
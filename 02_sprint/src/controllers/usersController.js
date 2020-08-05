const db = require('../database/models');
const bcrypt = require('bcryptjs');
const { validationResult } = require('express-validator');

const usersController = {
	logYreg: function(req, res) {
		res.render('login-register');
	},
	register: function(req,res){
		const errors = validationResult(req);

        if(errors.isEmpty()){
            req.body.password = bcrypt.hashSync(req.body.password, 10);


            db.User.create({
				userName: req.body.userName,
				email: req.body.email,
				password: req.body.password,
				admin: 0,
				orderId: null,
				image: req.file.filename
				
			});
			
            return res.redirect('/')
        } else {
			return res.render('login-register', { errorsRegister: errors.mapped(), oldRegister: req.body});
		}
	},
	login: function(req, res) {
		const errors = validationResult(req);

		if (errors.isEmpty()) {

			db.User.findOne({where: {email : req.body.emailLog}})
			.then(user => {
				delete user.password;

				req.session.user = user; //lo guarda en sesión
				
				// si el usuario puso remember, guardamos el mail por un día
				if (req.body.remember) {
					res.cookie('remember', user.email, { maxAge: 1000 * 60 * 60 * 24 });
				}
				
				return res.redirect('/');
			})
			.catch(error => {
				console.log(error)
			})

		} else {
			return res.render('login-register', { errorsLogin: errors.mapped(), oldLogin: req.body });
		}
	},
	logout: function(req, res) {
		req.session.destroy();

		if (req.cookies.remember) {
			res.clearCookie('remember');
		}

		return res.redirect('/');
	},

	user: function(req, res) {
		
		db.User.findOne({where: {id: req.session.user.id}})
		.then(function(user){
			return res.render('user', {user});
		})
		.catch(err => console.log(err));
	},

	update: function(req,res){

		db.User.findOne({where: {id: req.session.user.id}})
		.then(user => {
			let passwordN;
			if(req.body.newPassword){
				
				passwordN = bcrypt.hashSync(req.body.newPassword, 10);
			}else{
				
				passwordN = bcrypt.hashSync(req.body.password, 10);
			};

			return db.User.update({
				userName: req.body.userName,
				email: req.body.email,
				password: passwordN,
				image: req.file ? req.file.filename : user.image
			},{
				where: {
					id : req.session.user.id
				}
			});
		})
		.then(() => res.redirect('/users/user'))
		.catch(err => console.log(err))
	},

	deleteUser: function(req,res){
		req.session.destroy();

		if (req.cookies.remember) {
			res.clearCookie('remember');
		}
		
        db.User.destroy({
            where: {
                id: req.params.id
            }
        })
        return res.redirect('/')
    }



	// deleteUser: function(req,res){
		
	// 	// db.User.findOne({where: {id: req.session.user.id}})
	// 	// .then(() => {
	// 	// 	db.User.destroy({
	// 	// 		where: {
	// 	// 			id: req.session.user.id
	// 	// 		}
	// 	// 	})
	// 	// })
	// 	// .then(() => {
	// 	// 	return res.redirect('/')
	// 	// })
	// 	// .catch(err => console.log(err))
		
	// 	db.User.destroy({
	// 		where: {
	// 			id: req.session.id
	// 		}
	// 	})
	// 	return res.redirect('/')


	// }

	// // updateImg: function(req,res){

	// // 	db.User.findOne({where: {id: req.session.user.id}})
	// // 	.then(()=>{
	// // 		console.log(req.file.filename);
	// // 		return db.User.update({
	// // 			image: req.file.filename
	// // 		},{
	// // 			where: {id : req.session.user.id}
	// // 		})
	// // 	})
	// // 	.then(() => res.redirect('/users/user'))
	// // 	.catch(err => console.log(err))
	// // }
};

module.exports = usersController;




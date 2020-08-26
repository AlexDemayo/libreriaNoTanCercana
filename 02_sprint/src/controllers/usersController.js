const db = require('../database/models');
const bcrypt = require('bcryptjs');
const { validationResult } = require('express-validator');
const { response } = require('express');

const usersController = {
	logYreg: function(req, res) {
		res.render('login-register');
	},
	register: function(req,res){
		const errors = validationResult(req);

		// return res.send(errors.mapped());

        if(errors.isEmpty()){
            req.body.password = bcrypt.hashSync(req.body.password, 10);


            db.User.create({
				userName: req.body.userName,
				email: req.body.email,
				password: req.body.password,
				admin: 0,
				orderId: null,
				image: req.file.filename
				
			})
			.then(() => res.redirect('/'));
			
            
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
		
		const errors = validationResult(req);
		// return res.send(errors.mapped());

		if (errors.isEmpty()){
			db.User.findOne({where: {id: req.session.user.id}})
			.then(user => {
				let passwordN;
				
				if(req.body.newPassword){
					passwordN = bcrypt.hashSync(req.body.newPassword, 10);
				} else {
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

		} else {
			db.User.findOne({where: {id: req.session.user.id}})
			.then((user) => {
				return res.render('user', {user, errors: errors.mapped(), old: req.body});
			})
		};
		
		
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
	},
	
	cart: function(req,res){
         db.Item.findAll({
			where: {
				status: 1,
				userId: req.session.user.id
			},
			include: ['publisher']
		})
		.then(items => {
			return res.render('cart', {items})
		})
		.catch(error => console.log(error))
	},
	
	addToCart: function(req,res){
		
		db.Product.findByPk(req.body.productId,{
			include: ['publisher']
		})
		.then(product => {
			return db.Item.create({
				userId: req.session.user.id,
				title: product.title,
				author: product.author,
				price: product.price,
				isbn: product.isbn,
				publisherId: product.publisher.id,
				image: product.image,
				quantity: req.body.quantity,
				total: product.price * req.body.quantity,
				status: 1,
				orderId: null,
			})
		})
		.then(item => {
			return res.redirect('/users/cart');
		})
		.catch(error => console.log(error))
		
	},

	deleteFromCart: function(req,res){
		db.Item.destroy({
			where: {
				id: req.body.itemId,
			},
			force: true
		})
		.then(() => {
			return res.redirect('/users/cart')
		})
	},

	shop: function(req,res){

		let totalPrice = 0;

		db.Item.findAll({
			where:{
				status: 1,
				userId: req.session.user.id
			}
		})
		.then(items => {
			items.forEach(item => {
				totalPrice = totalPrice + item.price
			})

			return db.Order.findOne({
				order: [['createdAt', 'DESC']]
			})
		})
		.then(order => {
			return db.Order.create({
				orderNumber: order ? order.orderNumber + 1 : 1000,
				total: totalPrice,
				userId: req.session.user.id 
			})
		})
		.then(order => {
			return db.Item.update({
				status: 0,
				orderId: order.id
			},{
				where: {
					status: 1,
					userId: req.session.user.id
				}
			})
		})
		.then(() => {
			return res.redirect('/users/user')
		})
		.catch(err => console.log(err));
	}

};

module.exports = usersController;




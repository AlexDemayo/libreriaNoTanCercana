/*const jsonModel = require('../models/jsonModel');
const bookModel = jsonModel('booksData');  */

const db = require('../database/models');
const { recommended } = require('./categoryController');

const homeController = {
	root: function(req, res) {
		let books = db.Product.findAll();
		let lastBooks = db.Product.findAll({ order: [['id', 'DESC']] });
		let bestSellers = db.Product.findAll({order: [['author', 'ASC']]})
		let categories = db.Category.findAll({where: {recommended: 1}});
		let monthlyAuthor = db.MonthlyAuthor.findOne({ order: [['createdAt', 'DESC']]})
		
		// let booksByMonthlyAuthor = db.Product.findAll({where: {author: monthlyAuthor.name}})

		Promise.all([books, lastBooks, bestSellers, categories, monthlyAuthor])
		.then(([books, lastBooks, bestSellers, categories, monthlyAuthor]) => {
			db.Product.findAll({where: {author: monthlyAuthor.name}})
			.then(booksByMonthlyAuthor => {
				return res.render('index', {books, lastBooks, bestSellers, categories, monthlyAuthor, booksByMonthlyAuthor})
			})
			
		})
		.catch(error => {
			console.log(error)
			
		})
	}
};

module.exports = homeController;

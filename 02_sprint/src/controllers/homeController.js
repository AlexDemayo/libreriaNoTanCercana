/*const jsonModel = require('../models/jsonModel');
const bookModel = jsonModel('booksData');  */

const db = require('../database/models');

const homeController = {
	root: function(req, res) {
		let books = db.Product.findAll();
		let lastBooks = db.Product.findAll({ order: [['id', 'DESC']] });
		let bestSellers = db.Product.findAll({order: [['author', 'ASC']]})
		let categories = db.Category.findAll();
		// let monthlyAuthor = db.Product.findAll({where: {author: }})

		Promise.all([books, lastBooks, bestSellers, categories])
		.then(([books, lastBooks, bestSellers, categories]) => {
			return res.render('index', {books, lastBooks, bestSellers, categories})
		})
		.catch(error => {
			console.log(error)
		})
	}
};

module.exports = homeController;

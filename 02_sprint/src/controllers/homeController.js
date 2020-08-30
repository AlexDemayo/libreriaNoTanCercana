/*const jsonModel = require('../models/jsonModel');
const bookModel = jsonModel('booksData');  */

const db = require('../database/models');

const homeController = {
	root: function(req, res) {
		let books = db.Product.findAll();
		let lastBooks = db.Product.findAll({ order: [['id', 'DESC']] });
		let bestSellers = db.Product.findAll({order: [['author', 'ASC']]})

		Promise.all([books, lastBooks, bestSellers])
		.then(([books, lastBooks, bestSellers]) => {
			return res.render('index', {books, lastBooks, bestSellers})
		})
		.catch(error => {
			console.log(error)
		})
	}
};

module.exports = homeController;

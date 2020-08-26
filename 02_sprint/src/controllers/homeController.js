/*const jsonModel = require('../models/jsonModel');
const bookModel = jsonModel('booksData');  */

const db = require('../database/models');

const homeController = {
	root: function(req, res) {
		let books = db.Product.findAll();
		let lastBooks = db.Product.findAll({ order: [['id', 'DESC']] });

		Promise.all([books, lastBooks])
		.then(([books, lastBooks]) => {
			return res.render('index', {books, lastBooks})
		})
		.catch(error => {
			console.log(error)
		})
	}
};

module.exports = homeController;

/*const jsonModel = require('../models/jsonModel');
const bookModel = jsonModel('booksData');  */

const db = require('../database/models');

const homeController = {
	root: function(req, res) {
		db.Product
			.findAll()
			.then(function(books) {
				res.render('index', { books: books });
			})
			.catch(function(error) {
				console.log(error);
			});
	}
};

module.exports = homeController;

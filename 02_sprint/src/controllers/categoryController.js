const jsonModel = require('../models/jsonModel');
const bookModel = jsonModel('booksData');

const categoryController = {
	root: function(req, res) {
		const books = bookModel.leerJson();
		return res.render('books', { books });
	},
	category: function(req, res) {
		const category = req.params.category;
		const books = bookModel.filterBySomething((book) => book.category == category);
		return res.render('category', { books, category });
	},
	subCategory: function(req, res) {
		const category = req.params.category;
		const subCategory = req.params.subCategory;
		const books = bookModel.filterBySomething((book) => book.subCategory == subCategory);
		return res.render('subCategory', { category, subCategory, books });
	}
};

module.exports = categoryController;

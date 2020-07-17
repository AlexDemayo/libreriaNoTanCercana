const jsonModel = require('../models/jsonModel');
const bookModel = jsonModel('booksData');

/*const db = require('../database/models');*/

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

/*
    root: function(req, res) {
	    db.Product.findAll().then(function(titles) {
		    res.render('index', { titles });
	});
	},
	category: function(req, res) {
		db.Category.findAll().then(function(categories) {
			res.render('Category', { titles, categories});
		});
	subCategory: function(req, res) {
		db.SubCategory.findAll().then(function(subCategories) {
			res.render('subCategory', { titles, categories, subCategories });
			});




			/*category: function(req, res) {
		const category = req.params.category;
		db.Category.findOne({where: {
			name: ""}
		})
		.then(function(categories){
			res.render("category", { title, categories })
		}
	}*/

module.exports = categoryController;

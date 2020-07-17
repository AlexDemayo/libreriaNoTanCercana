// const jsonModel = require('../models/jsonModel');
// const bookModel = jsonModel('booksData');

const db = require('../database/models')

const categoryController = {
	root: function(req, res) {
		db.Product.findAll()
		.then(books => {
			res.render('books', {books})
		})
		.catch(error => {
			console.log(error)
		})
	},
	category: function(req, res) {
		const category = req.params.category;
		
		db.Product.findAll({
			include : [{association: "category"}]
		})
		.then(books => {
			res.render('category', {books, category})
		})
		.catch(error => {
			console.log(error)
		})
	},
	subCategory: function(req, res) {
		const category = req.params.category;
		const subCategory = req.params.subCategory; //por qué necesito estas variables?

		db.Product.findAll({
			include: [{association: "subCategory"}]
		})
		.then(books => {
			res.render('subCategory', { category, subCategory, books });
		})
		.catch(error => {
			console.log(error)
		})

		// const books = bookModel.filterBySomething((book) => book.subCategory == subCategory);
		// return res.render('subCategory', { category, subCategory, books });
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

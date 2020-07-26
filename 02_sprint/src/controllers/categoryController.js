// const jsonModel = require('../models/jsonModel');
// const bookModel = jsonModel('booksData');

const db = require('../database/models')

const categoryController = {
	root: function(req, res) {
		db.Product.findAll()
		.then(books => {
			return res.render('allCategories', {books})
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
			return res.render('category', {books, category})
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
			return res.render('subCategory', { category, subCategory, books });
		})
		.catch(error => {
			console.log(error)
		})
	}
};






	

module.exports = categoryController;

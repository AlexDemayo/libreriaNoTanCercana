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
		let category = req.params.category;
		
		for(let i = 0; i < category.length; i++){
			category = category.replace('+',' ')
		}
		
		// let allCategories = db.Category.findAll();
		let arte = db.Product.findAll({where: {categoryId : 1}});
		let poesia = db.Product.findAll({where: {categoryId : 2}});
		let cronica = db.Product.findAll({where: {categoryId : 3}});
		let ensayo = db.Product.findAll({where: {categoryId : 4}});
		let infantilYJuvenil = db.Product.findAll({where: {categoryId : 5}});
		let narrativa = db.Product.findAll({where: {categoryId : 6}});
		let novGraficasYComics = db.Product.findAll({where: {categoryId : 7}});
		
		
		Promise.all([category, arte, cronica, ensayo, infantilYJuvenil, narrativa, novGraficasYComics, poesia])
		.then(([category, arte, cronica, ensayo, infantilYJuvenil, narrativa, novGraficasYComics, poesia]) => {
			
			return res.render('category', {category, arte, cronica, ensayo, infantilYJuvenil, narrativa, novGraficasYComics, poesia})
		})
		.catch(error => {
			console.log(error)
		})
		
	},
	subCategory: function(req, res) {
		let categoryUrl = req.params.category;
		let subCategoryUrl = req.params.subCategory; 
		let category = categoryUrl;
		let subCategory = subCategoryUrl;
		
		for(let i = 0; i < category.length; i++){
			category = category.replace('+',' ')
		}
		
		for(let i = 0; i < subCategoryUrl.length; i++){
			subCategory = subCategory.replace('+',' ')
		}
		
		
		let historiaDelArte = db.Product.findAll({where: {subCategoryId : 1}}); 
		let musica = db.Product.findAll({where: {subCategoryId : 2}});
		let cineYVideo = db.Product.findAll({where: {subCategoryId : 3}}); 
		let fotografia = db.Product.findAll({where: {subCategoryId : 4}});
		let infantil = db.Product.findAll({where: {subCategoryId : 5}});
		let juvenil = db.Product.findAll({where: {subCategoryId : 6}});
		let novelas = db.Product.findAll({where: {subCategoryId : 7}}); 
		let clasicos = db.Product.findAll({where: {subCategoryId : 8}}); 
		let cienciaFiccion = db.Product.findAll({where: {subCategoryId : 9}});
		let terror = db.Product.findAll({where: {subCategoryId : 10}}); 
		let policiales = db.Product.findAll({where: {subCategoryId : 11}}) ;
		let cuentosORelatos = db.Product.findAll({where: {subCategoryId : 12}});
		let comics = db.Product.findAll({where: {subCategoryId : 13}});
		let novelasGraficas  = db.Product.findAll({where: {subCategoryId : 14}});
		
		
		Promise.all([category, subCategory, categoryUrl, subCategoryUrl, historiaDelArte, musica, cineYVideo, fotografia, infantil, juvenil, novelas, clasicos, cienciaFiccion, terror, policiales, cuentosORelatos, comics, novelasGraficas])
		.then(([category, subCategory, categoryUrl, subCategoryUrl, historiaDelArte, musica, cineYVideo, fotografia, infantil, juvenil, novelas, clasicos, cienciaFiccion, terror, policiales, cuentosORelatos, comics, novelasGraficas]) => {
			return res.render('subCategory', {category, subCategory, categoryUrl, subCategoryUrl, historiaDelArte, musica, cineYVideo, fotografia, infantil, juvenil, novelas, clasicos, cienciaFiccion, terror, policiales, cuentosORelatos, comics, novelasGraficas})
		})
		.catch(error => {
			console.log(error)
		})
		
	},
	recommended: function(req,res){
		//poner en 0 a todas primero
		db.Category.update({recommended:0}, {where: {recommended:1}})
		.then(()=>{
			// Aca sigue el codigo
			let idRecibidos = req.body.category;
			return db.Category.update({recommended:1}, {where: {id:idRecibidos}});
		})
		.then(()=> res.redirect("/"))
		.catch(error => console.log(error))

	},
	
};








module.exports = categoryController;

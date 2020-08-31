const db = require('../../database/models')

const categoryController = {
/*
    category: function(req, res) {
		let category = req.params.category;

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

			res.send('category', {category, arte, cronica, ensayo, infantilYJuvenil, narrativa, novGraficasYComics, poesia})
		})
		.catch(error => {
			console.log(error)
		})

    },
*/
	list: function(req, res) {
		db.Product.findAll()
		.then(function(products) {
            let respuesta = {
                meta: {
                    url: "api/category",
                    status: 200,
                    total: products.length
                }, 
                data: products
                
            }
            
            res.json(respuesta);
           
		})
		.catch(error => {
			console.log(error)
		})
	}
	
};






	

module.exports = categoryController;

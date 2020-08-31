const db = require('../../database/models')

const categoryController = {

	subCategory: function(req, res) {
		
		db.SubCategory.findAll({where: {categoryId: req.params.id}})
		.then(subCategories => {
			let respuesta = {
                meta: {
                    url: "api/category/" + req.params.id,
                    status: 200,
                    total: subCategories.length
                }, 
                data: subCategories.length > 0 ? subCategories : null
                
            }
            
            res.json(respuesta);
           
		})
		.catch(error => {
			console.log(error)
		})

	}
	
};






	

module.exports = categoryController;

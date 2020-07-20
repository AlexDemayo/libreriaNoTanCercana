const db = require('../database/models')


module.exports = {
    detail : function(req,res){
        db.Product.findByPk(req.params.id, {
            include: [{association: 'category'}, {association: 'subCategory'}]
        })
        .then(book => {
           return res.render('detail', {book});
        })
        .catch(error => {
			console.log(error)
		})
    },
    createBook: function(req,res){
           
        let publishers = db.Publisher.findAll();
        
        let categories = db.Category.findAll();
        
        let subCategories = db.SubCategory.findAll();

        Promise.all([publishers, categories, subCategories])
            .then(([publishers, categories, subCategories]) => {

                return res.render('createBook', {publishers, categories, subCategories})
            })

        
    }
}
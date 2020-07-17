// const jsonModel = require('../models/jsonModel');
// const bookModel = jsonModel('booksData')

const db = require('../database/models')


module.exports = {
    detail : function(req,res){
        db.Product.findByPk(req.params.id, {
            include: [{association: 'category'}, {association: 'subCategory'}]
        })
        .then(book => {
            res.render('detail', {book:book})
        })
        .catch(error => {
			console.log(error)
		})
    }
}
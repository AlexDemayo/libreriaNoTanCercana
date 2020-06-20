const jsonModel = require('../models/jsonModel');
const bookModel = jsonModel('libreria')


module.exports = {
    detail : function(req,res){
        let book = bookModel.findById(req.params.id)
        return res.render('detail', {book})
       
    }
}
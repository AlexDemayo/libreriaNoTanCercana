const jsonModel = require('../models/jsonModel');
const bookModel = jsonModel('booksData');

const homeController = {
    
        root : function(req,res){
            const books = bookModel.leerJson();
            res.render('index', {books})
        }  
}


module.exports = homeController
const jsonModel = require('../models/jsonModel');
const bookModel = jsonModel('booksData')



const booksController = {
    root : function(req,res){
        const books = bookModel.leerJson();
        res.render('books', {books})
    },
    category: function(req,res){
        const books = bookModel.filterBySomething(book => book.category == req.params.category)
        res.render('category', {books})
    }
}


module.exports = booksController
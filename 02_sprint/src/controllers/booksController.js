const jsonModel = require('../models/jsonModel');
const bookModel = jsonModel('booksData')



const booksController = {
    root : function(req,res){
        const books = bookModel.leerJson();
        res.render('books', {books})
    },
    category: function(req,res){
        const category = req.params.category;
        const books = bookModel.filterBySomething(book => book.category == category)
        res.render('category', {books, category})
    },
    subCategory : function(req,res){
        const category = req.params.category
        const subCategory = req.params.subCategory;
        const books = bookModel.filterBySomething(book => book.subCategory == subCategory)
        res.render('subCategory', {category, subCategory, books})

    },
    detail : function(req,res){
        const book = bookModel.findById(req.params.id);
        res.render('detail', {book, category, subCategory})
    }

}


module.exports = booksController
const db = require('../database/models')
const { validationResult } = require('express-validator');


module.exports = {
    detail : function(req,res){
        let book = db.Product.findByPk(req.params.id, {
            include: ['category', 'subCategory', 'publisher']
        })

        let categories = db.Category.findAll({where: {recommended: 1}});

        Promise.all([book,categories])
        .then(([book, categories])=> {
            let categoryUrl = book.category.name;

            for(let i = 0; i < categoryUrl.length; i++){
                categoryUrl = categoryUrl.replace(' ','+');
                
            }
            if (book.subCategory != null){
   
            let subCategoryUrl = book.subCategory.name;

            for(let i = 0; i < subCategoryUrl.length; i++){
                subCategoryUrl = subCategoryUrl.replace(' ','+');
            }

            return res.render('detail', {book, categories, categoryUrl, subCategoryUrl});


            } else{

             return res.render('detail', {book, categories, categoryUrl});

             
            }

           
        })
        .catch(error => {
			console.log(error)
		})
    },

    createForm: function(req,res){
           
        let publishers = db.Publisher.findAll();
        
        let categories = db.Category.findAll();
        
        let subCategories = db.SubCategory.findAll();

        Promise.all([publishers, categories, subCategories])
            .then(([publishers, categories, subCategories]) => {

                return res.render('createBook', {publishers, categories, subCategories})
            })
    },

    createBook: function(req,res){
        
        const errors = validationResult(req);

		if (errors.isEmpty()){
            db.Product.create({
                title: req.body.title ,
                author: req.body.author,
                publisherId: req.body.publisher,
                datePublished: req.body.datePublished,
                categoryId: req.body.category, 
                subCategoryId: req.body.subCategory ? req.body.subCategory : null,
                pages: req.body.pages,
                cover: req.body.cover, 
                isbn: req.body.isbn, 
                price: req.body.price, 
                description: req.body.description,
                image: req.file.filename
            });
    
            res.redirect('/category')

        } else {

            let publishers = db.Publisher.findAll();
            
            let categories = db.Category.findAll();
            
            let subCategories = db.SubCategory.findAll();

            Promise.all([publishers, categories, subCategories])
                .then(([publishers, categories, subCategories]) => {

                    return res.render('createBook', { errors: errors.mapped(), old: req.body, publishers, categories, subCategories });
                })        
        }
    },

    updateForm: function(req,res){

        let book = db.Product.findByPk(req.params.id)

        let publishers = db.Publisher.findAll();
        
        let categories = db.Category.findAll();
        
        let subCategories = db.SubCategory.findAll();

        Promise.all([book, publishers, categories, subCategories])
            .then(([book, publishers, categories, subCategories]) => {

                return res.render('editBook', {book, publishers, categories, subCategories})
            })
    },

    updateBook: function(req,res){

        const errors = validationResult(req);

		if (errors.isEmpty()){
            db.Product.findByPk(req.params.id)
            .then(product => {
              return db.Product.update({
                    title: req.body.title ,
                    author: req.body.author,
                    publisherId: req.body.publisher,
                    datePublished: req.body.datePublished,
                    categoryId: req.body.category, 
                    subCategoryId: req.body.subCategory,
                    pages: req.body.pages,
                    cover: req.body.cover, 
                    isbn: req.body.isbn, 
                    price: req.body.price, 
                    description: req.body.description,
                    image: req.file ? req.file.filename : product.image
                },{
                    where:{
                        id : req.params.id
                    }
                }); 
            })
            .then(() => {
                return res.redirect('/books/' + req.params.id)
            })
            .catch(err => console.log(err))

        } else {

            let book = db.Product.findByPk(req.params.id)

            let publishers = db.Publisher.findAll();
            
            let categories = db.Category.findAll();
            
            let subCategories = db.SubCategory.findAll();
    
            Promise.all([book, publishers, categories, subCategories])
                .then(([book, publishers, categories, subCategories]) => {
    
                    return res.render('editBook', {errors: errors.mapped(), old: req.body, book, publishers, categories, subCategories})
                })
                .catch(err => console.log(err))
        }

    },

    deleteBook: function(req,res){
        db.Product.destroy({
            where: {
                id: req.params.id
            }
        })
        return res.redirect('/category')
    }
}
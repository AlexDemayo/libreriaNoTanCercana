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

        
        db.Product.create({
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
            image: req.file.filename
        });

        res.redirect('/category')
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

        console.log(req.file)

        db.Product.update({
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
            image: req.file.filename
        },{
            where:{
                id : req.params.id
            }
        });
        return res.redirect('/books/' + req.params.id)
    }
}
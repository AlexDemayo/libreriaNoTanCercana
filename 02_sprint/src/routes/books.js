const express = require('express');
const router = express.Router();
const booksController = require('../controllers/booksController');
const multer = require('multer');
const path = require('path');
const admin = require('../middleWares/admin');
const bookValidator = require('../middleWares/bookValidator')



var storage = multer.diskStorage({
	destination: function(req, file, cb) {
		cb(null, path.resolve(__dirname, '../../public/images/books'));
	},
	filename: function(req, file, cb) {
		cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
	}
});

var upload = multer({
	storage: storage,

	fileFilter: (req, file, cb) => {
		const acceptedExtensions = [ '.jpg', '.png', '.jpeg' ];

		const ext = path.extname(file.originalname);

		if (!acceptedExtensions.includes(ext)) {
			req.file = file;
		}

		cb(null, acceptedExtensions.includes(ext));
	}
});


/* Crear libro */

router.get('/create', admin, booksController.createForm);
router.post('/create', upload.single('image'), bookValidator.create, booksController.createBook);


/* Editar libro */

router.get('/edit/:id', admin, booksController.updateForm);
router.post('/edit/:id', upload.single('image'), bookValidator.update, booksController.updateBook);


/* Editar libro */

router.post('/delete/:id', booksController.deleteBook)


/* Detalle producto */
router.get('/:id', booksController.detail);

module.exports = router;

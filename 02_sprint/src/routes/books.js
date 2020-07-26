const express = require('express');
const router = express.Router();
const booksController = require('../controllers/booksController');
const multer = require('multer');
const path = require('path')

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

		cb(null, acceptedExtensions.includes(ext));
	}
});


/* Crear libro */

router.get('/create', booksController.createForm);
router.post('/create', upload.single('image') ,booksController.createBook);


/* Editar libro */

router.get('/edit/:id', booksController.updateForm);
router.post('/edit/:id', booksController.updateBook);


/* Detalle producto */
router.get('/:id', booksController.detail);

module.exports = router;

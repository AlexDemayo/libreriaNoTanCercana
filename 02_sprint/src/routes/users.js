const express = require('express');
const router = express.Router();
const usersController = require('../controllers/usersController');
const { body } = require('express-validator');
const multer = require('multer');
const path = require('path');
const validator = require('../middleWares/validator');
const loggedIn = require('../middleWares/loggedIn')

var storage = multer.diskStorage({
	destination: function(req, file, cb) {
		cb(null, path.resolve(__dirname, '../../public/images/users'));
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

router.get('/login-register', loggedIn.logged ,usersController.logYreg);
router.get('/user', loggedIn.noLogged, usersController.user);
router.get('/cart', loggedIn.noLogged, usersController.cart);

router.post('/register', upload.single('image'), validator.register, usersController.register);
router.post('/login', validator.login, usersController.login);
router.post('/logout', usersController.logout);
router.post('/user', upload.single('image'), validator.update, usersController.update);
router.post('/deleteUser/:id', usersController.deleteUser);
router.post('/cart', usersController.addToCart);
router.post('/cart/delete', usersController.deleteFromCart);
router.post('/shop', usersController.shop);


module.exports = router;

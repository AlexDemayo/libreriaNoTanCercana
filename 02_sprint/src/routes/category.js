const express = require('express');
const router = express.Router();
const categoryController = require('../controllers/categoryController')

/* GET users listing. */
router.get('/', categoryController.root);
router.get('/:category', categoryController.category);
router.get('/:category/:subCategory', categoryController.subCategory);
router.post('/recommended', categoryController.recommended);


module.exports = router;

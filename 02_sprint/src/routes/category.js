const express = require('express');
const router = express.Router();
const categoryController = require('../controllers/categoryController')

/* GET users listing. */
router.get('/', categoryController.root);
router.get('/:category', categoryController.category)
router.get('/:category/:subCategory', categoryController.subCategory)


module.exports = router;

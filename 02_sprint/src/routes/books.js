const express = require('express');
const router = express.Router();
const booksController = require('../controllers/booksController')

/* GET users listing. */
router.get('/', booksController.root);
router.get('/:category', booksController.category)
router.get('/:category/:subCategory', booksController.subCategory)
router.get('/:id', booksController.detail)


module.exports = router;

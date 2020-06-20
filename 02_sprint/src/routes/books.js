const express = require('express');
const router = express.Router();
const bookController = require('../controllers/booksController')

/* GET users listing. */
router.get('/:id', bookController.detail);



module.exports = router;
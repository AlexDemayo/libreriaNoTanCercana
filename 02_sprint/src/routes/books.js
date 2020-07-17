const express = require('express');
const router = express.Router();
const booksController = require('../controllers/booksController')

/* GET users listing. */
router.get('/:id', booksController.detail);



module.exports = router;
const express = require('express');
const router = express.Router();
const booksController = require('../controllers/booksController');

/* GET users listing. */

router.get('/create',booksController.createBook);

router.get('/:id', booksController.detail);

// router.post('/store', boo)

module.exports = router;
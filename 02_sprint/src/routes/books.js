const express = require('express');
const router = express.Router();
const booksController = require('../controllers/booksController');
const multer = require('multer');

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, '../../public/images')
    },
    filename: function (req, file, cb) {
      cb(null, file.fieldname + '-' + Date.now())
    }
  })
   
  var upload = multer({ storage: storage })

/* GET users listing. */

router.get('/create', booksController.createBook);

router.get('/:id', booksController.detail);



module.exports = router;
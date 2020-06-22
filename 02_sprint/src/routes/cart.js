const express = require('express');
const router = express.Router();
const cartController = require('../controllers/cartController')

/* GET users listing. */
router.get('/', cartController.index);



module.exports = router;
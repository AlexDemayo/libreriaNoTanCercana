var express = require('express');
var router = express.Router();
const logyregController = require('../controllers/logyregController')

router.get('/', logyregController.root);

module.exports = router;

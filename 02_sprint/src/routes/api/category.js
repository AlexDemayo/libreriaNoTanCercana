const express = require('express');
const router = express.Router();
const categoryAPIController = require("../../controllers/api/categoryController");


router.get("/", categoryAPIController.list);



module.exports = router;
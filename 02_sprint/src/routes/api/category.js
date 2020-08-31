const express = require('express');
const router = express.Router();
const categoryAPIController = require("../../controllers/api/categoryController");


router.get("/:id", categoryAPIController.subCategory);




module.exports = router;
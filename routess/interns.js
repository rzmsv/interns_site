const express = require("express");
const getInterns = require("../controler/get")
const router = express.Router();

router.get("/",getInterns.interns)

module.exports = router;
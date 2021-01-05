const express = require("express");
const getHome = require("../controler/get")
const router = express.Router();

router.get("/",getHome.home)
module.exports=router;
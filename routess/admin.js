const express = require("express");
const getAdmin = require("../controler/get")
const post = require("../controler/post")
const router = express.Router();

router.get("/admin",getAdmin.admin)
router.post("/admin",post.postAdmin)
router.post("/skills",post.postSkills)
router.post("/experience",post.postExperiences)
router.post("/workpics",post.postWorkPics)
module.exports = router
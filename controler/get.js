const Users = require("../db/dbConnections")
exports.home = (req,res,next)=>{
     try {
          var interns = Users.showInterns()
          console.log(interns)
          res.render("home")
     } catch (error) {
          next()
     }
}
exports.admin = (req,res,next)=>{
     try {
          res.render("admin")
     } catch (error) {
          next()
     }
}
exports.interns = (req,res,next)=>{
     try {
          res.render("details")
     } catch (error) {
          next()
     }
}
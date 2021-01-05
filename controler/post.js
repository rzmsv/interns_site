const Users = require("../db/dbConnections")
exports.postAdmin = (req,res,next)=>{
     const User = {
          name : req.body.name,
          lastname : req.body.lastname,
          birthday : req.body.birthday,
          tell : req.body.tell,
          email : req.body.email,
          password : req.body.password,
          pic : req.body.pic,
          trendency : req.body.trendency,
          admin : req.body.admin,
          description : req.body.description,
          education : req.body.education,
          grade : req.body.grade,
          instructor : req.body.instructor,
          mentor : req.body.mentor
     }
     
     
     const users = new Users(User)
     
     async function addUser (){
       try {
            await users.saveInterns()
            res.redirect("/")
       } catch (error) {
          res.redirect("/admin")
       }   
     }
     addUser()
}
exports.postSkills = (req,res,next)=>{
     const Skills = {
          user_skill : req.body.user_skill,
          user_id : req.body.user_id
     }
     const skills = new Users(Skills)
     async function addSkill (){
          try {
               await skills.saveSkills()
               res.redirect("/")
          } catch (error) {
               res.redirect("/admin")
          }
     }
     addSkill()
}
exports.postExperiences = (req,res,next)=>{
     const Experience = {
          user_experience : req.body.user_experience,
          user_id : req.body.user_id
     }
     const experience = new Users(Experience)
     async function addExperience (){
          try {
               await experience.saveExperience()
               res.redirect("/")
          } catch (error) {
               res.redirect("/admin")
          }
     }
     addExperience()
}
exports.postWorkPics = (req,res,next)=>{
     const Workpics = {
          pics : req.body.pics,
          user_id : req.body.user_id
     }
     const workpics = new Users(Workpics)
     async function addExperience (){
          try {
               await workpics.saveExperience()
               res.redirect("/")
          } catch (error) {
               res.redirect("/admin")
          }
     }
     addExperience()
}
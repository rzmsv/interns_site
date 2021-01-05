const mysql = require('mysql2');
 
// create the connection to database
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'laitec',
  database: 'interns',
  password : "Reza1989@"
});
module.exports = class Users{
  constructor(user){
    this.name = user.name;
    this.lastname = user.lastname;
    this.birthday = user.birthday;
    this.tell = user.tell;
    this.email = user.email;
    this.password = user.password;
    this.pic = user.pic;
    this.trendency = user.trendency;
    this.admin = user.admin;
    this.description = user.description;
    this.education = user.education;
    this.grade = user.grade;
    this.instructor = user.instructor;
    this.mentor = user.mentor;
    this.user_skill = user.user_skill;
    this.user_id = user.user_id;
    this.user_experience = user.user_experience
    this.pics = user.pics

  }

  saveInterns (){
    let person = {
      name:this.name,
      lastname:this.lastname,
      birthday:this.birthday,
      tell:this.tell,
      email:this.email,
      password:this.password,
      pic:this.pic,
      trendency:this.trendency,
      admin:this.admin,
      description:this.description,
      education:this.education,
      grade:this.grade,
      instructor:this.instructor,
      mentor:this.mentor,
    }
    return new Promise((resolve,reject)=>{
      connection.query("INSERT INTO interns SET ?",person,(err,res)=>{
        if(err){
          console.log("can not save!\n",err)
          reject("no")
        }
        else if (res){
        console.log("Add to database.\n",res)
        resolve(res)
        }
      })
    })
  }

  saveSkills (){
    let skills = {
      user_skill : this.user_skill,
      user_id : this.user_id
    }
    console.log(skills)
    return new Promise((resolve,reject)=>{
      connection.query("INSERT INTO skills SET ?",skills,(err,res)=>{
        if(err){
          console.log("can not save!\n",err)
          reject("no")
        }
        else if (res){
        console.log("Add to database.\n",res)
        resolve(res)
        }
      })
    })
  }

  saveExperience (){
    let experience = {
      user_experience : this.user_experience,
      user_id : this.user_id
    }
    return new Promise((resolve,reject)=>{
      connection.query("INSERT INTO experiences SET ?",experience,(err,res)=>{
        if(err){
          console.log("can not save!\n",err)
          reject("no")
        }
        else if (res){
        console.log("Add to database.\n",res)
        resolve(res)
        }
      })
    })
  }
  saveExperience (){
    let workPics = {
      pics : this.pics,
      user_id : this.user_id
    }
    return new Promise((resolve,reject)=>{
      connection.query("INSERT INTO workPics SET ?",workPics,(err,res)=>{
        if(err){
          console.log("can not save!\n",err)
          reject("no")
        }
        else if (res){
        console.log("Add to database.\n",res)
        resolve(res)
        }
      })
    })
  }

  static showInterns (){
    var giveUser = "SELECT * FROM interns;"
    connection.query(giveUser,(err,res)=>{
      if (res){
        return res
      }
      return err
    })
  }
}
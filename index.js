const express = require("express");
// const db = require('./db/dbConnections')
const http = require("http");
const path = require("path");
const bodyParser = require("body-parser");
const homePage = require("./routess/home");
const adminPage = require("./routess/admin");
const internsPage = require("./routess/interns");
const errorPages = require("./routess/error")

const app = express();
const server = http.createServer(app);
// template set
app.set("view engine","pug");
app.set("views","views")
//midlwares
app.use(express.static(path.join(__dirname , "./public")));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
//routes
app.use("/",homePage);
app.use(adminPage);
app.use("/intern/:id",internsPage);

// error pages
app.use(errorPages.get404)

const port = process.env.PORT || 3000;
server.listen(port,()=>{
     console.log(`Connect to port ${port}`)
})
const mysql = require('mysql');

exports.databaseconnect = mysql.createConnection({
    user :"sql6420380",
    host :"sql6.freemysqlhosting.net",
    password :"iHdXT98rcR",
    database: "sql6420380",
   insecureAuth : true
 
 },(err) =>{
     console.log(err);
 })
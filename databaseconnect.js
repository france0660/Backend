const mysql = require('mysql');

exports.databaseconnect = mysql.createConnection({
    user :"root",
    host :"localhost",
    password :"frlovta0",
    database: "jjstore",
   insecureAuth : true,
   connectionLimit: 50,
   queueLimit: 0,
   waitForConnection: true
 
 },(err) =>{
     console.log(err);
 })
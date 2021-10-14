
const connect = require('../../databaseconnect');
const db = connect.databaseconnect;

exports.getListUser = async function(req, res) {
    try {
        console.log(req.query);
        sql = `SELECT * FROM jjstore.user`;  
        db.query(sql,(err,result) => {
            if(err){
                console.log(err);
            }else{
                res.send(result);
            }
        })
    } catch (err) {
        ret.matchError(err, res);
    }
};


exports.createUser = async function(req, res) {
    try {
        console.log("body",req.body);
        const { v4: uuidv4 } = require('uuid');
        sql = `INSERT INTO jjstore.user (user_id,user_name,password,first_name,last_name,nickname)
        VALUES ('${uuidv4() }', '${req.body.user_name}','${req.body.password}','${req.body.firstname}','${req.body.lastname}','${req.body.nickname}');`;  
        db.query(sql,(err,result) => {
            if(err){
                console.log(err);
            }else{
                res.send(result);
            }
        })
    } catch (err) {
        ret.matchError(err, res);
    }
};


exports.logintUser = async function(req, res) {
    try {
        console.log(req.query);
        sql = `SELECT * FROM jjstore.user where Password='${req.query.password || null}' and User_Name='${req.query.user_name || null}'`;  
        db.query(sql,(err,result) => {
            if(err){
                console.log(err);
            }else{
                res.send(result);
            }
        })
    } catch (err) {
        ret.matchError(err, res);
    }
};
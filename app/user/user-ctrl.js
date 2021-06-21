
const connect = require('../../databaseconnect');
const db = connect.databaseconnect;

exports.getListUser = async function(req, res) {
    try {
        console.log(req.query);
        sql = `SELECT * FROM sql6420380.User`;  
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
        sql = `SELECT * FROM sql6420380.User where Password='${req.query.Password || null}' and User_Name='${req.query.User_Name || null}'`;  
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
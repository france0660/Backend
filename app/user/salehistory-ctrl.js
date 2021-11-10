const connect = require('../../databaseconnect');
const db = connect.databaseconnect;

exports.getProductshowinhistory = async function(req, res) {
    try {
        console.log(req.query);
        sql = `SELECT * FROM jjstore.viewuserinsale WHERE saleDate >= '${req.query.start_date}' AND saleDate <= '${req.query.end_date} 23:59:59'`;  
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
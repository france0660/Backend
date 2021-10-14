const connect = require('../../databaseconnect');
const db = connect.databaseconnect;

exports.saleProduct = async function(req, res) {
    try {
        console.log("body",req.body);
        const { v4: uuidv4 } = require('uuid');
        sql = `INSERT INTO jjstore.sales (sale_id,buyer_name,sale_name,sale_date,productname,quantity,priceperpiece,sale_status)
        VALUES ('${req.body.sale_id}', '${req.body.buyer_name}','${req.body.sale_name}','${req.body.sale_date}','${req.body.productname}','${req.body.quantity}','${req.body.priceperpiece}','${req.body.sale_status}');`;  
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

exports.getListsaleProduct = async function(req, res) {
    try {
        console.log(req.query);
        sql = `SELECT * FROM jjstore.sales where sale_status = '1'`;
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
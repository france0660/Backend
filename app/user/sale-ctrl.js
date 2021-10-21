const connect = require('../../databaseconnect');
const db = connect.databaseconnect;

exports.saleproduct = async function(req, res) {
    try {
        console.log("body",req.body);
        // const { v4: uuidv4 } = require('uuid');
        sql = `INSERT INTO jjstore.saleproduct (sale_id,sale_employee,sale_productname,sale_quantity,sale_price)
        VALUES ('${req.body.saleproduct_id}', '${req.body.saleproduct_employee}','${req.body.saleproduct_name}','${req.body.saleproduct_quantity}','${req.body.saleproduct_price}');`;  
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

exports.getListallproductforsale = async function(req, res) {
    try {
        console.log(req.query);
        sql = `SELECT * FROM jjstore.allproduct where product_barcode = '${req.query.barcode}'`;
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

exports.getListallproductforshow = async function(req, res) {
    try {
        console.log(req.query);
        sql = `SELECT * FROM jjstore.saleproduct`;
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
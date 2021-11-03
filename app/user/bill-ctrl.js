const connect = require('../../databaseconnect');
const db = connect.databaseconnect;

exports.createBill = async function(req, res) {
    try {
        console.log("body",req.body);
        const { v4: uuidv4 } = require('uuid');
        sql = `INSERT INTO jjstore.bill (bill_id,bill_no,bill_price)
        VALUES ('${req.body.bill_id}', '${uuidv4() }','${req.body.bill_price}');`;  
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



exports.getListallBill = async function(req, res) {
    try {
        console.log(req.query);
        sql = `SELECT * FROM jjstore.bill  where bill_price='0' `;
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


exports.addbillprice = async function(req, res) {
    try {
        const {bill_id,bill_price}=req.body;
        console.log("addbill bill_id =" + bill_id.saleproduct_bill_id);
        console.log("addbill bill price = " + bill_price);
        console.log(req.query);
        sql = `UPDATE bill
                SET bill_price = '${bill_price}'
                WHERE bill_id = '${bill_id.saleproduct_bill_id}';`;
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
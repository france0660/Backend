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

exports.getHistorysaleforEdit = async function(req, res) {
    try {
        console.log(req.query);
        sql = `SELECT * FROM jjstore.viewuserinsale where saleId='${req.query.senditem}'`;
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


exports.submitEditHistorysale = async function(req, res) {
    try {
        const {Allofsubmitedithistorybill}=req.body;
        // console.log("addbill bill_id =" + bill_id.saleproduct_bill_id);
        // console.log("addbill bill price = " + bill_price);
        // console.log(req.query);
        sql = `UPDATE saleproduct
                SET sale_productname ='${Allofsubmitedithistorybill.saleProductname}'
                WHERE sale_id = '${Allofsubmitedithistorybill.saleId}';`;
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
const connect = require('../../databaseconnect');
const db = connect.databaseconnect;

exports.addproduct = async function(req, res) {
    try {
        console.log("body",req.body);
        const { v4: uuidv4 } = require('uuid');
        sql = `INSERT INTO jjstore.allproduct (product_id,product_barcode,product_name,product_quantity,product_price)
        VALUES ('${req.body.product_id}', '${req.body.product_barcode}','${req.body.product_name}','${req.body.product_quantity}','${req.body.product_price}');`;  
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

exports.getListallProduct = async function(req, res) {
    try {
        console.log(req.query);
        sql = `SELECT * FROM jjstore.allproduct`;
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

// exports.getListcodesale = async function(req, res) {
//     try {
//         console.log(req.query);
//         sql = `SELECT * FROM jjstore.code where barcode = '${req.query.barcode}'`;
//         db.query(sql,(err,result) => {
//             if(err){
//                 console.log(err);
//             }else{
//                 res.send(result);
//             }
//         })
//     } catch (err) {
//         ret.matchError(err, res);
//     }
// };
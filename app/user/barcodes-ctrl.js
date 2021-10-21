const connect = require('../../databaseconnect');
const db = connect.databaseconnect;

exports.barcodescanDetail = async function(req, res) {
    try {
        console.log(req.query);
        sql = `SELECT * FROM jjstore.barcodes where barcode_pin='${req.query.barcode}';`;  
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
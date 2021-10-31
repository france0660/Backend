const connect = require('../../databaseconnect');
const db = connect.databaseconnect;

// exports.saleproduct = async function(req, res) {
//     try {
//         console.log("body",req.body);
//         // const { v4: uuidv4 } = require('uuid');
//         sql = `INSERT INTO jjstore.saleproduct (sale_id,sale_employee,sale_productname,sale_quantity,sale_price)
//         VALUES ('${req.body.saleproduct_id}', '${req.body.saleproduct_employee}','${req.body.saleproduct_name}','${req.body.saleproduct_quantity}','${req.body.saleproduct_price}');`;  
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
exports.getListallproductforsale = async function(req, res) {
    try {
        console.log(req.query);
        sql = `SELECT * FROM jjstore.allproduct where product_barcode ='${req.query.barcode}'`;
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



exports.saleproduct = async function(req, res, next) {
 
    try {
        const {listProductForsale,
            getdetailbarcodeform}=req.body;
            console.log(getdetailbarcodeform);
        const _listProductForsale = listProductForsale || [];
        for (let i = 0; i < _listProductForsale.length; i++) {
            const e = _listProductForsale[i];
            console.log(e);
            sql = `INSERT INTO jjstore.saleproduct (sale_id,sale_employee,sale_productname,sale_quantity,sale_price) VALUES (${e.sale_id||null},${getdetailbarcodeform.saleproduct_employee_id||null},'${e.product_name || null}',${e.product_quantity||null},${e.product_price||null})`;
            const _r = await db.query(sql, {
                // transaction: t
            });//จะเก้บค่าอะไรบ้าง ชื่อ จำนวน ราคา แล้วก็ชื่อครขาย
            // validateResult.query(_r);
        }

        // if (t) await t.commit();
        res.json('success');
    } catch (e) {
        // if (t) await t.rollback();
        next(e);
    }
}













// exports.saleproduct = async function(req, res, next) {
//     try {
//         const {groupComplainant}=req.body;
//         const _groupComplainant = groupComplainant || [];
//         for (let i = 0; i < _groupComplainant.length; i++) {
//             const e = _groupComplainant[i];
//             const _r = await db.query(`INSERT INTO jjstore.saleproduct(sale_id,sale_employee,sale_productname,sale_quantity,sale_price)(
//                 :'${req.body.saleproduct_id}',
//                 :'${req.body.saleproduct_employee}',
//                 :'${req.body.saleproduct_name}',
//                 :'${req.body.saleproduct_quantity}',
//                 :'${req.body.saleproduct_price}'
//             )`, {
//                 replacements: {
//                     sale_id: e.id || null,
//                     sale_employee: e.employee || null,
//                     sale_productname: e.productname || null,
//                     sale_quantity: e.quantity || null,
//                     sale_price: e.price || null
//                     // p_age: e.age || null,
//                     // p_nationality: e.nationality || null,
//                     // p_gender: e.gender || null,
//                     // p_phone_number: e.phoneNumber || null,
//                     // p_submission_control_id: submissionControlRequestsID || null,
//                     // p_submission_control_type_id: 1 || null,
//                     // p_create_by: null,
//                 },
//                 transaction: t
//             });
//             validateResult.query(_r);
//         }   

//         if (t) await t.commit();
//         res.json(result[0]);
//     } catch (e) {
//         if (t) await t.rollback();
//         next(validateResult.error(e));
//     }
// };
























// async function  updateSubmissionControlRequest(req, res, next) {
 
//     try {
//         const {groupComplainant}=req.body;
//         const _groupComplainant = groupComplainant || [];
//         for (let i = 0; i < _groupComplainant.length; i++) {
//             const e = _groupComplainant[i];
//             const _r = await DB.query(`CALL spstd_api_submission_control_child_update(
//                 :p_id,
//                 :p_title,
//                 :p_first_name,
//                 :p_last_name,
//                 :p_citizen_id,
//                 :p_age,
//                 :p_nationality,
//                 :p_gender,
//                 :p_phone_number,
//                 :p_submission_control_id,
//                 :p_submission_control_type_id,
//                 :p_create_by
//             )`, {
//                 replacements: {
//                     p_id: e.id || null,
//                     p_title: e.title || null,
//                     p_first_name: e.firstName || null,
//                     p_last_name: e.lastName || null,
//                     p_citizen_id: e.citizenID || null,
//                     p_age: e.age || null,
//                     p_nationality: e.nationality || null,
//                     p_gender: e.gender || null,
//                     p_phone_number: e.phoneNumber || null,
//                     p_submission_control_id: submissionControlRequestsID || null,
//                     p_submission_control_type_id: 1 || null,
//                     p_create_by: null,
//                 },
//                 transaction: t
//             });
//             validateResult.query(_r);
//         }

//         if (t) await t.commit();
//         res.json(result[0]);
//     } catch (e) {
//         if (t) await t.rollback();
//         next(validateResult.error(e));
//     }
// }
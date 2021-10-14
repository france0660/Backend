const express = require('express');
const route = express.Router();
const app = express();

const mysql = require('mysql');
const cors = require('cors');
const userRouter = require('./app/user/user-route');
const saleRouter = require('./app/user/sale-router');

const PORT = process.env.PORT || 3001


app.use(cors());
app.use(express.json());
app.use("/api", userRouter );
app.use("/api", saleRouter );



const connect = require('./databaseconnect')
const db = connect.databaseconnect;


app.get('/',(req,res) => {
    res.json({result :"ok",data :[1,2,3,4,4]})
})

app.listen(PORT,()=>{
    console.log('Server Run',PORT);
    // connection.connect((err,result)=>{
    //     if(err){
    //         console.log(err);
    //     }else{
    //         res.send(result);
    //     }
    // })
})
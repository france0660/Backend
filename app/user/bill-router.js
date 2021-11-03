const express = require('express');
const route = express.Router();
const cntr = require('./bill-ctrl')

route.post('/addbillprice', cntr.addbillprice)

route.get('/getListallBill', cntr.getListallBill)

route.post('/createBill', cntr.createBill)
module.exports = route
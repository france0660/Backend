const express = require('express');
const route = express.Router();
const cntr = require('./allproduct-ctrl')

route.post('/addproduct', cntr.addproduct)

route.get('/getListallProduct', cntr.getListallProduct)

route.get('/getProductforEdit', cntr.getProductforEdit)

// route.get('/login', cntr.logintUser)

route.post('/submitEditstockproduct', cntr.submitEditstockproduct)
module.exports = route
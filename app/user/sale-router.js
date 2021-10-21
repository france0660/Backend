const express = require('express');
const route = express.Router();
const cntr = require('./sale-ctrl')

route.post('/saleproduct', cntr.saleproduct)

route.get('/getListallproductforsale', cntr.getListallproductforsale)

route.get('/getListallproductforshow', cntr.getListallproductforshow)
module.exports = route

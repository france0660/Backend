const express = require('express');
const route = express.Router();
const cntr = require('./sale-ctrl')

route.post('/saleProduct', cntr.saleProduct)

route.get('/getListsaleProduct', cntr.getListsaleProduct)

// route.get('/login', cntr.logintUser)

// route.post('/createUser', cntr.createUser)
module.exports = route
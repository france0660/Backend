const express = require('express');
const route = express.Router();
const cntr = require('./salehistory-ctrl')

route.get('/getProductshowinhistory', cntr.getProductshowinhistory)

// route.get('/login', cntr.logintUser)

// route.post('/createUser', cntr.createUser)
module.exports = route
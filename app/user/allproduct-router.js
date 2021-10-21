const express = require('express');
const route = express.Router();
const cntr = require('./allproduct-ctrl')

route.post('/addproduct', cntr.addproduct)

route.get('/getListallProduct', cntr.getListallProduct)

// route.get('/getListcodesale', cntr.getListcodesale)

// route.get('/login', cntr.logintUser)

// route.post('/createUser', cntr.createUser)
module.exports = route
const express = require('express');
const route = express.Router();
const cntr = require('./barcodes-ctrl')

route.get('/barcodescanDetail', cntr.barcodescanDetail)

// route.get('/login', cntr.logintUser)

// route.post('/createUser', cntr.createUser)
module.exports = route
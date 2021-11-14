const express = require('express');
const route = express.Router();
const cntr = require('./salehistory-ctrl')

route.get('/getProductshowinhistory', cntr.getProductshowinhistory)

route.get('/getHistorysaleforEdit', cntr.getHistorysaleforEdit)

route.post('/submitEditHistorysale', cntr.submitEditHistorysale)
module.exports = route
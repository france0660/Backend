const express = require('express');
const route = express.Router();
const cntr = require('./user-ctrl')

route.get('/listUser', cntr.getListUser)

route.get('/login', cntr.logintUser)

route.post('/createUser', cntr.createUser)
module.exports = route

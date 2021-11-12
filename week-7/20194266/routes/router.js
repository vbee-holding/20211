const express = require('express');
const route = express.Router()

const services = require('../services/render');
const controller = require('../controller/controller');


route.get('/', services.homeRoutes);


route.get('/addUser', services.addUser)

route.get('/updateUser', services.updateUser)
route.put('/api/users/:id', controller.updateUser);
module.exports = route

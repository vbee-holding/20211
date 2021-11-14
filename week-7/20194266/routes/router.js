const express = require('express');
const route = express.Router()

const services = require('../services/render');
const controller = require('../controller/controller');


route.get('/', services.homeRoutes);


route.get('/addUser', services.addUser)

route.get('/updateUser', services.updateUser)



route.post('/api/users', controller.createUser);
route.get('/api/users', controller.findUser);
route.put('/api/users/:id', controller.updateUser);
route.delete('/api/users/:id', controller.deleteUser);
route.get('/',controller.getAllUser);


module.exports = route
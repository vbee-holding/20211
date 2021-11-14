const express = require('express');
const route = express.Router()


const controller = require('../student');


route.post('/api/users', student.createUser);
route.get('/api/users', student.findUser);
route.put('/api/users/:id', student.updateUser);
route.delete('/api/users/:id', student.deleteUser);
route.get('/',student.getAllUser);


module.exports = route

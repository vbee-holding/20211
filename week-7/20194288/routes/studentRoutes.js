const express = require('express');
const studentController= require('../controller/studentController.js');
const router= express.Router();
router.get("/search",studentController.getStudentByID);
router.get('/',studentController.getAllStudent);
router.post('/add',studentController.addStudent);
router.delete('/delete',studentController.deleteStudent);
router.put('/update',studentController.updateStudent);
module.exports=router;
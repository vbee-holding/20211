const express= require('express');
const studentController= require('../controllers/studentController')

const router= express.Router();

router.get('/api/v1/student/',studentController.getAllStudent);
router.post('/api/v1/student/', studentController.addStudent);
router.get('/api/v1/student/:id',studentController.getStudentByID);
router.put('/api/v1/student/:id', studentController.updateStudent);
router.delete('/api/v1/student/:id',studentController.deleteStudent);

module.exports= router;
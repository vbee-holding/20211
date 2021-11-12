const express= require('express');
const studentController= require('../controllers/studentController')

const router= express.Router();

router.get('/',studentController.getAllStudent);
router.post('/create', studentController.addStudent);
router.get('/:id',studentController.getStudentByID);
router.put('/:id', studentController.updateStudent);
router.delete('/:id',studentController.deleteStudent);

module.exports= router;
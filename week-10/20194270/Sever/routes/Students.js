const express = require('express');
const router = express.Router();
const StudentController = require('../controllers/StudentController')

/* GET home page. */
router.get('/students',StudentController.getStudents);
router.post('/students', StudentController.postStudent);
router.get('/students/:mssv', StudentController.getStudent);
router.put('/students/:mssv', StudentController.putStudent);
router.delete('/students/:mssv', StudentController.deleteStudent);


module.exports = router;

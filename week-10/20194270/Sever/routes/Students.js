const express = require('express');
const router = express.Router();
const StudentController = require('../controllers/StudentController')

/* GET home page. */
router.get('/',StudentController.getStudents);
router.post('/', StudentController.postStudent);
router.get('/:MSSV', StudentController.getStudent);
router.put('/:MSSV', StudentController.putStudent);
router.delete('/:MSSV', StudentController.deleteStudent);


module.exports = router;

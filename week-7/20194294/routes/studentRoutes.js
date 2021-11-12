const express = require('express');
const studentController = require('../controllers/studentController')

const router = express.Router();

router.get('/', studentController.getAllStudent);
router.post('/create', studentController.addNewStudent);
router.get('/:id', studentController.getStudentByID);
router.put('/:id', studentController.modifiedStudent);
router.delete('/:id', studentController.deleteStudent);

module.exports = router;
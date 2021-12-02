const express = require('express');
const studentController = require('../controllers/studentController')

const router = express.Router();

router.get('/', studentController.getAllStudent);
router.get('/:id', studentController.getStudentByID);
router.post('/', studentController.addNewStudent);
router.put('/:id', studentController.modifiedStudent);
router.delete('/:id', studentController.deleteStudent);

module.exports = router;
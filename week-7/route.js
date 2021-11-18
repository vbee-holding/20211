const express = require('express');
const Student = require('../index');
const router = express.Router();

router.get("/student", Student.getAllStudent);
router.get("/student/:id", Student.getStudentbyID);
router.post("/newstudent", Student.addStudent);
router.put("/edit/:id", Student.editStudent);
router.delete("/delete/:id", Student.deleteStudent);

module.exports = router;
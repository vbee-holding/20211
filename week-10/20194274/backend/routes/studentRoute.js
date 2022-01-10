const express = require('express');
const StudentController = require('../controller/studentController');
const router = express.Router();
//get
router.get("/api/student",StudentController.getAllStudent);
router.post("/api/student",StudentController.addStudent);
router.get("/api/student/:id",StudentController.getSingleStudent);
router.put("/api/student/:id",StudentController.editStudent);
router.delete("/api/student/:id",StudentController.deleteStudent);

module.exports= router;
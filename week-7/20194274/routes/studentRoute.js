const express = require('express');
const StudentController = require('../controller/userController');
const router = express.Router();
//get
router.get("/api/v1/students",StudentController.getAllStudent);
router.post("/api/v1/add",StudentController.addStudent);
router.get("/api/v1/student/:id",StudentController.getSingleStudent);
router.put("/api/v1/edit/:id",StudentController.editStudent);
router.delete("/api/v1/delete/:id",StudentController.deleteStudent);

module.exports= router;

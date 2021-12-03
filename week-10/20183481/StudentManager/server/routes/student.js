const express = require("express");
const router = express.Router();
const studentController = require('../controllers/student');

// Add a new student
router.post(
  "/add", 
  studentController.add,
);

// Update a student
router.put(
  "/update/:id", 
  studentController.update,
);

// Get all students
router.get(
  "/list", 
  studentController.getAll,
);

// Get a student's info
router.get(
  "/list/:id", 
  studentController.getOne,
);


// Delete a student
router.delete(
  "/delete/:id", 
  studentController.delete,
);

module.exports = router;

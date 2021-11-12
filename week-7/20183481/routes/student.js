const express = require("express");
const router = express.Router();
const Student = require('../models/student');

// Add a new student
router.post("/addOrEdit", (req, res) => {
  const student = new Student();
  student.fullName = req.body.fullName;
  student.code = req.body.code;
  student.class = req.body.class;
  student.course = req.body.course;
  student.email = req.body.email;
  student.mobile = req.body.mobile;
  student.address = req.body.address;
  student.image = req.body.image;
  student.save((err, doc) => {
    if (!err) {
      res.redirect("student/list");
    } else {
      console.log("Error during insert: " + err);
    }
  });
});

// Update a student
router.put("/:id", (req, res) => {
  Student.findOneAndUpdate(
    { _id: req.body._id },
    req.body,
    { new: true },
    (err, doc) => {
      if (!err) {
        res.redirect("student/list");
      } else {
        console.log("Error during update: " + err);
      }
    }
  );
});

// Get all students
router.get("/list", (req, res) => {
  Student.find((err, doc) => {
    if (!err) {
      res.render("student/list", {
        list: docs,
      });
    } else {
      console.log("Error in retrieval: " + err);
    }
  });
});

// Get a student's info
router.get("/:id", (req, res) => {
  Student.findById(req.params.id, (err, doc) => {
    if (!err) {
      res.render("student/addOrEdit", {
        student: doc,
      });
    }
  });
});

// Delete a student
router.delete("delete/:id", (req, res) => {
  Student.findByIdAndRemove(req.params.id, (err, doc) => {
    if (!err) {
      res.redirect("student/list");
    } else {
      console.log("Error in deletion: " + err);
    }
  });
});

module.exports = router;

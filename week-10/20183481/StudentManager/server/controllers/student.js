const StudentModel = require('../models/student');
const studentController = {};

// Add a new student
studentController.add = async (req, res) => {
  try {
    const student = new StudentModel();
    student.fullName = req.body.fullName;
    student.code = req.body.code;
    student.class = req.body.class;
    student.course = req.body.course;
    student.email = req.body.email;
    student.mobile = req.body.mobile;
    student.address = req.body.address;
    student.image = req.body.image;
    await student.save();
    return res.json({
      data: student,
      message: 'Create successfully.'
    })
  } catch(e) {
    return res.json({
      message: e.message
    })
  }
};

// Update a student
studentController.update = async (req, res) => {
  try {
    let updatedStudent = await StudentModel.findOneAndUpdate(
      { _id: req.params.id },
      req.body,
      { new: true }
    );
    return res.json({
      data: updatedStudent
    })
  } catch (e) {
    return res.json({
      message: e.message
    })
  }
};

// Get all students
studentController.getAll = async (req, res) => {
  try {
    let list = await StudentModel.find();
    return res.json({
      data: list
    })
  } catch (e) {
    return res.json({
      message: e.message
    })
  }
};

// Get a student's info
studentController.getOne = async (req, res) => {
  try {
    let student = await StudentModel.findById(req.params.id);
    return res.json({
      data: student
    })
  } catch (e) {
    return res.json({
      message: e.message
    })
  }
};

// Delete a student
studentController.delete = async (req, res) => {
  try {
    await StudentModel.findByIdAndRemove(req.params.id);
    return res.json({
      message: 'Delete successfully.'
    })
  } catch (e) {
    return res.json({
      message: e.message
    })
  }
};

module.exports = studentController;

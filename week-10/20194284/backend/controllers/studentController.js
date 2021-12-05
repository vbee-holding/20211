const Student = require('../models/Student')

// get student by id
const getStudentByID = async (req, res) => {
    try {
        const id = req.params.id;
        const result = await Student.findById(id);
        res.json({
            success: true,
            data: result
        });
    } catch (err) {
        res.json({
            success: false,
            message: "Failed to get student by id"
        })
    }
}

// get all student
const getAllStudent = async (req, res) => {
    try {
        const result = await Student.find().sort({ createdAt: -1 });
        res.json({
            success: true,
            data: result
        });
    } catch (error) {
        res.json({
            success: false,
            message: "Failed to get student"
        })
    }
}

// add student
const addStudent = async (req, res) => {
    try {
        const student = new Student(req.body);
        const result = await student.save();
        res.json({
            success: true,
            data: result
        });
    } catch (err) {
        res.json({
            success: false,
            message: "Failed to add new student"
        })
    }
}

//  update student
const updateStudent = async (req, res) => {
    try {
        const id = req.params.id;
        const updateStudent = req.body;
        await Student.updateOne({ _id: id }, { $set: updateStudent });
        res.json({
            success: true,
            data: updateStudent
        })
    } catch (err) {
        res.json({
            success: false,
            message: "Failed to update student"
        });
    }
}

// delete student
const deleteStudent = async (req, res) => {
    try {
        const id = req.params.id;
        const result = await Student.findByIdAndDelete(id);
        res.json({
            success: true,
            data: result
        });
    } catch (err) {
        res.json({
            success: true,
            message: "Failed to delete student"
        })
    }
}

module.exports = {getAllStudent, getStudentByID, addStudent, updateStudent, deleteStudent}
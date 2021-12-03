const Student = require('../models/Student')

// get one student
exports.getStudentByID = async (req, res) => {
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
exports.getAllStudent = async (req, res) => {
    try {
        const result = await Student.find().sort({ createdAt: -1 });
        res.json({
            success: true,
            data: result
        });
    } catch (error) {
        res.json({
            success: false,
            message: "Failed to get student by id"
        })
    }
}

// add student
exports.addNewStudent = async (req, res) => {
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
            message: "Failed to create new student"
        })
    }
}

//  modified student
exports.modifiedStudent = async (req, res) => {
    try {
        const id = req.params.id;
        const modifiedStudent = req.body;
        await Student.updateOne({ _id: id }, { $set: modifiedStudent });
        res.json({
            success: true,
            data: modifiedStudent
        })
    } catch (err) {
        res.json({
            success: false,
            message: "Failed to modified student"
        });
    }
}

// delete student
exports.deleteStudent = async (req, res) => {
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

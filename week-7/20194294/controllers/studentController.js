const Student = require('../models/Student')

// get one student
exports.getStudentByID = async (req, res) => {
    try {
        const id = req.params.id;
        const result = await Student.findById(id);
        res.json(result);
    } catch (err) {
        res.json(err)
    }
}

// get all student
exports.getAllStudent = async (req, res) => {
    try {
        const result = await Student.find().sort({ createdAt: -1 });
        res.json(result);
    } catch (error) {
        res.json(error);
    }
}

// add student
exports.addNewStudent = async (req, res) => {
    try {
        const student = new Student(req.body);
        const result = await student.save();
        res.json(result);
    } catch (err) {
        res.json(err);
    }
}

//  modified student
exports.modifiedStudent = async (req, res) => {
    try {
        const id = req.params.id;
        const modifiedStudent = req.body;
        const result = await Student.updateOne({ _id: id }, { $set: modifiedStudent });
        res.json("Number of documents modified is "+ result.modifiedCount);
    } catch (err) {
        res.json(err);
    }
}

// delete student
exports.deleteStudent = async (req, res) => {
    try {
        const id = req.params.id;
        const result = await Student.findByIdAndDelete(id);
        res.json(result);
    } catch (err) {
        res.json(err)
    }
}

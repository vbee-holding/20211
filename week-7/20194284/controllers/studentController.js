const Student = require('../models/Student')

// get all student
getAllStudent = async (req, res) => {
    try {
        const result = await Student.find().sort({ createdAt: -1 });
        res.json(result);
    } catch (error) {
        res.json(error);
    }
}

// getStudentByID
getStudentByID = async (req, res) => {
    try {
        const id = req.params.id;
        const result = await Student.findById(id);
        res.json(result);
    } catch (err) {
        res.json(err)
    }
}

// add student
addStudent = async (req, res) => {
    try {
        const student = new Student(req.body);
        const result = await student.save();
        res.json(result);
    } catch (err) {
        res.json(err);
    }
}

//  update student
updateStudent = async (req, res) => {
    try {
        const id = req.params.id;
        const updateStudent = req.body;
        const result = await Student.updateOne({ _id: id }, { $set: updateStudent });
        res.json("Number of documents  is "+ result.updateStudent);
    } catch (err) {
        res.json(err);
    }
}

// delete student
deleteStudent = (req, res) => {
    const id = req.params.id;
    Student.findByIdAndDelete(id)
        .then(result => res.json(result))
        .catch(error => res.json(error))
}
module.exports = {getAllStudent, getStudentByID, addStudent, updateStudent, deleteStudent}

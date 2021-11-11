const Student = require('../models/Student')

// get one student
exports.getStudentByID = (req, res) => {
    const id = req.params.id;
    Student.findById(id)
        .then(result => res.json(result))
        .catch(error => res.json(error));
}

// get all student
exports.getAllStudent = (req, res) => {
    Student.find().sort({ createdAt: -1 })
        .then((result) => res.json(result))
        .catch((error) => res.json(error))
}

// add student
exports.addNewStudent = (req, res) => {
    const student = new Student(req.body);
    student.save()
        .then(() => res.json(student))
        .catch((error) => res.json(error))

}

//  modified student
exports.modifiedStudent = (req, res) => {
    const id = req.params.id;
    const modifiedStudent = req.body;
    Student.updateOne({ _id: id }, { $set: modifiedStudent })
        .then(result => {
            res.json(modifiedStudent);
        })
        .catch(error => res.json(error))
}

// delete student
exports.deleteStudent = (req, res) => {
    const id = req.params.id;
    Student.findByIdAndDelete(id)
        .then(result => res.json(result))
        .catch(error => res.json(error))
}

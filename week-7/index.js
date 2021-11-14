require("Student").config();
const express = require("express");
const cors = require("cors");
const app = express();

app.use(express.json());

const corsOptions = {
    origin: "*",
};
app.use(cors(corsOptions));

const connectDB = require("./connect");
const studentModel = require("./student");
const StudentRoute = require('./route');

const getAllStudent = async(req, res) => {
    const student = await studentModel.find();
    res.send(student);
};

const getStudentbyID = async(req, res) => {
    const { _id } = req.params;
    try {
        const student = await studentModel.findById(_id);
        res.send(student);
    } catch (error) {
        res.status(404).json({ Message: "student not found!!!" });
    }
};

app.post("/newstudent", async(req, res) => {
    const newstudent = req.body;
    await studentModel.create(newstudent);
    res.send({ Message: "student created!!!" });
});

const editStudent = async(req, res) => {
    const _id = req.params;
    const studentData = req.body;
    const updateStudent = await studentModel.findByIdAndUpdate(
        _id, { $set: studentData }, { new: true }
    );
    res.send({ Message: "updated complete!!!" });
};


const deleteStudent = async(req, res) => {
    const _id = req.params;
    const deleteStudent = await studentModel.findByIdAndDelete(_id);
    res.send({ Message: "deleted complete!!!" });
};

app.listen(process.env.PORT, () =>
    connectDB()
    .then(() => console.log("Server is running..."))
    .catch((error) => console.log(error))
);

exports.getStudentbyID = getStudentbyID;
exports.getAllStudent = getAllStudent;
exports.editStudent = editStudent;
exports.deleteStudent = deleteStudent;
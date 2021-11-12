require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
app.use(express.json());
const corsOptions = {
  origin: "*",
};
app.use(cors(corsOptions));
const connectDB = require("./connection");
const studentModel = require("./student");
app.get("/", async (req, res) => {
  res.send({ Message: "Hello world" });
});
app.get("/student", async (req, res) => {
  const student = await studentModel.find();
  res.send(student);
});
app.get("/student/:_id", async (req, res) => {
  const { _id } = req.params;
  try {
    const student = await studentModel.findById(_id);
    res.send(student);
  } catch (error) {
    res.status(404).json({ Message: "student not found!!!" });
  }
});
app.post("/student", async (req, res) => {
  const newstudent = req.body;
  await studentModel.create(newstudent);
  res.send({ Message: "student created!!!" });
});
app.put("/student/:_id", async (req, res) => {
  const _id = req.params;
  const studentData = req.body;

  const updatestudent = await studentModel.findByIdAndUpdate(
    _id,
    { $set: studentData },
    { new: true }
  );
  res.send({ Message: "student updated!!!" });
});
app.delete("/student/delete/:_id", async (req, res) => {
  const _id = req.params;

  const deletestudent = await studentModel.findByIdAndDelete(_id);
  res.send({ Message: "student deleted!!!" });
});

app.listen(process.env.PORT, () =>
  connectDB()
    .then(() => console.log("Server is running..."))
    .catch((error) => console.log(error))
);

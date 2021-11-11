require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();

app.use(express.json());

// Cors options
const corsOptions = {
  origin: "*",
};
app.use(cors(corsOptions));

// Mongoose connection
const connectDB = require("./connection");

// Mongoose model
const studentModel = require("./student");

/**
 * @openapi
 * /:
 *   get:
 *     description: Welcome to swagger-jsdoc!
 *     responses:
 *       200:
 *         description: Returns a mysterious string.
 */

app.get("/", async (req, res) => {
  res.send({ Message: "Hello world" });
});

/**
 * @openapi
 * /student:
 *   get:
 *     description: Get all students
 *     responses:
 *       200:
 *         description: Returns students list.
 */

app.get("/student", async (req, res) => {
  const student = await studentModel.find();
  res.send(student);
});

/**
 * @openapi
 * /student/_id:
 *   get:
 *     description: Get student by Id
 *     responses:
 *       200:
 *         description: Returns student detail by Id.
 */
app.get("/student/:_id", async (req, res) => {
  const { _id } = req.params;
  try {
    const student = await studentModel.findById(_id);
    res.send(student);
  } catch (error) {
    res.status(404).json({ Message: "student not found!!!" });
  }
});

/**
 * @openapi
 * /student/_id:
 *   post:
 *     description: Create new student
 *     responses:
 *       200:
 *         description: Create new student
 */
app.post("/student", async (req, res) => {
  const newstudent = req.body;
  await studentModel.create(newstudent);
  res.send({ Message: "student created!!!" });
});

/**
 * @openapi
 * /student/_id:
 *   put:
 *     description: Update an student by Id
 *     responses:
 *       200:
 *         description: Update an student by Id
 */
app.put("/student/:_id", async (req, res) => {
  const _id = req.params;
  const studentData = req.body;

  const updatestudent = await studentModel.findByIdAndUpdate(
    _id,
    { $set: studentData },
    { new: true }
  );
  // res.send({ Message: "student updated!!!", updatestudent });
  res.send({ Message: "student updated!!!" });
});

/**
 * @openapi
 * /student/_id:
 *   delete:
 *     description: Delete an student by Id
 *     responses:
 *       200:
 *         description: Delete an student by Id
 */
app.delete("/student/delete/:_id", async (req, res) => {
  const _id = req.params;

  const deletestudent = await studentModel.findByIdAndDelete(_id);
  // res.send(deletestudent);
  res.send({ Message: "student deleted!!!" });
});

app.listen(process.env.PORT, () =>
  connectDB()
    .then(() => console.log("Server is running..."))
    .catch((error) => console.log(error))
);

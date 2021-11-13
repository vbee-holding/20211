const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
  name: String,
  student_id: String,
  class: String,
  generation: String,
  email: String,
  phone: String,
  image: String,
  address: String,
});

const studentModel = mongoose.model("Student", studentSchema);

module.exports = studentModel;

const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: "This field is required",
  },
  code: {
    type: String,
    required: "This field is required",
  },
  class: {
    type: String,
    required: "This field is required",
  },
  course: {
    type: String,
    required: "This field is required",
  },
  email: {
    type: String,
    required: "This field is required",
  },
  mobile: {
    type: Number,
    required: "This field is required",
  },
  address: {
    type: String,
    required: "This field is required",
  },
  image: {
    type: String,
    required: "This field is required",
  },
});

const Student = mongoose.model('Student', studentSchema);
module.exports = Student;

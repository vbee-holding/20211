const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: "This field is required",
  },
  code: {
    type: String,
    required: "This field is required",
    unique: true
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
    type: String,
    required: "This field is required",
  },
  address: {
    type: String,
    required: "This field is required",
  },
  image: {
    type: String,
  },
});

module.exports = mongoose.model('Student', studentSchema);

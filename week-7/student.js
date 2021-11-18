const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
    name: String,
    id: String,
    class: String,
    generation: String,
    email: String,
    telephone: String,
    image: String,
    address: String,
});

const studentModel = mongoose.model("student", studentSchema);

module.exports = studentModel;
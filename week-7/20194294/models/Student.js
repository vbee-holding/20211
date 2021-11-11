const mongoose = require('mongoose');
const { isEmail } = require('validator')

const Schema = mongoose.Schema;

const studentSchema = new Schema({
    studentCode: {
        type: String,
        require: [true, "Please enter student's code"],
        unique: [true, "This studentCode is duplicate"]

    },
    name: {
        type: String,
        require: [true, "Please enter student's name"]
    },
    className: {
        type: String,
        require: [true, "Please enter class name"]
    },
    course: {
        type: Number,
        require: [true, 'Please enter your']
    },
    email: {
        type: String,
        required: [true, 'Please enter an email'],
        unique: true,
        lowercase: true,
        validate: [isEmail, 'Please enter a valid email']
    },
    phoneNumber: {
        type: String,
    },
    imagePath: {
        type: String
    },
    address: {
        type: String,
    }

}, { timestamps: true });

const Student = mongoose.model('Student', studentSchema);
module.exports = Student;
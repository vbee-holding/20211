const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const studentSchema = new Schema({

    name: {
        type: String,
        required: [true, "Please enter student's name"]
    },

    studentID: {
        type: Number,
        required: true,
        unique:true
    },
   
    class: {
        type: String,
        required: true
    },

    khoa: {
        type: Number,
        required: true
    },

    email: {
        type: String,
        required: true,
        unique: true
    },

    phoneNumber: {
        type: Number
    },

    imgPath: {
        type: String
    },

    address: {
        type: String
    }
});

const Student = mongoose.model('Student', studentSchema);
module.exports = Student;
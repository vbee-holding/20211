const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const studentSchema = new Schema({

    name: {
        type: String,
        required: true
    },

    studentID: {
        type: String,
        required: true,
        unique:true
    },
   
    class: {
        type: String,
        required: true
    },

    khoa: {
        type: String,
        required: true
    },

    email: {
        type: String,
        required: true,
        unique: true
    },

    phoneNumber: {
        type: String,
        required: false
    },

    imgPath: {
        type: String,
        required: false
    },

    address: {
        type: String,
        required: false
    }
});

const Student = mongoose.model('Student', studentSchema);
module.exports = Student;
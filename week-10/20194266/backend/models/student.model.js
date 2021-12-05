//import router from '../routes/student';

import mongoose from 'mongoose';

var studentSchema = new mongoose.Schema({
    name : {
        type : String,
        required: true
    },
    email : {
        type: String,
        required: true,
        unique: true
    },
    studentID: {
        type: String,
        require: true,
        unique: true
    },
    course:{
        type: String,
        require: true
    },
    class: {
        type: String,
        require: true
    },
    telephonnumber: {
        type: String,
        require: true
    },
    address: {
        type: String,
        require: true
    },
    gender : String
    
})

const Student = mongoose.model('student', studentSchema);

export default Student
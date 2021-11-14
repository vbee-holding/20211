const mongoose = require('mongoose');

let schema = new mongoose.Schema({
    name : {
        type : String,
        required: true
    },
    email : {
        type: String,
        required: true,
        unique: true
    },
    class :{type: String, required:true} ,
   
    studentID: {type: String,
        required: true,
        unique: true},
    course:{
        type: String,
        required: true
    },
    telephonenumber: {
        type: String,
        required: true,
        unique: true
    },
    address: {
        type: String,
        required: true
    },
    userImage: { type: String, required: true }

    
})

const User = mongoose.model('user', schema);

module.exports = User;
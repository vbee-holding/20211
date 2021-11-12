const mongoose = require('mongoose');

var schema = new mongoose.Schema({
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
    productImage: { type: String, required: true }

    
})

const Userdb = mongoose.model('userdb', schema);

module.exports = Userdb;
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Student = {
    name : {type : String, default : "Hai"},
    mssv : {type : String, default : "20194220"},
    class : {type : String, default : "IT2 - 02"},
    course : {type : String, default : "64"},
    email : {type : String, default : "email@email.com"},
    phoneNumber : {type : String, default : "0322562568"},
    imagePath : {type : String, default : "https://img.nhandan.com.vn/Files/Images/2020/07/26/nhat_cay-1595747664059.jpg"},
    address : {type : String, default : "Ha Tay"},



}

module.exports = mongoose.model('Tai_Khoan_Sinh_Vien', Student);   // tên của module sẽ được viết thường rồi tìm kiếm với số nhiều trên databasse 
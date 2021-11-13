const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SinhVien = {
    name : {type : String, default : "Hai1"},
    MSSV : {type : String, default : "-1"},
    Lop : {type : String, default : "-1"},
    Khoa : {type : String, default : "0"},
    Email : {type : String, default : "email@email.com"},
    SDT : {type : String, default : "-1"},
    Anh : {type : String, default : "https://img.nhandan.com.vn/Files/Images/2020/07/26/nhat_cay-1595747664059.jpg"},
    DiaChi : {type : String, default : "Ha Tay"},



}

module.exports = mongoose.model('Tai_Khoan_Sinh_Vien', SinhVien);   // tên của module sẽ được viết thường rồi tìm kiếm với số nhiều trên databasse 
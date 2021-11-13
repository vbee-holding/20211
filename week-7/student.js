const mongoose = require("mongoose");

const sinhvienSchema = new mongoose.Schema({
    hoten: String,
    mssv: String,
    lop: String,
    khoa: String,
    email: String,
    sdt: String,
    image: String,
    address: String,
});

const sinhvienModel = mongoose.model("Sinhvien", sinhvienSchema);

module.exports = sinhvienModel;
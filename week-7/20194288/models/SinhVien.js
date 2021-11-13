const mongoose= require("mongoose");
const schema= mongoose.Schema;
const sinhVienSchema= new schema({
    hoTen: String,
    mssv: String,
    class: String,
    khoa: String,
    email: String,
    phone: String,
    address: String
});
module.exports=mongoose.model('sinhviens', sinhVienSchema);
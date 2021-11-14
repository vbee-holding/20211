const mongoose= require("mongoose");
const schema= mongoose.Schema;
const studentSchema= new schema({
    name: String,
    mssv: String,
    class: String,
    generation: String,
    email: String,
    phone: String,
    image: String,
    address: String
});
module.exports=mongoose.model('Student', studentSchema);
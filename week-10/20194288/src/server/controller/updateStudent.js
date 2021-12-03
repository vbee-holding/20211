const studentModel= require("../../models/Student");
const updateStudent=async (req,res)=>{
    try{
        const student =await studentModel.updateOne({'mssv': req.query.mssv }, { $set: req.query });
        res.json(student);
    } catch(error){
        res.json({message: error});
    }
}
module.exports=updateStudent;

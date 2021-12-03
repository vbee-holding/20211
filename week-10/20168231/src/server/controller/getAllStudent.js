const studentModel= require("../../models/Student");
const getAllStudent= async (req,res)=>{
    try{
        const student = await studentModel.find();
        res.json(student);
    } catch(error){
        res.json({message: error});
    }
    
}
module.exports=getAllStudent;

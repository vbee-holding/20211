const studentModel= require("../../models/Student");
const deleteStudent= async (req,res)=>{
    try{
        const deleteStudent = await studentModel.deleteMany({mssv: req.query.mssv});
        res.json(deleteStudent);
    } catch (error){
        res.json({message: error});
    }
}
module.exports= deleteStudent;
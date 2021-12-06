const studentModel= require("../../models/Student");
const getStudentByID= async (req,res)=>{
    try{
        const student = await studentModel.findOne({'mssv': req.query.mssv});
        res.json(student);
    } catch(error){
        res.json({message: error});
    }
}
module.exports= getStudentByID;
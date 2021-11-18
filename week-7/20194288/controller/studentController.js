const studentModel= require("../models/Student");


module.exports.getAllStudent= async (req,res)=>{
    try{
        const student = await studentModel.find();
        res.json(student);
    } catch(error){
        res.json({message: error});
    }
}
module.exports.getStudentByID= async (req,res)=>{
    try{
        const student = await studentModel.findOne({'mssv': req.query.mssv});
        res.json(student);
    } catch(error){
        res.json({message: error});
    }
}
module.exports.addStudent=async (req, res)=>{
    try{
        const data= req.query;
        const student=new studentModel(data);
        await student.save();
        res.json(student);
    } catch(error){
        res.json({message: error});
    }
}
module.exports.updateStudent=async (req,res)=>{
    try{
        const student =await studentModel.updateOne({'mssv': req.query.mssv }, { $set: req.query });
        res.json(student);
    } catch(error){
        res.json({message: error});
    }
}
module.exports.deleteStudent= async (req,res)=>{
    try{
        const deleteStudent = await studentModel.deleteMany({mssv: req.query.mssv});
        res.json(deleteStudent);
    } catch (error){
        res.json({message: error});
    }
}
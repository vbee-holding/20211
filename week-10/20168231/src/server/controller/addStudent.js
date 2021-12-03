const studentModel= require("../../models/Student");
const addStudent=async (req, res)=>{
    try{
        const data= req.query;
        const student=new studentModel(data);
        await student.save();
        console.log(data);
        res.json(student);
    } catch(error){
        res.json({message: error});
    }
}
module.exports= addStudent;
const Student = require('../model/student');
// get all student
const getAllStudent = async(req,res)=>{
    console.log(req.body.mssv);
   try {
       Student.find({},(err,doc)=>{
           if(err){
               return res.json({status:false,msg:'Fail to find document !'})
           }
           if(!doc){
               return res.json({status:true,msg:'No document found!'})
           }
           return res.json({status:true, data:doc });
       })
   } catch (error) {
       console.log(error);
   }
}

// add user method post
const addStudent = async(req,res)=>{
    let student;
    let flag = true;
    console.log(req.body);
    try {
     const {hoten, mssv, lop, khoa, email, sodienthoai, anh, diachi} = req.body;
     console.log(hoten, mssv, lop, khoa, email, sodienthoai, anh, diachi);
     Student.find({},(err, doc) =>{
         doc.map(one => {
             if (one.mssv == mssv) return res.json({status:false,msg:'Student is present'})
             flag = false;
         })
     })
     if (flag) {
        student = new Student({hoten, mssv, lop, khoa, email, sodienthoai, anh, diachi});
        await student.save().then(doc=>{
            res.json({status:true,data:doc})
        })
     }
    } catch (error) {
        console.log(error);
    }
}

// get single student
const getSingleStudent= async(req,res)=>{
    console.log(req.params.id);
    try{
       Student.find({_id:req.params.id},(err,doc)=>{
           if(err){
               return res.json({status:false,msg:'Error server'})
           }
           if(!doc)return res.json({status:false,msg:'no student found!'})
           res.json({status:true,data:doc});
       })
    }catch(err){
        console.log(err);
    }
}

// edit student infor
const editStudent = async(req, res) => {
     try{
        // const {name,age,address}= req.body;
        const id = req.params.id;
        Student.findOneAndUpdate({_id:id},req.body,{new:true}).then(doc =>{
            return res.json({status:true,data:doc});
        })
     }catch(err){
         console.log(error);
     }
}

// delete student infor
const deleteStudent = async(req,res)=>{
    try{
        const id = req.params.id;
        Student.findOneAndRemove({_id:id},(err,doc)=>{
            if(err){
               console.log(err);
               return res.json({status:false,msg:'Server error'})
            }
            if(!doc){
               return res.json({status:false,msg:'Not found'})
            }
            return res.json({status:true,msg:'Delete successfully'});
        })
    }catch(err){
        console.log(err)
    }
}

// exports
exports.getSingleStudent=getSingleStudent;
exports.getAllStudent= getAllStudent;
exports.addStudent=addStudent;
exports.editStudent = editStudent;
exports.deleteStudent=deleteStudent;

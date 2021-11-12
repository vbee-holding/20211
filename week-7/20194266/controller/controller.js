let User = require('../model/model');

const createUser = (req,res)=>{
    
    if(!req.body){
        res.status(400).send({ message : "Content can not be emtpy!"});
        return;
    }
    const user = new User({
        name : req.body.name,
        email : req.body.email,
        studentID: req.body.studentID,
        course: req.body.course,
        telephonenumber: req.body.course,
        address: req.body.address,
        studentImage: req.file.path  
    })
    user
        .save(user)
        .then(data => {
           
            res.redirect('/addUser');
        })
        .catch(err =>{
            res.status(500).send({
                message : err.message || "Some error occurred while creating a create operation"
            });
        });

}
module.exports = { createUser}

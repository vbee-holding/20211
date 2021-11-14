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


    const findUser = (req, res)=>{

    if(req.query.id){
        const id = req.query.id;

        User.findById(id)
            .then(data =>{
                if(!data){
                    res.status(404).send({ message : "Not found user with id "+ id})
                }else{
                    res.send(data)
                }
            })
            .catch(err =>{
                res.status(500).send({ message: "Error retrieving user with id " + id})
            })

    }else{
        User.find()
            .then(user => {
                res.send(user)
            })
            .catch(err => {
                res.status(500).send({ message : err.message || "Error Occurred while retriving user information" })
            })
    }

    
}
    const getAllUser = (req, res) => {
    Student.find().sort({ createdAt: -1 })
        .then((result) => res.json(result))
        .catch((error) => res.json(error))
}

    const updateUser = (req, res)=>{
    if(!req.body){
        return res
            .status(400)
            .send({ message : "Data to update can not be empty"})
    }

    const id = req.params.id;
    User.findByIdAndUpdate(id, req.body, { useFindAndModify: false})
        .then(data => {
            if(!data){
                res.status(404).send({ message : `Cannot Update user with ${id}. Maybe user not found!`})
            }else{
                res.send(data)
            }
        })
        .catch(err =>{
            res.status(500).send({ message : "Error Update user information"})
        })
}


    const deleteUser  = async (req, res)=>{
    const id = req.params.id;
    try{
        const user = await User.findByIdAndDelete(id);
        if(!data){
            res.status(404).send({ message : `Cannot Delete with id ${id}. Maybe id is wrong`})
        }else{
            res.send({
                message : "User was deleted successfully!"
            })
        }
    }
   
        catch(err)
        {
            console.log('Error Occured : '+ err);
        }}
module.exports = { createUser, updateUser, deleteUser, findUser, getAllUser}
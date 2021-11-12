let User = require('../model/model');
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
module.exports = {deleteUser}

const axios = require('axios');
const PATH = process.env.PATH
const homeRoutes = (req, res) => {
    
    axios.get(/*'http://localhost:3000/api/users'*/ PATH)
        .then(function(response){
            res.render('index', { users : response.data });
        })
        .catch(err =>{
            res.send(err);
        })
 
}

const addUser = (req, res) =>{
    res.render('addUser');
}

const updateUser = (req, res) =>{
    axios.get(/*'http://localhost:3000/api/users'*/ PATH, { params : { id : req.query.id }})
        .then(function(userdata){
            res.render("updateUser", { user : userdata.data})
        })
        .catch(err =>{
            res.send(err);
        })
}
module.exports = {homeRoutes, addUser, updateUser }
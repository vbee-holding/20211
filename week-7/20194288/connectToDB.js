const mongoose= require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

const connectToDB= async ()=>{
    const url=process.env.url;
    try{
        await mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });
        console.log("Connected to database");
    } catch(error){
        console.log("Fail to connect to database");
    }
}
module.exports=connectToDB;
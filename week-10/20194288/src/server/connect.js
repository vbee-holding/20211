const mongoose= require('mongoose');

const connectToDB= async ()=>{
    const url="mongodb+srv://HuanNH:123@cluster0.jcbet.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
    try{
        await mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });
        console.log("Connected to database");
    } catch(error){
        console.log("Fail to connect to database");
    }
}
module.exports=connectToDB;
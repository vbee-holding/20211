const mongoose = require('mongoose');

const connectDB = async () => {
    try{
       
        const con = await mongoose.connect("mongodb+srv://lathiha:20194266@cluster0.nq5m6.mongodb.net/myFirstDatabase?retryWrites=true&w=majority", {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
            useCreateIndex: true
        })

        console.log(`MongoDB connected : ${con.connection.host}`);
    }catch(err){
        console.log(err);
        process.exit(1);
    }
}

module.exports = connectDB

const mongoose = require('mongoose');
const dotenv= require('dotenv');

const connectDB = async () => {
    const dbUrl = process.env.URI;
    try {
        await mongoose.connect(dbUrl,{
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        console.log("ket noi db thanh cong!");
    } catch (error) {
        console.log(error);
    }
}

module.exports= connectDB;
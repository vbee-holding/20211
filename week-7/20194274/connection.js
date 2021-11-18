const mongoose = require('mongoose');
const dotenv= require('dotenv');

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.dbUrl,{
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
    } catch (error) {
        console.log(error);
    }
}

module.exports= connectDB;
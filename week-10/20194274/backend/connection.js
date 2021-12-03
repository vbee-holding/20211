const mongoose = require('mongoose');
const dotenv= require('dotenv');

const connectDB = async () => {
    try {
        await mongoose.connect('mongodb+srv://hienld:hienld@cluster0.0izdd.mongodb.net/project1Week7?retryWrites=true&w=majority',{
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
    } catch (error) {
        console.log(error);
    }
}

module.exports= connectDB;
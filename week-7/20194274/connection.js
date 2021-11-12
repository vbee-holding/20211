const mongoose = require('mongoose');
const dotenv= require('dotenv');

const connectDB = async () => {
    const dbUrl = `mongodb+srv://hienld:hien.ld194274@cluster0.0izdd.mongodb.net/project1Week7?retryWrites=true&w=majority`;
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
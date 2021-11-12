const mongoose = require ('mongoose');

async function connect () {
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/Quan_Ly_Sinh_Vien');
        console.log('connect successfuly');
    }
    catch(error) {
        console.log('connect faile');
        console.log(error);
    }

}

module.exports = { connect };
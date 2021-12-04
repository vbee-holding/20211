const mongoose = require ('mongoose');

async function connect () {
    try {
        await mongoose.connect('mongodb+srv://Hai_4270:Thangngu26@studentscluster.iqcmh.mongodb.net/Students?retryWrites=true&w=majority');
        console.log('connect successfuly');
    }
    catch(error) {
        console.log('connect faile');
        console.log(error);
    }

}

module.exports = { connect };
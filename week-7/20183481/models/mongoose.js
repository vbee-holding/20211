const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/StudentManagement', {
    useNewUrlParser: true
},
err => {
    if (!err) {
        console.log('Connection succeed')
    } else {
        console.log('Error in connection ', err)
    }
})

require('./student')
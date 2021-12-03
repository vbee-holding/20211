const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    hoten: {
        type: String,
        required: true,
    },
    mssv: {
        type: Number,
        required: true,
    },
    lop: {
        type: Number,
        required: false,
        default: 'IT2'

    },
    khoa: {
        type: Number,
        required: true,
    },
    email: {
        type: String,
        required: false,
        default: '@gmail.com'
    },
    sodienthoai: {
        type: Number,
        required: true,
    },
    anh: {
        type: String,
        required: false,
        default: 'https://i.pinimg.com/564x/43/0a/c2/430ac22018cd0fb76ef60f067a283c56.jpg'
    },
    diachi: {
        type: String,
        required: false,
    }
})
module.exports = mongoose.model('Student', userSchema)
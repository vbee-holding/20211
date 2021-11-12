import express from 'express'
import mongoose from 'mongoose'

const StudentSchema = mongoose.Schema({
    mssv: Number,
    ten: String,
    lop: String,
    khoa: String,
    email: String,
    sdt: String,
    anh: String,
    diaChi: String
})

const Student = mongoose.model('Student', StudentSchema)
export {Student}

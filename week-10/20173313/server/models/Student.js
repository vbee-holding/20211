import mongoose from 'mongoose'

const StudentSchema = mongoose.Schema({
    studentId: Number,
    name: String,
    class: String,
    generation: String,
    email: String,
    phone: String,
    image: String,
    address: String
})
const Student = mongoose.model('Student', StudentSchema)

export {Student}

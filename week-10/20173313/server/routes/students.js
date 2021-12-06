import express from 'express'
import { Student } from '../models/Student.js'
const router = express.Router()

async function checkStudentExists(studentId) {
    let result = await Student.findOne({ studentId: studentId }).exec()
    return result != null
}

router.get('/:studentId', async (req, res) => {
    try {
        if (await checkStudentExists(req.params.studentId)) {
            let result = await Student.findOne({ studentId: req.params.studentId })
            res.json(result)
        }
        else
            res.json({
                message: `Student ${req.params.studentId} does not exist`,
                success: false
            })
    } catch (err) {
        console.log(err)
        res.json({
            message: err,
            success: false
        })
    }
})

router.get('/', async (req, res) => {
    try {
        res.json(await Student.find())
    } catch (err) {
        console.log(err)
        res.json({
            message: err,
            success: false
        })
    }
})

router.post('/', async (req, res) => {
    try {
        const student = new Student({
            studentId: req.body.studentId,
            name: req.body.name,
            class: req.body.class,
            generation: req.body.generation,
            email: req.body.email,
            phone: req.body.phone,
            image: req.body.image,
            address: req.body.address
        })
        if (! await checkStudentExists(req.body.studentId))
            res.json({
                data: await student.save(),
                message: "Thêm thành công",
                success: true
            })
        else
            res.json({
                message: `Student ${req.body.studentId} is ready existed`,
                success: false
            })
    } catch (err) {
        console.log(err)
        res.json({
            message: err,
            success: false
        })
    }
})

router.delete("/:studentId", async (req, res) => {
    try {
        if (await checkStudentExists) {
            const deletedStudent = await Student.findOneAndDelete({
                studentId: req.params.studentId
            })
            res.json({
                data: deletedStudent,
                message: "Xóa thành công",
                success: true
            })
        }
        else
            res.json({ "result": `Student ${req.body.studentId} does not exist` })
    } catch (error) {
        console.log(err)
        res.json({
            message: err,
            success: false
        })
    }
})

router.put("/:studentId", async (req, res) => {
    try {
        if (await checkStudentExists) {
            const updateStudent = await Student.findOneAndUpdate(
                { studentId: req.params.studentId },
                {
                    $set: {
                        name: req.body.name,
                        class: req.body.class,
                        generation: req.body.generation,
                        email: req.body.email,
                        phone: req.body.phone,
                        image: req.body.image,
                        address: req.body.address
                    }
                }
            )
            res.json({
                data: updateStudent,
                message: "Cập nhật thành công",
                success: true
            })
        }
        else {
            res.json({
                message: `Student ${req.body.studentId} does not exist`,
                success: false,
            })
        }
    } catch (error) {
        console.log(err)
        res.json({
            message: err,
            success: false
        })
    }
})


export { router }
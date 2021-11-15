import express from 'express'
import {Student} from '../models/Student.js'
const router = express.Router()

async function checkStudentExists(studentId){
    let result = await Student.findOne({studentId: studentId}).exec()
    return result != null
}

router.get('/:studentId', async (req, res) => {
    try{
        if(await checkStudentExists(req.params.studentId)){
            let result = await Student.findOne({studentId: req.params.studentId})
            res.json(result)
        }
        else
            res.json({"result": `Student ${req.params.studentId} does not exist`})
        
    }catch(err){
        res.json({message: err})
    }
})

router.get('/', async (req, res) => {
    try{
        res.json(await Student.find())
    }catch(err){
        res.json({message: err})
    }
})

router.post('/', async(req, res) => {
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
        if(! await checkStudentExists(req.body.studentId))
            res.json(await student.save())
        else
            res.json({"result": `Student ${req.body.studentId} is ready existed`})
    } catch (err) {
        console.log(err)
        res.json({err})
    }
})

router.delete("/:studentId", async(req, res) => {
    try {
        if(await checkStudentExists){
            const deletedStudent = await Student.findOneAndDelete({
                studentId: req.params.studentId
            })
            res.json(deletedStudent)  
        }
        else
            res.json({"result": `Student ${req.body.studentId} does not exist`})
    } catch (error) {
        res.json({message: err})
    }
})

router.put("/:studentId", async(req, res) => {
  try {
        if(await checkStudentExists){
            const updateStudent = await Student.findOneAndUpdate(
                {studentId: req.params.studentId},
                {$set: {              
                    name: req.body.name,
                    class: req.body.class,
                    generation: req.body.generation,
                    email: req.body.email,
                    phone: req.body.phone,
                    image: req.body.image,
                    address: req.body.address
                }}
            )
            res.json(updateStudent) 
        }
        else{
            res.json({"result": `Student ${req.body.studentId} does not exist`})
        }  
  } catch (error) {
    res.json({message: err})
  }  
})


export {router}
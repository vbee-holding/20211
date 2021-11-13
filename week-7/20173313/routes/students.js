import express from 'express'
import mongoose from 'mongoose'
import {Student} from '../models/Student.js'

const router = express.Router()


router.get('/:mssv', async (req, res) => {
    try{
        if(req.params.mssv == "all")
            res.json(await Student.find())
        else{
            let result = await Student.findOne({mssv: req.params.mssv})
            res.json(result)
        }        
    }catch(err){
        res.json({message: err})
    }
})

router.post('/', async(req, res) => {
    try {
        
        const student = new Student({
            mssv: req.body.mssv,
            ten: req.body.ten,
            lop: req.body.lop,
            khoa: req.body.khoa,
            email: req.body.email,
            sdt: req.body.sdt,
            anh: req.body.anh,
            diaChi: req.body.diaChi
        })
        let result = await Student.findOne({mssv: req.body.mssv})
        // console.log(result)
        if(!result)
            res.json(await student.save())
        else
            res.json({"result": `Student ${req.body.mssv} are ready existed`})
    } catch (err) {
        console.log(err)
        res.json({err})
    }
})

router.delete("/:mssv", async(req, res) => {
    try {
        const deletedStudent = await Student.deleteMany({
            mssv: req.params.mssv
        })
        res.json(deletedStudent)
    } catch (error) {
        res.json({message: err})
    }
})

router.put("/:mssv", async(req, res) => {
  try {
      const updateStudent = await Student.updateMany(
            {mssv: req.params.mssv},
            {$set: {              
                ten: req.body.ten,
                lop: req.body.lop,
                khoa: req.body.khoa,
                email: req.body.email,
                sdt: req.body.sdt,
                anh: req.body.anh,
                diaChi: req.body.diaChi
            }}
          )
        res.json(updateStudent)    
  } catch (error) {
    res.json({message: err})
  }  
})


export {router}
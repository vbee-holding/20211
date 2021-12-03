//const express = require('express');
import express from 'express'
//import student from '../models/student.js';
const router = express.Router()
import Student from '../models/student.model.js';

//Add a new student
router.route('/student').post((req, res) =>{
    const newStudent = new Student({
        name : req.body.name,
        email : req.body.email,
        studentID: req.body.studentID,
        course: req.body.course,
        class: req.body.class,
        telephonenumber: req.body.telephonenumber,
        address: req.body.address,
        gender: req.body.gender
    })
    newStudent.save()
    .then(() => res.json("Student added!"))
    .catch(err => res.status(400).json('Error: '+ err))
});
//find student by id
router.route('/student').get((req, res)=>{

    if(req.query.id){
        const id = req.query.id;

        Student.findById(id)
            .then(data =>{
                if(!data){
                    res.status(404).send({ message : "Not found user with id "+ id})
                }else{
                    res.send(data)
                }
            })
            .catch(err =>{
                res.status(500).send({ message: "Erro retrieving user with id " + id})
            })

    }else{
        Student.find()
            .then(student => {
                res.send(student)
            })
            .catch(err => {
                res.status(500).send({ message : err.message || "Error Occurred while retriving user information" })
            })
    }

    
})


// Update a user by user id
 router.route('/student/:id').put((req, res)=>{
    if(!req.body){
        return res
            .status(400)
            .send({ message : "Data to update can not be empty"})
    }

    const id = req.params.id;
    Student.findByIdAndUpdate(id, req.body, { useFindAndModify: false})
        .then(data => {
            if(!data){
                res.status(404).send({ message : `Cannot Update user with ${id}. Maybe user not found!`})
            }else{
                res.send(data)
            }
        })
        .catch(err =>{
            res.status(500).send({ message : "Error Update user information"})
        })
})

//Delete student by id
router.route('/student/:id').delete((req, res)=>{
    const id = req.params.id;

    Student.findByIdAndDelete(id)
        .then(data => {
            if(!data){
                res.status(404).send({ message : `Cannot Delete with id ${id}. Maybe id is wrong`})
            }else{
                res.send({
                    message : "Student was deleted successfully!"
                })
            }
        })
        .catch(err =>{
            res.status(500).send({
                message: "Could not delete student with id=" + id
            });
        });
})
export default router

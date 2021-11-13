require("dotenv").config();
const express = require('express');
const mongoose = require('mongoose');
const connectDB = require('./connection');
const studentRoutes = require('./routes/studentRoutes');

const app = express();
app.listen(process.env.PORT, () => {
    console.log("Server is running...!")
})

// setup middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

//setup connection 
connectDB();

app.use(studentRoutes,(req,res,next)=>{
    next();
})
const express = require('express');
const path = require('path');
const connectDB = require('./connection');
const StudentRoute = require('./routes/studentRoute');
const app = express();
connectDB();
app.use(express.urlencoded({extended:false}))
app.use(StudentRoute,(req,res,next)=>{
    next();
})

app.listen(5000, () => {
    console.log("Sever dang chay o port 5000");
})
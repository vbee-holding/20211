require('dotenv').config();
const express = require('express');
const cors = require('cors');
const path = require('path');
const connectDB = require('./connection');
const StudentRoute = require('./routes/studentRoute');
const app = express();
connectDB();
app.use(express.json());
app.use(express.urlencoded({extended:false}))
app.use(StudentRoute,(req,res,next)=>{
    next();
})

const corsOpts = {
    origin: '*',
    methods: [
        'GET',
        'POST',
        'PUT',
        'DELETE'
    ],

    allowedHeaders: [
        'Content-Type',
        'Authorization'
    ],
};

app.use(cors(corsOpts));
app.listen(5000, () => {
    console.log("Sever dang chay o port");
})
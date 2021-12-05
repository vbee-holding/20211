//const express = require('express');
import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import mongoose from 'mongoose'
import studentRoutes from './routes/student.js'
//require('dotenv').config()

const app = express()
const port = process.env.port || 5000

app.use(cors())
app.use(bodyParser.json())
app.use('/', studentRoutes)

app.get('/', (req, res) =>{
    console.log('testing successfully!!!')
    res.send('Ha ')
})




//connected to mongodb
//const URI = process.env.MONGODB_URL;
mongoose.connect('mongodb+srv://lathiha:20194266@cluster0.nq5m6.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {

    useNewUrlParser: true, 
    
    useUnifiedTopology: true 
    
    }, err => {
    if(err) throw err;
    console.log('Connected to MongoDB!!!')
    });

// running on port 
app.listen(port, ()=>{
    console.log(`Server is running on port ${port}`);
}
)
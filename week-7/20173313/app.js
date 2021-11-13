import express from 'express'
import mongoose from 'mongoose'
import bodyParser from 'body-parser'
import {router as studentRoute} from './routes/students.js'
import dotenv from "dotenv"
dotenv.config()

const app = express()
app.use(express.json())
const port = process.env.PORT || 3334


app.use("/api/v1/student", studentRoute)

app.get("/", (req, resp)=>{
    resp.json({
        message: "Hello 2P"
    })
})

mongoose.connect('mongodb://localhost:27017', 
{useNewUrlParser: true}, 
()=> console.log("Connected to DB"));

app.listen(port, ()=>{
    console.log('Server is listening on port: ' + port)
})
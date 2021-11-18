const express= require('express');
const connection=require('./connectToDB');
const studentRoute= require('./routes/studentRoutes');
const app = express();
const dotenv = require('dotenv');
dotenv.config();

app.listen(3000, ()=>{
    console.log("Server is running");
});
connection();
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use('/',studentRoute);


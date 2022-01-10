const express= require('express');
const connection=require('./connect');
const studentRoutes = require('./controller/StudentRoutes');
var cors = require('cors')

const app = express();
app.listen(5555, ()=>{
    console.log("Server is running");
});
connection();

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors());
app.use('/',studentRoutes);
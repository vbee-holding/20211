const express = require('express')
const mongoose = require('mongoose');
const studentRoutes = require('./routes/studentRoutes')
// set up express app
const app = express();
app.listen(4000, () => {
    console.log("Listen on port 4000!")
})

// setup middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

// setup connection 

var connectionString = "mongodb+srv://HungTK:28102001@nodejs.ee6hu.mongodb.net/Project1?retryWrites=true&w=majority";;
mongoose.connect(connectionString, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("Connected to database"))
    .catch(() => console.log("fail to connect to database"));

app.use('/student', studentRoutes);
app.use((req, res) => {
    res.status(404).json({ 'msg': '404 not found' });
})



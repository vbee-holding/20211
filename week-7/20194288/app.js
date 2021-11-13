const express= require('express');
const mongoose= require('mongoose');
const bodyParser = require('body-parser');
const handlebars  = require('express-handlebars');
const sinhvien= require('./models/SinhVien');
const app = express();
const port = 3000;
app.listen(port, ()=>{
    console.log("Server is running");
});
const url="mongodb+srv://HuanNH:123@cluster0.jcbet.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
app.engine('handlebars', handlebars());
app.set('view engine', 'handlebars');
mongoose.connect(url, {useNewUrlParser: true, useNewUrlParser: true,  useUnifiedTopology: true})
    .then(() => console.log("Connected to database"))
    .catch(() => console.log("fail to connect to database"));;
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.get('/ds',(req,res)=>{
    sinhvien.find({},function (err, sinhviens){
        if(!err) res.json(sinhviens);
        res.status(400);
    })
});

app.get('/get-sinh-vien',function (req,res){
    sinhvien.find({ 'hoTen' : req.query.name},function(err,sinhviens){
       if(!err) res.json(sinhviens);
        res.status(400);
    })
});
app.post('/add-sinh-vien',function(req,res){
    const data= req.body;
    const sv=new sinhvien(data);
    sv.save();
    res.send("update thanh cong");
});
app.delete('/xoa-sinh-vien',function(req,res){
    console.log(req.query.name);
    sinhvien.deleteOne({ 'hoTen' : req.query.name},function(err,sinhviens){
        if(!err) res.json(sinhviens);
        res.status(400);
    });
});

app.put('/update-thongtin',(req, res) => {
    const id = req.query.id;
    const temp = req.query;
    sinhvien.updateOne({ _id: id }, { $set: temp })
        .then(result => {
            res.json(sinhviens);
        })
        .catch(error => res.json(error));
});



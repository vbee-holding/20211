const SinhVien = require('./models/SinhVien')
const mongooseToObject = require('../util/mongoose')

class index   {
    async GetSinhVien(req, res, next) {
        await SinhVien.find({})
            .then(SinhVien => {
                res.json(mongooseToObject.multipleMongooseToObject(SinhVien))
            })

    }

    async GetOneSinhVien (req, res, next) {
        let s = req.params.MSSV;
        await SinhVien.findOne({MSSV : s})
            .then(SinhVien => {
                res.json(mongooseToObject.mongooseToObject(SinhVien))
            })
    } 


    async PostSinhVien (req, res, next) {
        let tmp = req.body;
        await SinhVien.create(tmp);
        res.redirect('/SinhVien');
        
    }

    async PutSinhVien (req, res, next) {
        let tmp = req.params;
        await SinhVien.findOneAndUpdate({MSSV : tmp.MSSV}, req.body);
        SinhVien.findOne({MSSV : tmp.MSSV})
            .then(SinhVien => {
                res.json(mongooseToObject.mongooseToObject(SinhVien))
            })

    }

    async DeleteOneSinhVien (req, res, next) {
        let tmp = req.params.MSSV;
        await SinhVien.deleteMany({MSSV : tmp});
        res.send(`Deleted MSSV : ${tmp}`);
    } 


}



module.exports = new index();


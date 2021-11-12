var express = require('express');
var router = express.Router();
let SinhVien= require('../controllers/SinhVienController')

/* GET home page. */
router.get('/', SinhVien.GetSinhVien);
router.post('/', SinhVien.PostSinhVien);
router.put('/:MSSV', SinhVien.PutSinhVien);
router.delete('/:MSSV', SinhVien.DeleteOneSinhVien);
router.get('/:MSSV', SinhVien.GetOneSinhVien);




module.exports = router;

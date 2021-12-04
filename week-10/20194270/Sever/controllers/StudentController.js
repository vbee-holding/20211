const Student = require('./models/Student')
const mongooseToObject = require('../util/mongoose')

class StudentRouter   {
    async getStudents(req, res, next) {
        try{
            const students = mongooseToObject.multipleMongooseToObject(await Student.find());
            res.json({
                success : true,
                data : students,
            });
        }
        catch (error) {
            res.json({
                success: false,
                error : error,
            });
        }
    }

    async getStudent (req, res, next) {
        const { mssv }= req.params;
        try {
            const student =  mongooseToObject.mongooseToObject(await Student.findOne({ mssv }));
            res.json({
                success : true,
                data : student,
            })
        }
        catch (error) {
            res.json({
                success: false,
                error : error,
            });
        }
    } 


    async postStudent (req, res, next) {
        const student = req.body;
        try {
            if( await Student.findOne({mssv : student.mssv})) {
                res.json({
                    success : false,
                    error : "Student exists"
                });
            }
            else {
                await Student.create(student);
                res.json({
                    success: true,
                    data : student,
                });
            }
        }
        catch (error) {
            res.json({
                success: false,
                error : error,
            });
        }
    }

    async putStudent (req, res, next) {
        const { mssv } = req.params;
        const student = req.body; 
        if(mssv !== student.mssv) {
            res.json({
                success : false,
                error: 'MSSV không được thay đổi',
            });
        }
        else {
            try {
                await Student.findOneAndUpdate({ mssv }, student); 
                res.json({
                    success: true,
                    data : student,
                });
            }
            catch (error) {
                res.json({
                    success: false,
                    error : error,
                });
            }
        }   
    }

    async deleteStudent (req, res, next) {
        const { mssv } = req.params;
        try {
            await Student.deleteOne({ mssv });
            res.json({
                success: true,
                message : 'Delete successfully'
            });
        }
        catch (error) {
            res.json({
                success: false,
                error : error,
            });
        }
    } 
}

module.exports = new StudentRouter();


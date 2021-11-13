let User = require('../model/model');
getAllStudent = async (req, res) => {
    try {
        const result = await Student.find().sort({ createdAt: -1 });
        res.json(result);
    } catch (error) {
        res.json(error);
    }
}
module.exports = { getAllUser}

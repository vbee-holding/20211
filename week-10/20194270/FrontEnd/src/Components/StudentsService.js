const axios = require('axios');

class StudentsService {
    
    url = 'http://localhost:4000/Students/';

    getStudents = async () => {
        try {
            const res = await axios.get(this.url);
            return res.data;
        }
        catch (err) {
            console.error(err)
        }
    }

    getStudent = async (MSSV) => {
        try {
            const res = await axios.get(this.url + MSSV);
            return res.data;
        }
        catch (err) {
            console.error(err)
        }
    }

    postStudent = async (student) => {
        try {
            const res = await axios.post(this.url, student);
            return res.data;
        }
        catch (error) {
            console.error(error)
        }
    }

    putStudent = async (MSSV, student) => {
        try {
            const res = await axios.put(this.url + MSSV, student);
            return res.data;
        }
        catch (error) {
            console.error(error)
        }
    }

    deleteStudent = async (MSSV) => {
        try {
            const res = await axios.delete(this.url + MSSV);
            return res.data;
        }
        catch (error) {
            console.error(error)
        }
    }



}

export default new StudentsService();

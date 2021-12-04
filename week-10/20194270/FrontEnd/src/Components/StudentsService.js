const axios = require('axios');

class StudentsService {
    
    url = 'http://localhost:4000/students/';

    getStudents = async () => {
        try {
            const res = await axios.get(this.url);
            return res.data;
        }
        catch (err) {
            console.error(err)
        }
    }

    getStudent = async (mssv) => {
        try {
            const res = await axios.get(this.url + mssv);
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

    putStudent = async (mssv, student) => {
        try {
            const res = await axios.put(this.url + mssv, student);
            return res.data;
        }
        catch (error) {
            console.error(error)
        }
    }

    deleteStudent = async (mssv) => {
        try {
            const res = await axios.delete(this.url + mssv);
            return res.data;
        }
        catch (error) {
            console.error(error)
        }
    }



}

export default new StudentsService();

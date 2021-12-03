import axios from 'axios';

class StudentService {

    static instance = null;
    api = null;

    static getInstance() {
        if (StudentService.instance == null) {
            StudentService.instance = new StudentService();
            
        }
        return StudentService.instance;
    }

    constructor() {
        this.api = axios.create({
            baseURL: 'http://localhost:3334/api/v1/student'
        });
    }

    async get(studentId) {
        let res = await this.api.get("/" + studentId)
        return res.data
    }

    async getAll(){
        let res = await this.api.get("/", {
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json',
              },
        })
        return res.data
    }

    async add(studentInfo) {
        let res = await this.api.post("/", studentInfo);
        return res.data
    }

    async edit(studentInfo) {
        let res = await this.api.put("/" + studentInfo.studentId, 
        studentInfo);
        return res.data
    }

    async delete(studentId) {
        let res = await this.api.delete("/" + studentId);
        return res.data
    }
}

export default StudentService;


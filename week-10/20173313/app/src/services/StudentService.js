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
        // this.api.interceptors.response.use((response) => new RestReponse(response.data), (error) => {
        //     throw error;
        // });
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
// let res = await new StudentService().api.get()


let data = {
    studentId: 20170003,
    name: 'Hoang Van C',
    class: 'KHMT-04',
    generation: 'K62',
    email: 'HoangVanB@email.com',
    phone: '09123457',
    image: 'https://example.com/avatar2',
    address: 'Thanh Xuan - Ha Noi',
  }

// console.log(await StudentService.getInstance().delete(20170003))
// console.log(await StudentService.getInstance().getAll())

export default StudentService;


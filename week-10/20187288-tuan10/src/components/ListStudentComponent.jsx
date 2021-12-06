import React, { Component } from 'react'
import StudentService from '../services/StudentService'

class ListStudentComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
                Students: []
        }
        this.addStudent = this.addStudent.bind(this);
        this.editStudent = this.editStudent.bind(this);
        this.deleteStudent = this.deleteStudent.bind(this);
    }

    deleteStudent(id){
        StudentService.deleteStudent(id).then( res => {
            this.setState({Students: this.state.Students.filter(Student => Student.id !== id)});
        });
    }
    viewStudent(id){
        this.props.history.push(`/view-Student/${id}`);
    }
    editStudent(id){
        this.props.history.push(`/add-Student/${id}`);
    }

    componentDidMount(){
        StudentService.getStudent().then((res) => {
            this.setState({ Students: res.data});
        });
    }

    addStudent(){
        this.props.history.push('/add-Student/_add');
    }

    render() {
        return (
            <div>
                <div classs="columm"><center>
                 <h2 className="mt-4">Danh Sách Sinh Viên</h2></center>
                 <div className = "row">
                    <button className="btn btn-primary" onClick={this.addStudent}>Thêm</button>
                 </div>
                 <br></br>
                        <table className = "table mt-4">
                            <thead>
                            <tr><center>
                <th scope="col">#</th>
                <th scope="col"><center>Họ tên</center></th>
                <th scope="col"><center>MSSV</center></th>
                <th scope="col"><center>Lớp</center></th>
                <th scope="col"><center>Khóa</center></th>
                <th scope="col"><center>Email</center></th>
                <th scope="col"><center>Số điện thoại</center></th>
                <th scope="col"><center>Ảnh</center></th>
                <th scope="col"><center>Địa chỉ</center></th>
            </center></tr>
                            </thead>
                            <tbody>
                                
                                {
                                    this.state.Students.map(
                                        Student => 
                                        
                                        <tr key = {Student.name}>
                                             <td> { Student.mssv} </td>   
                                             <td> { Student.class} </td>  
                                             <td> {Student.generation}</td>
                                             <td> { Student.email} </td>  
                                             <td> {Student.telephone}</td>
                                             <div> <img src="{ this.state.Student.image }" alt="avatar"  height="170" width="140" /></div>
                                             <td> {Student.address}</td>
                                             <td>
                                                 <center>
                                                 <button onClick={ () => this.editStudent(Student.id)} className="btn btn-info">Cập nhật </button>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.deleteStudent(Student.id)} className="btn btn-danger">Xóa </button>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.viewStudent(Student.id)} className="btn btn-info">Xem </button>
                                                 </center>
                                                 
                                             </td>
                                        </tr>
                                    )
                                }
                            </tbody>
                        </table>

                 </div>

            </div>
        )
    }
}

export default ListStudentComponent
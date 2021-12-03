import React, { Component } from 'react';
import { Student } from "./Student";
import $ from "jquery"
import StudentService from '../../services/StudentService';
import './studentmng.css';
import StudentForm from './StudentForm';
import Popup from 'reactjs-popup';
import { makeNotification } from '../../helper/NotificationHelper';

const studentService = StudentService.getInstance()

export class StudentManager extends Component {

    constructor(props) {
        super(props);
        this.state = {
            students: []
        };
        this.handleAddStudent = this.handleAddStudent.bind(this)
        this.onDeleteStudent = this.onDeleteStudent.bind(this)
    }

    async componentDidMount() {
        this.setState({ students: await studentService.getAll() })
    }

    async handleAddStudent(event, studentInfo){
        let res = await studentService.add(studentInfo)
        this.reloadTable()
        makeNotification(res)
    }

    reloadTable(){
        studentService.getAll().then(res => this.setState({students:res}))
    }

    onDeleteStudent(event){
        this.reloadTable()
    }

    render() {
        let onDeleteStudent = this.onDeleteStudent
        let students = $.map(this.state.students, function(student, i){
            return (
                <Student student={student} onDeleteStudent={onDeleteStudent}/>
            );
        });
        return (
        
            <div>
                <div class="navbar">
                    <a>Trang chủ</a>
                    <a class="active">Quản lý sinh viên</a>
                    <a>Thống kê</a>

                </div>
                <div class="top-content">
                    <h3 style={{textAlign: 'center', fontSize: '40px', paddingTop: '20px'}}>Danh sách sinh viên</h3>

                    <Popup modal trigger={<button class="btn-action" style={{float: 'right', marginRight: '10px'}}><i class="fa fa-plus">Thêm sinh viên</i></button>}> 
                        <StudentForm onSubmit={this.handleAddStudent}></StudentForm>
                    </Popup>
                </div>
                <table>
                    <thead>
                        <tr>
                            <th>Họ tên</th>
                            <th>MSSV</th>
                            <th>Lớp</th>
                            <th>Khóa</th>
                            <th>Email</th>
                            <th>Số điện thoại</th>
                            <th>Địa chỉ</th>
                            <th>Ảnh</th>
                            <th>Hành động</th>
                        </tr>
                    </thead>
                    {students}
                </table>
            </div>
        );
    }
}
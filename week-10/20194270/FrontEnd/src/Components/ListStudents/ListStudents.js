import React from "react";
import './ListStudents.css'
import StudentsService from "../StudentsService";
import Student from "./Student";
import TableHeader from "./TableHeader"; 
import TableFooter from "./TableFooter";

class ListStudents extends React.Component{
    constructor (props) {
        super(props);
        this.state = {
            studentsInfo : [],
            isUpdate : true,
        }
        this.loadData();
    }

    render () {
        return (
            <div>
                <h1>Danh Sách Sinh Viên</h1>
                <div className = "students-list">
                    <table>
                        <tbody>
                            <TableHeader key = "Header"></TableHeader>
                            {this.renderTableStudent()}
                            <TableFooter key = "Footer" updateFromChild = {this.updateFromChild} ></TableFooter>
                        </tbody>
                    </table>
                </div>
            </div>
            
        )
    }

    loadData = async () => {
        const students = await StudentsService.getStudents();
        this.setState ({
            studentsInfo : students.data,
        })
    }

    renderTableStudent = () => {
        
        return this.state.studentsInfo.map((student, index) => {
            return (
                <Student key = {index} student = {student} updateFromChild = {this.updateFromChild}  ></Student>
            )   // hạn chế sử dụng index làm khóa - sau sẽ đổi thành MSSV khi xử lý MSSV không trùng ở sever
        })
    }

    updateFromChild = async () => {
        this.loadData();   
    }
}

export default ListStudents;
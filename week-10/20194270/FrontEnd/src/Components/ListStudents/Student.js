import React from "react";
import './ListStudents.css'
import StudentsService from "../StudentsService";
import UpdateStudent from "./UpdateStudent";

class Student extends React.Component{
    
    constructor (props) {
        super(props);
        this.state = {
            isUpdate : false,
        };
    }

    onClickUpdate = () => {
        this.setState ({
            isUpdate : true,
        })
    }

    onClickDetail = () => {
        console.log("Detail " + this.props.student.mssv);
    }

    onClickDelete = async () => {
        await StudentsService.deleteStudent(this.props.student.mssv);
        this.props.updateFromChild();
    }

    renderStudent = () => {
        return (
                <tr >
                    <td  key = "1" className = "name-column">{this.props.student.name}</td>
                    <td  key = "2" className = "mssv-column">{this.props.student.mssv}</td>
                    <td  key = "3" className = "class-column">{this.props.student.class}</td>
                    <td  key = "4" className = "course-column">{this.props.student.course}</td>
                    <td  key = "5" className = "email-column">{this.props.student.email}</td>
                    <td  key = "6" className = "phone-number-column">{this.props.student.phoneNumber}</td>
                    <td  key = "7" className = "address-column">{this.props.student.address}</td>
                    <td  key = "8" className = "update-column"><button onClick = {this.onClickUpdate}>Sửa đổi</button></td>
                    <td  key = "9" className = "delete-column"><button onClick = {this.onClickDelete} >Xóa</button></td>
                    <td  key = "10"className = "detail-column"><button onClick = {this.onClickDetail}>Chi tiết</button></td>
                </tr>
            )
        
    }

    EndUpdate = () => {
        this.props.updateFromChild();
        this.setState({
            isUpdate : false,
        })
    }

    render () {
        if(this.state.isUpdate) return <UpdateStudent EndUpdate = {this.EndUpdate} student = {this.props.student}/>;
        else return this.renderStudent(); // để gọi hàm cập nhật lại giá trị hiển thị vì this.props đã thay đổi
            
    }
}

export default Student;
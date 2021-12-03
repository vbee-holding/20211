import React from "react";
import './ListStudents.css'
import StudentsService from "../StudentsService";


class Student extends React.Component{
    
    constructor (props) {
        super(props);
        this.state = {
            isUpdate : false,

        };
        
    }

    render () {
        if(this.state.isUpdate){
            return this.createUpdateInput();
        }else {
            return this.createStudent(); // để gọi hàm cập nhật lại giá trị hiển thị vì this.props đã thay đổi
        }
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

    onClicCancerUpdate = () => {
        this.setState ({
            isUpdate : false,
        })
    }

    onClickSubmitUpdate = async () => {
        const data = {
            name : document.getElementById("nameUpdate").value || this.props.student.name,
            mssv : document.getElementById("mssvUpdate").value || this.props.student.mssv,
            class : document.getElementById("classUpdate").value || this.props.student.class,
            course: document.getElementById("courseUpdate").value || this.props.student.course,
            email : document.getElementById("emailUpdate").value || this.props.student.email,
            phoneNumber : document.getElementById("phoneNumberUpdate").value || this.props.student.phoneNumber,
            imagePath : this.props.student.imagePath,
            address : document.getElementById("addressUpdate").value || this.props.student.address,
            
        }
        await StudentsService.putStudent(this.props.student.mssv, data);
        this.props.updateFromChild();
        this.setState ({
            isUpdate : false,
            
        })
    }

    createStudent = () => {
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

    createUpdateInput = () => {
        return (
            <tr >
                <td  key = "1" className = "name-column" >
                    <input 
                        type = "text"
                        className = "name-input" 
                        id = "nameUpdate" 
                        defaultValue = {this.props.student.name}>
                    </input>
                </td>
                <td  key = "2" className = "mssv-column" >
                    <input 
                        type = "number" 
                        className = "mssv-input" 
                        id = "mssvUpdate" 
                        defaultValue = {this.props.student.mssv} >
                    </input>
                </td>
                <td  key = "3" className = "class-column" >
                    <input 
                        type = "text" 
                        className = "class-input" 
                        id = "classUpdate"  
                        defaultValue = {this.props.student.class}>
                    </input>
                </td>
                <td  key = "4" className = "course-column" >
                    <input type = "text" 
                        className = "course-input" 
                        id = "courseUpdate" 
                        defaultValue = {this.props.student.course}>
                    </input>
                </td>
                <td  key = "5" className = "email-column" >
                    <input 
                        type = "email" 
                        className = "email-input" 
                        id = "emailUpdate"  
                        defaultValue = {this.props.student.email}>
                    </input>
                </td>
                <td  key = "6" className = "phone-number-column" >
                    <input 
                        type = "number" 
                        className = "phone-number-input" 
                        id = "phoneNumberUpdate"  
                        defaultValue = {this.props.student.phoneNumber}>
                    </input>
                </td>
                <td  key = "7" className = "address-column" >
                    <input 
                        type = "text" 
                        className = "address-input" 
                        id = "addressUpdate"  
                        defaultValue = {this.props.student.address}>
                    </input>
                </td>
                <td  key = "8" className = "update-column" >
                    <button onClick = {this.onClickSubmitUpdate}>Lưu</button></td>
                <td  key = "9" className = "delete-column" >
                    <button onClick = {this.onClicCancerUpdate} >Hủy</button></td>
                <td  key = "10"className = "detail-column" ></td>
            </tr>
        )

    }

}

export default Student;
import React from "react";
import './ListStudents.css'
import StudentsService from "../StudentsService";

class UpdateStudent extends React.Component {
    constructor (props) {
        super (props);
        this.state = {
            name : this.props.student.name,
            mssv : this.props.student.mssv,
            class : this.props.student.class,
            course : this.props.student.course,
            email : this.props.student.email,
            phoneNumber : this.props.student.phoneNumber,
            imagePath : this.props.student.imagePath,
            address :this.props.student.address,
        };
    }

    handleInputChange = (event) => {
        const { name, value } = event.target;
        this.setState({[name]:value});
    }

    

    onClickSubmitUpdate = async () => {
        const student = this.state;
        const res = await StudentsService.putStudent(this.props.student.mssv, student);
        if(!res.success) alert(res.error);
        this.props.EndUpdate();
    }

    onClicCancerUpdate = () => {
        this.props.EndUpdate();
    }
    
    
    render () {
        return (
                <tr>
                <td key="11" className="name-column">
                    <input 
                        type="text" 
                        className="name-input" 
                        name="name" 
                        value={this.state.name}
                        onChange={this.handleInputChange}>
                    </input>
                </td>
                <td key="21" className="mssv-column">
                    <input 
                        type="number" 
                        className="mssv-input" 
                        name="mssv"  
                        value={this.state.mssv}
                        onChange={this.handleInputChange}>
                    </input>
                </td>
                <td key="31" className="class-column">
                    <input 
                        type="text" 
                        className="class-input" 
                        name="class"  
                        value={this.state.class}
                        onChange={this.handleInputChange}>
                    </input>
                </td>
                <td key="41" className="course-column">
                    <input 
                        type="text" 
                        className="course-input" 
                        name="course"  
                        value={this.state.course}
                        onChange={this.handleInputChange}>
                    </input>
                </td>
                <td key="51" className="email-column">
                    <input 
                        type="email" 
                        className="email-input" 
                        name="email"  
                        value={this.state.email}
                        onChange={this.handleInputChange}>
                    </input>
                </td>
                <td key="61" className="phone-number-column">
                    <input 
                        type="number" 
                        className="phone-number-input" 
                        name="phoneNumber"  
                        value={this.state.phoneNumber}
                        onChange={this.handleInputChange}>
                    </input>
                </td>
                <td key="71" className="address-column">
                    <input 
                        type="text" 
                        className="address-input" 
                        name="address"  
                        value={this.state.address}
                        onChange={this.handleInputChange}>
                    </input>
                </td>
                <td key="8" className="update-column" >
                    <button onClick = {this.onClickSubmitUpdate}>Lưu</button></td>
                <td key="9" className="delete-column" >
                    <button onClick = {this.onClicCancerUpdate} >Hủy</button></td>
                <td key="10"className="detail-column" ></td>
                </tr>
        )
        
    }

}

export default UpdateStudent;

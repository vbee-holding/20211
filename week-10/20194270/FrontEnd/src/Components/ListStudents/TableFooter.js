import React from "react";
import './ListStudents.css'
import StudentsService from "../StudentsService";

class TableFooter extends React.Component {
    constructor (props) {
        super (props);
        this.state = {
                name : '' ,
                mssv : '',
                class : '',
                course : '',
                email : '',
                phoneNumber : '',
                address :'',
        };
    }

    handleInputChange = (event) => {
        const { name, value } = event.target;
        this.setState({
            [name]:value
        });
    }

    onClickSubmitAdd = async () => {
        const student = this.state;
        if(!student.name|| !student.mssv ) alert('Your name and your MSSV can\'t be null ');
        else { 
            const res = await StudentsService.postStudent(student) ;
            if(!res.success) {
                alert(res.error);
            }
            else {
                this.props.updateFromChild();   
            }
            
        }
     }

     render () {
        return (
                <tr >
                <td key="11" className="name-column">
                    <input 
                        type="text" 
                        className="name-input" 
                        name="name" 
                        onChange={this.handleInputChange}>
                    </input>
                </td>
                <td key="21" className="mssv-column">
                    <input 
                        type="number" 
                        className="mssv-input" 
                        name="mssv"  
                        onChange={this.handleInputChange}>
                    </input>
                </td>
                <td key="31" className="class-column">
                    <input 
                        type="text" 
                        className="class-input" 
                        name="class"  
                        onChange={this.handleInputChange}>
                    </input>
                </td>
                <td key="41" className="course-column">
                    <input 
                        type="text" 
                        className="course-input" 
                        name="course"  
                        onChange={this.handleInputChange}>
                    </input>
                </td>
                <td key="51" className="email-column">
                    <input 
                        type="email" 
                        className="email-input" 
                        name="email"  
                        onChange={this.handleInputChange}>
                    </input>
                </td>
                <td key="61" className="phone-number-column">
                    <input 
                        type="number" 
                        className="phone-number-input" 
                        name="phoneNumber"  
                        onChange={this.handleInputChange}>
                    </input>
                </td>
                <td key="71" className="address-column">
                    <input 
                        type="text" 
                        className="address-input" 
                        name="address"  
                        onChange={this.handleInputChange}>
                    </input>
                </td>
                <td key="81" className="Input-column">
                    <button onClick={this.onClickSubmitAdd}>Thêm</button></td>
                </tr>
        )
        
    }
    

}

export default TableFooter;
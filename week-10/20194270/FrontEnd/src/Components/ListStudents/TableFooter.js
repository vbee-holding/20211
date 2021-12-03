import React from "react";
import './ListStudents.css'
import StudentsService from "../StudentsService";

class TableFooter extends React.Component {
    
    render () {
        return (
                <tr >
                <td  key = "11" className = "name-column" >
                    <input 
                        type = "text" 
                        className = "name-input" 
                        id = "nameInput" 
                        defaultValue = "Tran Duc Hai" 
                        name = "name" 
                        onChange = {this.handleChange}>
                    </input>
                </td>
                <td  key = "21" className = "mssv-column" >
                    <input 
                        type = "number" 
                        className = "mssv-input" 
                        id = "mssvInput" defaultValue = "20194270" 
                        name = "mssv"  
                        onChange = {this.handleChange}>
                    </input>
                </td>
                <td  key = "31" className = "class-column" >
                    <input 
                        type = "text" 
                        className = "class-input" 
                        id = "classInput" 
                        name = "class"  
                        onChange = {this.handleChange}>
                    </input>
                </td>
                <td  key = "41" className = "course-column" >
                    <input 
                        type = "text" 
                        className = "course-input" 
                        id = "courseInput" 
                        name = "course"  
                        onChange = {this.handleChange}>
                    </input>
                </td>
                <td  key = "51" className = "email-column" >
                    <input 
                        type = "email" 
                        className = "email-input" 
                        id = "emailInput" 
                        name = "email"  
                        onChange = {this.handleChange}>
                    </input>
                </td>
                <td  key = "61" className = "phone-number-column" >
                    <input 
                        type = "number" 
                        className = "phone-number-input" 
                        id = "phoneNumberInput" 
                        name = "phoneNumber"  
                        onChange = {this.handleChange}>
                    </input>
                </td>
                <td  key = "71" className = "address-column" >
                    <input 
                        type = "text" 
                        className = "address-input" 
                        id = "addressInput" 
                        name = "address"  
                        onChange = {this.handleChange}>
                    </input>
                </td>
                <td  key = "81" className = "Input-column" >
                    <button onClick = {this.onClickSubmitAdd}>Thêm</button></td>
                </tr>
        )
        
    }


    onClickSubmitAdd = async () => {
        const data = {
            name : document.getElementById("nameInput").value ,
            mssv : document.getElementById("mssvInput").value ,
            class : document.getElementById("classInput").value ,
            course : document.getElementById("courseInput").value,
            email : document.getElementById("emailInput").value ,
            phoneNumber : document.getElementById("phoneNumberInput").value ,
            address : document.getElementById("addressInput").value,
        }

        if(data.name === "" || data.MSSV === "" ) {
            alert('Your name and your MSSV can\'t be null ')
        }
        else { 
            const res = await StudentsService.postStudent(data) ;
            if(res.success === false) {
                alert(res.error);
            }
            else {
                this.props.updateFromChild();   
            }
            
        }
     }


    

}

export default TableFooter;
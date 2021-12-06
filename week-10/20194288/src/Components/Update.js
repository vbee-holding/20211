import {React, useState} from "react";
import axios from "axios";

function Update(props){
    const [student,setStudent]=useState({
        name: "",
        class:"",
        mssv:"",
        generation:"",
        address:"",
        email:"",
        phone:""
    })
    const handleChangeStudent=(e)=>{
        e.preventDefault();
        setStudent({
            ...student,
            [e.target.name]: e.target.value
        })
    }
    const updateStudent=async (student)=>{
        await axios({
            method: 'PUT',
            url: 'http://localhost:5555/update',
            params: student,
            });
        alert("Update thành công!!");
    }
    if(props.showUpdate===true){
        return(
            <>
                <form >
                    <fieldset>
                    <legend>Update:</legend>
                    <label>MSSV của sinh viên:</label><br/>
                    <input type="text" name="mssv" value={student.mssv} onChange={handleChangeStudent}/><br/>
                    <label>Tên Sinh Viên:</label><br/>
                    <input type="text" name="name" value={student.name} onChange={handleChangeStudent}/><br/>
                    <label>Lớp:</label><br/>
                    <input type="text" name="class" value={student.class} onChange={handleChangeStudent}/><br/>
                    <label>Khóa:</label><br/>
                    <input type="text" name="generation" value={student.generation} onChange={handleChangeStudent}/><br/>
                    <label>Email:</label><br/>
                    <input type="text" name="email" value={student.email} onChange={handleChangeStudent}/><br/>
                    <label>Số điện thoại:</label><br/>
                    <input type="text" name="phone" value={student.phone} onChange={handleChangeStudent}/><br/>
                    <label>Địa chỉ:</label><br/>
                    <input type="text" name="address" value={student.address} onChange={handleChangeStudent}/><br/><br/>
                    <input type="submit" value="Submit" onClick={()=>updateStudent(student)}/>
                    </fieldset>
                </form>
            </>
        )
    } else return "";
}
export default Update;

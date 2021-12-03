import React from "react";
import axios from "axios";
import {useState} from "react";

function Add(props){
    const [name,setName]=useState("");
    const [classStudent,setClassStudent]=useState("");
    const [mssv,setMssv]=useState("");
    const [generation,setGeneration]=useState("");
    const [address,setAddress]=useState("");
    const [email,setEmail]=useState("");
    const [phone,setPhone]=useState("");
    const addStudent=async ()=>{
        await axios.post(`http://localhost:5555/add?name=${name}&mssv=${mssv}&class=${classStudent}&generation=${generation}&email=${email}&phone=${phone}&address=${address}`);
    }
    if(props.showAddTable===true){
        return(
            <>
                <form >
                    <fieldset>
                    <legend>Thêm sinh viên:</legend>
                    <label>Tên Sinh Viên:</label><br/>
                    <input type="text" name="name" value={name} onChange={(e)=>setName(e.target.value)}/><br/>
                    <label>MSSV:</label><br/>
                    <input type="text" name="mssv" value={mssv} onChange={(e)=>setMssv(e.target.value)}/><br/>
                    <label>Lớp:</label><br/>
                    <input type="text" name="classStudent" value={classStudent} onChange={(e)=>setClassStudent(e.target.value)}/><br/>
                    <label>Khóa:</label><br/>
                    <input type="text" name="generation" value={generation} onChange={(e)=>setGeneration(e.target.value)}/><br/>
                    <label>Email:</label><br/>
                    <input type="text" name="email" value={email} onChange={(e)=>setEmail(e.target.value)}/><br/>
                    <label>Số điện thoại:</label><br/>
                    <input type="text" name="phone" value={phone} onChange={(e)=>setPhone(e.target.value)}/><br/>
                    <label>Địa chỉ:</label><br/>
                    <input type="text" name="address" value={address} onChange={(e)=>setAddress(e.target.value)}/><br/><br/>
                    <input type="submit" value="Submit" onClick={()=>addStudent()}/>
                    </fieldset>
                </form>
            </>
        )
    } else return "";
}
export default Add;
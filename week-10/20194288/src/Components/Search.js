import React from "react";
import {useState} from "react";
import axios from "axios";
function Search(props){
    const [mssv,setMssv]=useState("");    
    const searchStudent= async(e)=>{
        e.preventDefault();
        const result=await axios.get(`http://localhost:5555/search?mssv=${mssv}`);
        alert(`Tên sinh viên: ${result.data.name} \nMSSV: ${result.data.mssv}\nLớp: ${result.data.class}\nKhóa: ${result.data.generation}\nEmail: ${result.data.email}\nSố điện thoại: ${result.data.phone}\nĐịa chỉ: ${result.data.address}`);
    }
    if(props.showSearch===true){
        return (
            <form>
                <fieldset>
                <legend>Search by ID:</legend>
                <label>MSSV:</label><br/>
                <input type="text" name="mssv" value={mssv} onChange={(e)=>setMssv(e.target.value)}/><br/>
                <input type="submit" value="Submit" onClick={(e)=>searchStudent(e)}/>
                </fieldset>
            </form>
        )
    } else return "";
}
export default Search;
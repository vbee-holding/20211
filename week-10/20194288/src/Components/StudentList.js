import React, {useEffect, useState} from "react";
import axios from "axios";
import AddStudent from "./AddStudent";
import Search from "./Search";
import Update from "./Update"
function StudentList(props){
  const [data, setData]= useState([]);
  const [showAddTable, setShowAddTable]=useState(false);
  const [showSearch, setShowSearch]=useState(false);
  const [showUpdate, setShowUpdate]=useState(false);
  const getAllStudent= async ()=>{
    const result=await axios.get('http://localhost:5555');
    setData(result.data);
  }
  const removeStudent=async (mssv)=>{
    await axios.delete(`http://localhost:5555/delete?mssv=${mssv}`);
    alert("Xóa sinh viên thành công!");
    getAllStudent();
  }
  useEffect(()=>{
    getAllStudent();
  },[]);
    return (
      <>
        <table className="">
            <thead>
              <tr>
                <th className="name">Họ tên</th>
                <th className="mssv">MSSV</th>
                <th className="class">Lớp</th>
                <th className="generation">Khóa</th>
                <th className="email">Email</th>
                <th className="phone">Số điện thoại</th>
                <th className="image">Ảnh</th>
                <th className="address">Địa chỉ</th>
              </tr>
            </thead>
            <tbody>
              {
                data.map((sv,index)=>
                (<tr key={index}>
                  <td className="name">{sv.name}</td>
                  <td className="mssv">{sv.mssv}</td>
                  <td className="class">{sv.class}</td>
                  <td className="generation">{sv.generation}</td>
                  <td className="email">{sv.email}</td>
                  <td className="phone">{sv.phone}</td>
                  <td className="image"><img src="./Photo/Sv.jpg" alt="Ảnh sinh viên" className="image-student"/></td>
                  <td className="address">{sv.address}</td>
                  <td className= "button">
                    <button className="button-student" onClick={()=>removeStudent(sv.mssv)}  >Xóa</button>
                  </td>
                </tr>)
                )
              }
            </tbody>
          </table>
          <button onClick={()=>setShowAddTable(!showAddTable)}>{showAddTable?"Tắt bảng thêm" :"Thêm sinh viên "}</button>
          <AddStudent showAddTable={showAddTable} />
          <button onClick={()=>setShowSearch(!showSearch)}>{showSearch?"Tắt tìm kiếm" :"Tìm kiếm sinh viên "}</button>
          <Search showSearch={showSearch}/>
          <button onClick={()=>setShowUpdate(!showUpdate)}>{showUpdate?"Tắt cập nhật" :"Cập nhật sinh viên "}</button>
          <Update showUpdate={showUpdate}/>
        </>
    )
}
export default StudentList;
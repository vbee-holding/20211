import React, { useEffect, useState } from 'react';
import './App.css';
import NewStudent from './NewStudent/NewStudent';
import icon from '../src/icon/pencil.png';
import rac from '../src/icon/rac.png';
import axios from 'axios';


function App() {

  async function deleteMember(infor) {
    const url = 'http://localhost:5000/api/student/' + infor._id;
    await axios.delete(url, {
        headers: {'Content-Type': 'application/json'} ,
    })
  }

  const [posts, setPosts] = useState([])
  const [status, setStatus] = useState(false)
  const [isNew, setIsNew] = useState(false)
  const [index, setIndex] = useState(-1)
  const [loading, setLoading] = useState(false)
  const [value, setValue] = useState();

  const refresh = ()=>{
     getData();
  }
  
  useEffect(() => {
    getData();
  }, [loading])

 async function getData() {
   await axios.get(`http://localhost:5000/api/student`, { headers: {'Content-Type': 'application/json'} })
    .then(res => {
      setPosts(res.data.data)
    })
  }

  return (
    <div className="App">
      <div className="container">
        <div className="head">
          <h2>List student</h2>
          <a className="Newmember" href="#" onClick={() => {
            setIsNew(true);
            setStatus(true);
            setIndex(-1);
          }}>New member</a>
        </div>
        <table className="table">
          <thead>
            <tr>
              <th style={{ paddingRight: '20px' }}>STT</th>
              <th style={{ paddingRight: '250px' }}>Thông tin</th>
              <th style={{ paddingRight: '150px' }}>MSSV</th>
              <th style={{ paddingRight: '150px' }}>Lớp</th>
              <th style={{ paddingRight: '100px' }}>Khóa</th>
              <th style={{ paddingRight: '100px' }}>Số điện thoại</th>
              <th style={{ paddingRight: '100px' }}>Địa chỉ</th>
              <th></th>
            </tr>
          </thead>

          <tbody>
            {
              posts.map((post, index) =>{
                return(
                  <tr key = {index}>
              <td>{index}</td>
              <td>
                <div className="infor" >
                  <img className="avatar" src="https://cdn.icon-icons.com/icons2/1736/PNG/512/4043260-avatar-male-man-portrait_113269.png" />
                  <div className="nameAndEmail">
                    <div className="nameIn">{post.hoten}</div>
                    <div className="email" >{post.email}</div>
                  </div>
                </div>
              </td>
              <td>{post.mssv}</td>
              <td>{post.lop}</td>
              <td>{post.khoa}</td>
              <td>{post.sodienthoai}</td>
              <td><div>{post.address}</div></td>
              <td><a href="#"><img className="icon" src={icon} onClick={() => {
                setStatus(false);
                setIsNew(true);
                setIndex(index);
              }} /></a>
              <a href="#"><img className="iconrac" src={rac} onClick={() => {
                deleteMember(post);
                refresh();
                setLoading(!loading)
              }}></img></a>
              </td>
            </tr>
                ) 
              })
            }
          </tbody>

        </table>

        <div className="barbottom">
          <div className="comment">Showing all data</div>

        </div>
          
      </div>
      {
        (isNew) &&
        <NewStudent callback = {() => {
          refresh()
          setIsNew(false)
          setLoading(!loading)
        }} status = {status} infor={posts[index]} index = {index} ></NewStudent> 
      }
    </div>
  );
}

export default App;

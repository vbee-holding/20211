import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

const User = () => {
  const [user, setUser] = useState({
    name: "",
    studentID: "",
    studentclass: "",  
    course: "",
    address: "",
    email: "",
    gender: ""
  });
  const { id } = useParams();
  useEffect(() => {
    loadUser();
  }, []);
  const loadUser = async () => {
    const res = await axios.get(`http://localhost:3003/users/${id}`);
    setUser(res.data);
  };
  return (
    <div className="container py-4">
      <Link className="btn btn-primary" to="/">
        Tat ca cac sinh vien
      </Link>
      <h1 className="display-4">User Id: {id}</h1>
      <hr />
      <ul className="list-group w-50">
        <li className="list-group-item">name: {user.name}</li>
        <li className="list-group-item">studentID: {user.studentID}</li>
        <li className="list-group-item">studentclass: {user.studentclass}</li>
        <li className="list-group-item">course: {user.course}</li>
        <li className="list-group-item">email: {user.email}</li>
        <li className="list-group-item">address: {user.address}</li>
        <li className="list-group-item">gender: {user.gender}</li>
      </ul>
    </div>
  );
};

export default User;

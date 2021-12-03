import React from "react";
import './DetailStudent.css'
const axios = require('axios'); 

class DetailStudent extends React.Component {
    render () {
        return (
            <div>
                <h1>Thông tin chi tiết sinh viên</h1>
                <div class="detail">
                    <img className = "detail__image" src="https://taimienphi.vn/tmp/cf/aut/hinh-nen-vit-avatar-anh-vit-cute-ngoc-nghech-1.jpg" alt="Student image" al />
                    <h1>Trần Đức Hải</h1>
                    <p>Mã số sinh viên : 20194270</p>
                    <p>Lớp : IT2 - 01</p>
                    <p>Khóa : 64</p>
                    <p>Email : hai_duc@gmail.com</p>
                    <p>Số điện thoại : 0098663521</p>
                    <p>Địa chỉ : Hoài Đức Hà Nội</p>

                </div>
            </div> 
        )
    }
}

export default DetailStudent;
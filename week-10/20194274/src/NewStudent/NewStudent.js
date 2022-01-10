import { useState } from 'react';
import './NewStudent.css'
import axios from 'axios';

function NewStudent(props) {

    async function handleEditMember() {
        const url = 'http://localhost:5000/api/student/' + props.infor._id;
        await axios.put(url, info, {
            headers: { 'Content-Type': 'application/json' },
        }).then(res => {
            props.callBackCancel();
        })
    }

    async function handleAddMember() {
        const url = 'http://localhost:5000/api/student/';
        await axios.post(url, info, {
            headers: { 'Content-Type': 'application/json' },
        }).then(res => {
            props.callBackCancel();
        })

    }

    const [info, setInfor] = useState({
        _id: (props.infor !== undefined) ? props.infor._id : '',
        hoten: (props.infor !== undefined) ? props.infor.hoten : '',
        mssv: (props.infor !== undefined) ? props.infor.mssv : '',
        lop: (props.infor !== undefined) ? props.infor.lop : '',
        khoa: (props.infor !== undefined) ? props.infor.khoa : '',
        email: (props.infor !== undefined) ? props.infor.email : '',
        diachi: (props.infor !== undefined) ? props.infor.diachi : '',
        sodienthoai: (props.infor !== undefined) ? props.infor.sodienthoai : '',
        anh: (props.infor !== undefined) ? props.infor.anh : '',
    })

    const handleChangeStudent = (e) => {
        setInfor((prev) => ({ ...prev, [e.target.name]: e.target.value }));

    }
    console.log(props.diachi);

    return (
        <div className="newStudent">
            {props.status === true ?
                <h2>New member</h2> :
                <h2>Edit member</h2>
            }
            <div className="wrapper">
                <img className="avatar" src={info.anh} href="#" alt="Chua load anh" ></img>
                <div>
                    <div className='divngoai'>
                        <lable>Họ và tên</lable>
                        <div className="bao">
                            <input name="hoten" value={info.hoten}
                                onChange={handleChangeStudent}
                            ></input>
                        </div>
                    </div>
                    <div className='divngoai'>
                        <lable>MSSV</lable>
                        <div className="bao">
                            <input name="mssv" value={info.mssv}
                                onChange={handleChangeStudent}
                            ></input>
                        </div>
                    </div>
                    <div className='divngoai'>
                        <lable>Lớp</lable>
                        <div className="bao">
                            <input name="lop" value={info.lop}
                                onChange={handleChangeStudent}
                            ></input>
                        </div>
                    </div>
                    <div className='divngoai'>
                        <lable>Khóa</lable>
                        <div className="bao">
                            <input name="khoa" value={info.khoa}
                                onChange={handleChangeStudent}
                            ></input>
                        </div>
                    </div>
                    <div className='divngoai'>
                        <lable>Email</lable>
                        <div className="bao">
                            <input name="email" value={info.email}
                                onChange={handleChangeStudent}
                            ></input>
                        </div>
                    </div>
                    <div className='divngoai'>
                        <lable>Số điện thoại</lable>
                        <div className="bao">
                            <input name="sodienthoai" value={info.sodienthoai}
                                onChange={handleChangeStudent}
                            ></input>
                        </div>
                    </div>
                    <div className='divngoai'>
                        <lable>Ảnh</lable>
                        <div className="bao">
                            <input name="anh" value={info.anh}
                                onChange={handleChangeStudent}
                            ></input>
                        </div>
                    </div>
                    <div className='divngoai'>
                        <lable>Địa chỉ</lable>
                        <div className="bao">
                            <input name="diachi" value={info.diachi}
                                onChange={handleChangeStudent}
                            ></input>
                        </div>
                    </div>
                </div>
            </div>

            <div className='footer'>
                <a className="button" href="#" onClick={() => {
                    if (props.index === -1) handleAddMember();
                    else handleEditMember();
                }}>Lưu</a>
                <a className="button" href="#" onClick={props.callBackCancel}>Thoát</a>
            </div>
        </div>
    )
}

export default NewStudent;
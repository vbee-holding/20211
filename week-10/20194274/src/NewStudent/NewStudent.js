import { useState } from 'react';
import './NewStudent.css'
import axios from 'axios';

function NewStudent(props) {

    async function editMenber() {
        const url = 'http://localhost:5000/api/student/' + props.infor._id;
        const data = {
            _id: info._id,
            hoten: info.hoten,
            mssv: info.mssv,
            lop: info.lop,
            khoa: info.khoa,
            email: info.email,
            address: info.address,
            sodienthoai: info.sodienthoai,
            anh: info.anh,
        }
        await axios.put(url, data, {
            headers: {'Content-Type': 'application/json'} ,
        })

    }

    async function newMenber() {
        const url = 'http://localhost:5000/api/student/';
    
        const data = {
            hoten: info.hoten,
            mssv: info.mssv,
            lop: info.lop,
            khoa: info.khoa,
            email: info.email,
            address: info.address,
            sodienthoai: info.sodienthoai,
            anh: info.anh,
        }
        await axios.post(url, data, {
            headers: {'Content-Type': 'application/json'} ,
        })

    }

    const [display, setDisplay] = useState(true)
    const [info, setInfor] = useState({
        _id: (props.infor !== undefined) ? props.infor._id : '',
        hoten: (props.infor !== undefined) ? props.infor.hoten : '',
        mssv: (props.infor !== undefined) ? props.infor.mssv : '',
        lop: (props.infor !== undefined) ? props.infor.lop : '',
        khoa: (props.infor !== undefined) ? props.infor.khoa : '',
        email: (props.infor !== undefined) ? props.infor.email : '',
        address: (props.infor !== undefined) ? props.infor.address : '',
        sodienthoai: (props.infor !== undefined) ? props.infor.sodienthoai : '',
        anh: (props.infor !== undefined) ? props.infor.anh : '',
    })

    if (display === true)
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
                                <input value={info.hoten}
                                    onChange={(event) => setInfor({ ...info, hoten: event.target.value })}
                                ></input>
                            </div>
                        </div>
                        <div className='divngoai'>
                            <lable>MSSV</lable>
                            <div className="bao">
                                <input value={info.mssv}
                                    onChange={(event) => setInfor({ ...info, mssv: event.target.value })}
                                ></input>
                            </div>
                        </div>
                        <div className='divngoai'>
                            <lable>Lớp</lable>
                            <div className="bao">
                                <input value={info.lop}
                                    onChange={(event) => setInfor({ ...info, lop: event.target.value })}
                                ></input>
                            </div>
                        </div>
                        <div className='divngoai'>
                            <lable>Khóa</lable>
                            <div className="bao">
                                <input value={info.khoa}
                                    onChange={(event) => setInfor({ ...info, khoa: event.target.value })}
                                ></input>
                            </div>
                        </div>
                        <div className='divngoai'>
                            <lable>Email</lable>
                            <div className="bao">
                                <input value={info.email}
                                    onChange={(event) => setInfor({ ...info, email: event.target.value })}
                                ></input>
                            </div>
                        </div>
                        <div className='divngoai'>
                            <lable>Số điện thoại</lable>
                            <div className="bao">
                                <input value={info.sodienthoai}
                                    onChange={(event) => setInfor({ ...info, sodienthoai: event.target.value })}
                                ></input>
                            </div>
                        </div>
                        <div className='divngoai'>
                            <lable>Ảnh</lable>
                            <div className="bao">
                                <input value={info.anh}
                                    onChange={(event) => setInfor({ ...info, anh: event.target.value })}
                                ></input>
                            </div>
                        </div>
                        <div className='divngoai'>
                            <lable>Địa chỉ</lable>
                            <div className="bao">
                                <input value={info.address}
                                    onChange={(event) => setInfor({ ...info, address: event.target.value })}
                                ></input>
                            </div>
                        </div>
                    </div>

                </div>

                <div className='footer'>
                    <a className="button" href="#" onClick={() => {
                        if (props.index === -1 ) newMenber();
                            else editMenber();
                        props.callback();
                    }}>Lưu</a>
                    <a className="button" href="#" onClick={props.callback}>Thoát</a>
                </div>
            </div>
        )
    else return (<div></div>);
}

export default NewStudent;
import React, { Component } from 'react'
import StudentService from '../services/StudentService'

class ViewStudentComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            Student: {}
        }
    }

    componentDidMount(){
        StudentService.getStudentById(this.state.id).then( res => {
            this.setState({Student: res.data});
        })
    }

    render() {
        return (
            <div>
                <br></br>
                <div className = "card col-md-6 offset-md-3">
                    <h3 className = "text-center"> Thông Tin Chi Tiết</h3>
                    <div className = "card-body">
                        <div className = "row">
                            <label> MSSV:  &ensp; </label>
                            <div> { this.state.Student.mssv }</div>
                        </div>
                        <div className = "row">
                            <label> Tên:  &ensp; </label>
                            <div> { this.state.Student.name }</div>
                        </div>
                        <div className = "row">
                            <label> Lớp: &ensp; </label>
                            <div> { this.state.Student.class }</div>
                        </div>
                        <div className = "row">
                            <label> Khóa:  &ensp; </label>
                            <div> { this.state.Student.generation }</div>
                        </div>
                        <div className = "row">
                            <label> Email:&ensp;  </label>
                            <div> { this.state.Student.email }</div>
                        </div>
                        <div className = "row">
                            <label> Số điện thoại:  &ensp; </label>
                            <div> { this.state.Student.telephone }</div>
                        </div>
                        <div className = "row">
                            <label> Ảnh:  &ensp; </label>
                            <div> <img src="{ this.state.Student.image }" alt="avatar"  height="170" width="140" /></div>
                        </div>
                        <div className = "row">
                            <label> Địa chỉ:  &ensp; </label>
                            <div> { this.state.Student.address }</div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default ViewStudentComponent
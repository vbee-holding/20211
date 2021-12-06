import React, { Component } from 'react';
import "./popup.studentform.css"
import 'bootstrap/dist/css/bootstrap.min.css';

export class StudentForm extends Component {

    constructor(props) {
        super(props);
        this.state = props.student || {}
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        console.log(this.props.history);
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        this.state[name] = value
        this.setState(this.state)
    }

    handleSubmit(event) {
        this.props.onSubmit(event, this.state)
    }

    render() {
        return (
            <div style={{ borderColor: 'coral' }}>
                <div className="popup box box-info">
                    <div className="box-header with-border">
                        <h3 className="box-title">Chỉnh sửa thông tin sinh viên</h3>
                    </div>
                    <form className="form-horizontal">
                        <div className="box-body">
                            <div className="form-group">
                                <label htmlFor="name" className="col-sm-3 control-label">Họ và tên</label>
                                <div className="col-sm-9">
                                    <input className="form-control"
                                        onChange={this.handleInputChange}
                                        value={this.state.name}
                                        name="name"
                                        id="name"
                                        placeholder="Họ Và Tên"
                                        required
                                        type="text" />
                                </div>
                            </div>
                            <div className="form-group">
                                <label htmlFor="class" className="col-sm-3 control-label">MSSV</label>
                                <div className="col-sm-9">
                                    <input className="form-control"
                                        onChange={this.handleInputChange}
                                        value={this.state.studentId}
                                        name="studentId"
                                        id="studentId"
                                        placeholder="Mã số sinh viên"
                                        required
                                        type="text" />
                                </div>
                            </div>
                            <div className="form-group">
                                <label htmlFor="class" className="col-sm-3 control-label">Lớp</label>
                                <div className="col-sm-9">
                                    <input className="form-control"
                                        onChange={this.handleInputChange}
                                        value={this.state.class}
                                        name="class"
                                        id="class"
                                        placeholder="Lớp"
                                        required
                                        type="text" />
                                </div>
                            </div>
                            <div className="form-group">
                                <label htmlFor="class" className="col-sm-3 control-label">Khóa</label>
                                <div className="col-sm-9">
                                    <input className="form-control"
                                        onChange={this.handleInputChange}
                                        value={this.state.generation}
                                        name="generation"
                                        id="generation"
                                        placeholder="Khóa"
                                        required
                                        type="text" />
                                </div>
                            </div>
                            <div className="form-group">
                                <label htmlFor="contactNumber" className="col-sm-3 control-label">SĐT</label>
                                <div className="col-sm-9">
                                    <input className="form-control"
                                        onChange={this.handleInputChange}
                                        value={this.state.phone}
                                        name="phone"
                                        id="phone"
                                        placeholder="SĐT"
                                        required
                                        type="text" />
                                </div>
                            </div>
                            <div className="form-group">
                                <label htmlFor="address" className="col-sm-3 control-label">Địa chỉ</label>
                                <div className="col-sm-9">
                                    <input className="form-control"
                                        onChange={this.handleInputChange}
                                        value={this.state.address}
                                        name="address"
                                        id="address"
                                        placeholder="Địa chỉ"
                                        required
                                        type="address" />
                                </div>
                            </div>
                            <div className="form-group">
                                <label htmlFor="inputEmail3" className="col-sm-3 control-label">Email</label>
                                <div className="col-sm-9">
                                    <input className="form-control"
                                        onChange={this.handleInputChange}
                                        value={this.state.email}
                                        name="email"
                                        id="email"
                                        placeholder="Email"
                                        required
                                        type="email" />
                                </div>
                            </div>
                            <div className="form-group">
                                <label htmlFor="inputEmail3" className="col-sm-3 control-label">Link Ảnh</label>
                                <div className="col-sm-9">
                                    <input className="form-control"
                                        onChange={this.handleInputChange}
                                        value={this.state.image}
                                        name="image"
                                        id="image"
                                        placeholder="Ảnh"
                                        required
                                        type="text" />
                                </div>
                            </div>
                        </div>
                    </form>
                    <button className="btn btn-info pull-right" onClick={this.handleSubmit}>Submit</button>
                </div>
            </div>
        );
    }
}


export default StudentForm;
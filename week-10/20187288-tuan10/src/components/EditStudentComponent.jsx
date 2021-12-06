import React, { Component } from 'react'
import StudentService from '../services/StudentService';

class EditStudentComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            name: '',
            mssv: '',
            class: '',
            generation: '',
            telephone: '',
            email: '',
            image: '',
            address: '',
        }
        this.changeNameHandler = this.changeNameHandler.bind(this);
        this.changeMSSVHandler = this.changeMSSVHandler.bind(this);
        this.changeClassHandler = this.changeClassHandler.bind(this);
        this.changeGenerationHandler = this.changeGenerationHandler.bind(this);
        this.changeTelephoneHandler = this.changeTelephoneHandler.bind(this);
        this.changeEmailHandler = this.changeEmailHandler.bind(this);
        this.changeImageHandler = this.changeImageHandler.bind(this);
        this.changeAddressHandler = this.changeAddressHandler.bind(this);
        this.EditStudent = this.EditStudent.bind(this);
    }

    componentDidMount(){
        StudentService.getStudentById(this.state.id).then( (res) =>{
            let Student = res.data;
            this.setState({name: Student.name,
                mssv: Student.mssv,
                class: Student.class,
                generation: Student.generation,
                email : Student.email,
                telephone : Student.telephone,
                image : Student.image,
                address : Student.address
            });
        });
    }

    EditStudent = (e) => {
        e.preventDefault();
        let Student = {name: this.state.name, mssv: this.state.mssv, class: this.state.class, generation: this.state.generation, email: this.state.email, telephone: this.telephone, image: this.image, address: this.address};
        console.log('Student => ' + JSON.stringify(Student));
        console.log('id => ' + JSON.stringify(this.state.id));
        StudentService.EditStudent(Student, this.state.id).then( res => {
            this.props.history.push('/Students');
        });
    }
    
    changeNameHandler= (event) => {
        this.setState({name: event.target.value});
    }

    changeMSSVHandler= (event) => {
        this.setState({mssv: event.target.value});
    }

    changeClassHandler= (event) => {
        this.setState({class: event.target.value});
    }

    changeGenerationHandler= (event) => {
        this.setState({generation: event.target.value});
    }

    changeEmailHandler= (event) => {
        this.setState({email: event.target.value});
    }

    changeTelephoneHandler= (event) => {
        this.setState({telephone: event.target.value});
    }

    changeImageHandler= (event) => {
        this.setState({image: event.target.value});
    }

    changeAddressHandler= (event) => {
        this.setState({address: event.target.value});
    }

    cancel(){
        this.props.history.push('/Students');
    }

    render() {
        return (
            <div>
                <br></br>
                   <div className = "container">
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3">
                                <h3 className="text-center">Cập Nhật</h3>
                                <div className = "card-body">
                                    <form>
                                        <div className = "form-group">
                                        <label> Tên: </label>
                                            <input placeholder="name" name="name" className="form-control" 
                                                value={this.state.name} onChange={this.changeNameHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> MSSV: </label>
                                            <input placeholder="MSSV" name="mssv" className="form-control" 
                                                value={this.state.mssv} onChange={this.changeMSSVHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Lớp: </label>
                                            <input placeholder="Tên" name="class" className="form-control" 
                                                value={this.state.class} onChange={this.changeClassHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Khóa: </label>
                                            <input placeholder="Tuổi" name="generation" className="form-control" 
                                                value={this.state.generation} onChange={this.changeGenerationHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Email: </label>
                                            <input placeholder="Email Address" name="email" className="form-control" 
                                                value={this.state.email} onChange={this.changeEmailHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Số điện thoại: </label>
                                            <input placeholder="telephone" name="telephone" className="form-control" 
                                                value={this.state.telephone} onChange={this.changeTelephoneHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Ảnh: </label>
                                            <input placeholder="image" name="image" className="form-control" 
                                                value={this.state.image} onChange={this.changeImageHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Địa chỉ: </label>
                                            <input placeholder="address" name="address" className="form-control" 
                                                value={this.state.address} onChange={this.changeAdressHandler}/>
                                        </div>

                                        <button className="btn btn-success" onClick={this.EditStudent}>Lưu lại</button>
                                        <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Hủy</button>
                                    </form>
                                </div>
                            </div>
                        </div>

                   </div>
            </div>
        )
    }
}

export default EditStudentComponent
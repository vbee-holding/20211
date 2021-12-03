import React, { Component } from 'react'
import StudentService from '../services/StudentService';

class CreateStudentComponent extends Component {
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
        this.changeTelephonelHandler = this.changeTelephoneHandler.bind(this);
        this.changeEmailHandler = this.changeEmailHandler.bind(this);
        this.changeImageHandler = this.changeImageHandler.bind(this);
        this.changeAddressHandler = this.changeAddressHandler.bind(this);
        this.saveOrEditStudent = this.saveOrEditStudent.bind(this);
    }

    componentDidMount(){

        if(this.state.id === '_add'){
            return
        }else{
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
    }
    saveOrEditStudent = (e) => {
        e.preventDefault();
        let Student = {name: this.state.name, mssv: this.state.mssv, class: this.state.class, generation: this.state.generation, email: this.state.email, telephone: this.telephone, image: this.image, address: this.address};
        console.log('Student => ' + JSON.stringify(Student));

        if(this.state.id === '_add'){
            StudentService.createStudent(Student).then(res =>{
                this.props.history.push('/Students');
            });
        }else{
            StudentService.updateStudent(Student, this.state.id).then( res => {
                this.props.history.push('/Students');
            });
        }
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

    getTitle(){
        if(this.state.id === '_add'){
            return <h2 className="text-center">Thêm Sinh Viên</h2>
        }else{
            return <h2 className="text-center">Cập Nhật</h2>
        }
    }
    render() {
        return (
            <div>
                <br></br>
                   <div className = "container">
                        <div className = "row">
                            <div className = "mt-4">
                                {
                                    this.getTitle()
                                }
                                <div className = "mt-4">
                                    <form>
                                    <div className = "mt-4">
                                            <label> Tên: </label>
                                            <input placeholder="" name="name" className="form-control" 
                                                value={this.state.name} onChange={this.changeNameHandler}/>
                                        </div>
                                        <div className = "mt-4">
                                            <label> MSSV: </label>
                                            <input placeholder="" name="mssv" className="form-control" 
                                                value={this.state.mssv} onChange={this.changeMSSVHandler}/>
                                        </div>
                                        <div className = "mt-4">
                                            <label> Lớp: </label>
                                            <input placeholder="" name="class" className="form-control" 
                                                value={this.state.class} onChange={this.changeClassHandler}/>
                                        </div>
                                        <div className = "mt-4">
                                            <label> Khóa: </label>
                                            <input placeholder="" name="generation" className="form-control" 
                                                value={this.state.generation} onChange={this.changeGenerationHandler}/>
                                        </div>
                                        <div className = "mt-4">
                                            <label> Email: </label>
                                            <input placeholder="" name="email" className="form-control" 
                                                value={this.state.email} onChange={this.changeEmailHandler}/>
                                        </div>
                                        <div className = "mt-4">
                                            <label> Số điện thoại: </label>
                                            <input placeholder="" name="telephone" className="form-control" 
                                                value={this.state.telephone} onChange={this.changeTelephoneHandler}/>
                                        </div>
                                        <div className = "mt-4">
                                            <label> Ảnh: </label>
                                            <input placeholder="" name="image" className="form-control" 
                                                value={this.state.image} onChange={this.changeImageHandler}/>
                                        </div>
                                        <div className = "mt-4">
                                            <label> Địa chỉ: </label>
                                            <input placeholder="" name="address" className="form-control" 
                                                value={this.state.address} onChange={this.changeAdressHandler}/>
                                        </div>

                                        <button className="btn btn-success" onClick={this.saveOrEditStudent}>Lưu lại</button>
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

export default CreateStudentComponent
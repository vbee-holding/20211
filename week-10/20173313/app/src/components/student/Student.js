import React, { Component } from 'react';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css'
import StudentService from '../../services/StudentService';
import StudentForm from './StudentForm';
import Popup from "reactjs-popup";
import { makeNotification } from '../../helper/NotificationHelper';

let studentService = StudentService.getInstance()

export class Student extends Component {

    constructor(props) {
        super(props);
        this.state = props.student
        this.handleDelete = this.handleDelete.bind(this);
        this.handleEdit = this.handleEdit.bind(this)
        this.editPopup = React.createRef();
    }

    handleDelete(event) {
        event.preventDefault();
        confirmAlert({
            title: 'Xóa sinh viên',
            message: 'Bạn có chắc chắn muốn xóa ?',
            confirmLabel: 'Xác nhận',
            cancelLabel: 'Hủy',
            onConfirm: () => {
                studentService.delete(this.props.student.studentId).then(
                    res => {
                        this.props.onDeleteStudent(event)
                        makeNotification(res)
                    }
                )
            },
        });
    }

    handleEdit(event, data) {
        this.setState(data)
        studentService.edit(data).then(res => makeNotification(res))
    }

    render() {
        let student = this.state
        return (
            <tbody>
                <tr>
                    <td>{student.name}</td>
                    <td>{student.studentId}</td>
                    <td>{student.class}</td>
                    <td>{student.generation}</td>
                    <td>{student.email}</td>
                    <td>{student.phone}</td>
                    <td>{student.address}</td>
                    <td><img src={student.image} class="student-avatar" width="20"
                        height="20" /></td>
                    <td>
                        <button class="btn-action btn-delete" onClick={this.handleDelete}><i class="fa fa-trash"> Delete</i></button>
                        <Popup ref={this.editPopup} modal trigger={<button class="btn-action"><i class="fa fa-edit"> Edit</i></button>}>
                            <StudentForm student={student} onSubmit={this.handleEdit} />
                        </Popup>
                    </td>
                </tr>
            </tbody>
        );
    }
}
import {
  Container,
  Dialog,
  DialogTitle,
  DialogContent,
  TextField,
  DialogActions,
  Button
} from "@mui/material"
import { useState } from "react";
import { createStudent } from '../services/StudentService';

export default function CreateData({ open, handleClose }) {
  const [student, setStudent] = useState({
    name: '',
    studentID: '',
    class: '',
    khoa: '',
    email: '',
    phoneNumber: '',
    imgPath: '',
    address: ''
  })

  const handleChange = (event) => {
    const { value, name } = event.target;
    setStudent({ ...student, [name]: value })
  }

  const handleSubmit = async (student) => {
    const success = await createStudent(student);
    if (success) {
      alert("Thêm mới sinh viên thành công!");
      handleClose();
      window.location.reload();
    } else {
      alert("Thêm mới sinh viên thất bại!");
    }
  }

  return (
    <Container>
      <Dialog open={open}>
        <DialogTitle>Thêm mới sinh viên</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            name="name"
            label="Họ và tên"
            fullWidth
            value={student.name}
            variant="standard"
            onChange={handleChange}
          />
          <TextField
            autoFocus
            margin="dense"
            name="studentID"
            label="Mã số sinh viên"
            fullWidth
            value={student.studentID}
            variant="standard"
            onChange={handleChange}
          />
          <TextField
            autoFocus
            margin="dense"
            name="class"
            label="Lớp"
            fullWidth
            value={student.class}
            variant="standard"
            onChange={handleChange}
          />
          <TextField
            autoFocus
            margin="dense"
            name="khoa"
            label="Khóa"
            fullWidth
            value={student.khoa}
            variant="standard"
            onChange={handleChange}
          />
          <TextField
            autoFocus
            margin="dense"
            name="email"
            label="Email"
            type="email"
            fullWidth
            value={student.email}
            variant="standard"
            onChange={handleChange}
          />
          <TextField
            autoFocus
            margin="dense"
            name="phoneNumber"
            label="Số điện thoại"
            fullWidth
            value={student.phoneNumber}
            variant="standard"
            onChange={handleChange}
          />
          <TextField
            autoFocus
            margin="dense"
            name="address"
            label="Địa chỉ"
            fullWidth
            value={student.address}
            variant="standard"
            onChange={handleChange}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => handleClose("create")}>Cancel</Button>
          <Button onClick={() => handleSubmit(student)}>Submit</Button>
        </DialogActions>
      </Dialog>
    </Container>
  )
}
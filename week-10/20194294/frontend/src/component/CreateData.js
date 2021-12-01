import { Container, Dialog, DialogTitle, DialogContent, TextField, DialogActions, Button } from "@mui/material"
import { useState } from "react";
import axios from 'axios';
export default function CreateData(props) {
  const { open, handleClose } = props
  const [student, setStudent] = useState({
    name: '',
    studentCode: '',
    className: '',
    course: '',
    email: '',
    phoneNumber: '',
    address: '',
    imagePath: ''
  })

  const handleChange = (event) => {
    const value = event.target.value;
    setStudent({ ...student, [event.target.name]: value })
  }

  const handleSubmit = async () => {
    const result = await axios.post('http://localhost:4000/student/create', student)
    if (result.data.success) {
      alert("Thêm mới sinh viên thành công!");
      props.handleClose();
      window.location.reload();
    } else {
      alert("Thêm mới sinh viên thất bại!");
    }
  }

  return (
    <Container>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Thêm mới sinh viên</DialogTitle>
        <DialogContent>
          <div style={{ height: '60px', marginLeft: '40%' }}>
            <img src={student.imagePath} alt="Failed to load" width="60px" height="60px" />
          </div>
          <TextField
            autoFocus
            margin="dense"
            name="imagePath"
            label="Link ảnh"
            fullWidth
            value={student.imagePath}
            variant="standard"
            onChange={handleChange}
          />
          <TextField
            autoFocus
            margin="dense"
            name="studentCode"
            label="Mã số sinh viên"
            fullWidth
            value={student.studentCode}
            variant="standard"
            onChange={handleChange}
          />
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
            name="className"
            label="Lớp"
            fullWidth
            value={student.className}
            variant="standard"
            onChange={handleChange}
          />
          <TextField
            autoFocus
            margin="dense"
            name="course"
            label="Khóa"
            fullWidth
            value={student.course}
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
          <Button onClick={props.handleClose}>Cancel</Button>
          <Button onClick={() => { handleSubmit() }}>Submit</Button>
        </DialogActions>
      </Dialog>
    </Container>
  )
}
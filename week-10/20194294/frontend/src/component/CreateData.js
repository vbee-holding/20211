import { Container, Dialog, DialogTitle, DialogContent, TextField, DialogActions, Button } from "@mui/material"
import { useState } from "react";
import axios from 'axios';
export default function CreateData(props) {
  const { open, handleClose } = props

  const [name, setName] = useState('');
  const [studentCode, setStudentCode] = useState('');
  const [className, setClassName] = useState('');
  const [course, setCourse] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [address, setAddress] = useState('');
  const [profileImage, setProfileImage] = useState('')

  const handleSubmit = async () => {
    const newStudent = {
      name: name,
      studentCode: studentCode,
      className: className,
      course: course,
      email: email,
      phoneNumber: phoneNumber,
      address: address,
      imagePath: profileImage
    };
    const result = await axios.post('http://localhost:4000/student/create', newStudent)
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
            <img src={profileImage} alt="Failed to load" width="60px" height="60px" />
          </div>
          <TextField
            autoFocus
            margin="dense"
            id="image"
            label="Link ảnh"
            fullWidth
            variant="standard"
            onChange={e => setProfileImage(e.target.value)}
          />
          <TextField
            autoFocus
            margin="dense"
            id="mssv"
            label="Mã số sinh viên"
            fullWidth
            variant="standard"
            onChange={e => setStudentCode(e.target.value)}
          />
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Họ và tên"
            fullWidth
            variant="standard"
            onChange={e => setName(e.target.value)}
          />
          <TextField
            autoFocus
            margin="dense"
            id="lop"
            label="Lớp"
            fullWidth
            variant="standard"
            onChange={e => setClassName(e.target.value)}
          />
          <TextField
            autoFocus
            margin="dense"
            id="khoa"
            label="Khóa"
            fullWidth
            variant="standard"
            onChange={e => setCourse(e.target.value)}
          />
          <TextField
            autoFocus
            margin="dense"
            id="email"
            label="Email"
            type="email"
            fullWidth
            variant="standard"
            onChange={e => setEmail(e.target.value)}
          />
          <TextField
            autoFocus
            margin="dense"
            id="sdt"
            label="Số điện thoại"
            fullWidth
            variant="standard"
            onChange={e => setPhoneNumber(e.target.value)}
          />
          <TextField
            autoFocus
            margin="dense"
            id="diaChi"
            label="Địa chỉ"
            fullWidth
            variant="standard"
            onChange={e => setAddress(e.target.value)}
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
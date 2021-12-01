import { Container, Dialog, DialogTitle, DialogContent, TextField, DialogActions, Button } from "@mui/material"
import { useState } from "react";
import axios from "axios";
export default function EditData(props) {
  const { id, open, handleClose } = props
  const [name, setName] = useState(id.name);
  const [studentCode, setStudentCode] = useState(id.studentCode);
  const [className, setClassName] = useState(id.className);
  const [course, setCourse] = useState(id.course);
  const [email, setEmail] = useState(id.email);
  const [phoneNumber, setPhoneNumber] = useState(id.phoneNumber);
  const [address, setAddress] = useState(id.address);
  const [profileImage, setProfileImage] = useState(id.imagePath)

  const handleSubmit = async () => {
    console.log(studentCode)
    console.log(name)
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
    const result = await axios.put("http://localhost:4000/student/" + id._id, newStudent);
    if (result.data.success) {
      alert("Chỉnh sửa sinh viên thành công!");
      props.handleClose();
      window.location.reload();
    } else {
      alert("Chỉnh sửa sinh viên thất bại!");
    }
  }

  return (
    <Container>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Chỉnh sửa thông tin sinh viên</DialogTitle>
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
            defaultValue={id.imagePath}
            onChange={e => setProfileImage(e.target.value)}
          />
          <TextField
            autoFocus
            margin="dense"
            id="mssv"
            label="Mã số sinh viên"
            fullWidth
            variant="standard"
            defaultValue={id.studentCode}
            onChange={e => setStudentCode(e.target.value)}
          />
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Họ và tên"
            fullWidth
            variant="standard"
            defaultValue={id.name}
            onChange={e => setName(e.target.value)}
          />
          <TextField
            autoFocus
            margin="dense"
            id="lop"
            label="Lớp"
            fullWidth
            variant="standard"
            defaultValue={id.className}
            onChange={e => setClassName(e.target.value)}
          />
          <TextField
            autoFocus
            margin="dense"
            id="khoa"
            label="Khóa"
            fullWidth
            variant="standard"
            defaultValue={id.course}
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
            defaultValue={id.email}
            onChange={e => setEmail(e.target.value)}
          />
          <TextField
            autoFocus
            margin="dense"
            id="sdt"
            label="Số điện thoại"
            fullWidth
            variant="standard"
            defaultValue={id.phoneNumber}
            onChange={e => setPhoneNumber(e.target.value)}
          />
          <TextField
            autoFocus
            margin="dense"
            id="diaChi"
            label="Địa chỉ"
            fullWidth
            variant="standard"
            defaultValue={id.address}
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
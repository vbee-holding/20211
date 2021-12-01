import { Container, Dialog, DialogTitle, DialogContent, TextField, DialogActions, Button } from "@mui/material"
import { useEffect, useState } from "react";
import axios from "axios";
export default function EditData(props) {
  const { data, open, handleClose } = props
  const [student, setStudent] = useState({...data});
  const handleChange = (event) => {
    const value = event.target.value
    setStudent({ ...student, [event.target.name]: value })
  }
  
  const handleSubmit = async () => {
    const result = await axios.put("http://localhost:4000/student/" + data._id, student);
    if (result.data.success) {
      alert("Chỉnh sửa sinh viên thành công!");
      props.handleClose();
      window.location.reload();
    } else {
      alert("Chỉnh sửa sinh viên thất bại!");
    }
  }

  useEffect(()=>{
    setStudent({...data})
  },[data])

  return (
    <Container>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Chỉnh sửa thông tin sinh viên</DialogTitle>
        <DialogContent>
          <div style={{ height: '60px', marginLeft: '40%' }}>
            <img src={(student.imagePath)} alt="Failed to load" width="60px" height="60px" />
          </div>
          <TextField
            autoFocus
            margin="dense"
            name="imagePath"
            label="Link ảnh"
            fullWidth
            variant="standard"
            defaultValue={student.imagePath}
            onChange={handleChange}
          />
          <TextField
            autoFocus
            margin="dense"
            name="studentCode"
            label="Mã số sinh viên"
            fullWidth
            variant="standard"
            defaultValue={student.studentCode}
            onChange={handleChange}
          />
          <TextField
            autoFocus
            margin="dense"
            name="name"
            label="Họ và tên"
            fullWidth
            variant="standard"
            defaultValue={student.name}
            onChange={handleChange}
          />
          <TextField
            autoFocus
            margin="dense"
            name="className"
            label="Lớp"
            fullWidth
            variant="standard"
            defaultValue={student.className}
            onChange={handleChange}
          />
          <TextField
            autoFocus
            margin="dense"
            name="course"
            label="Khóa"
            fullWidth
            variant="standard"
            defaultValue={student.course}
            onChange={handleChange}
          />
          <TextField
            autoFocus
            margin="dense"
            name="email"
            label="Email"
            type="email"
            fullWidth
            variant="standard"
            defaultValue={student.email}
            onChange={handleChange}
          />
          <TextField
            autoFocus
            margin="dense"
            name="phoneNumber"
            label="Số điện thoại"
            fullWidth
            variant="standard"
            defaultValue={student.phoneNumber}
            onChange={handleChange}
          />
          <TextField
            autoFocus
            margin="dense"
            name="address"
            label="Địa chỉ"
            fullWidth
            variant="standard"
            defaultValue={student.address}
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
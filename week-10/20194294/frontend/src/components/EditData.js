import {
  Container,
  Dialog,
  DialogTitle,
  DialogContent,
  TextField,
  DialogActions,
  Button, Box
} from "@mui/material"
import { updateStudent } from "../services/StudentService";

export default function EditData({ data: student, open, setData, handleClose }) {

  const handleChange = (event) => {
    const { value, name } = event.target
    setData({ ...student, [name]: value })
  }

  const handleSubmit = async (id, student) => {
    const success = await updateStudent(id, student)
    if (success) {
      alert("Chỉnh sửa sinh viên thành công!");
      handleClose();
      window.location.reload();
    } else {
      alert("Chỉnh sửa sinh viên thất bại!");
    }
  }

  return (
    <Container>
      <Dialog open={open} >
        <DialogTitle>Chỉnh sửa thông tin sinh viên</DialogTitle>
        <DialogContent>
          <Box style={{ height: '60px', marginLeft: '40%' }}>
            <img src={student.imagePath} alt="Failed to load" width="60px" height="60px" />
          </Box>
          <TextField
            autoFocus
            margin="dense"
            name="imagePath"
            label="Link ảnh"
            fullWidth
            variant="standard"
            value={student.imagePath}
            onChange={handleChange}
          />
          <TextField
            autoFocus
            margin="dense"
            name="studentCode"
            label="Mã số sinh viên"
            fullWidth
            variant="standard"
            value={student.studentCode}
            onChange={handleChange}
          />
          <TextField
            autoFocus
            margin="dense"
            name="name"
            label="Họ và tên"
            fullWidth
            variant="standard"
            value={student.name}
            onChange={handleChange}
          />
          <TextField
            autoFocus
            margin="dense"
            name="className"
            label="Lớp"
            fullWidth
            variant="standard"
            value={student.className}
            onChange={handleChange}
          />
          <TextField
            autoFocus
            margin="dense"
            name="course"
            label="Khóa"
            fullWidth
            variant="standard"
            value={student.course}
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
            value={student.email}
            onChange={handleChange}
          />
          <TextField
            autoFocus
            margin="dense"
            name="phoneNumber"
            label="Số điện thoại"
            fullWidth
            variant="standard"
            value={student.phoneNumber}
            onChange={handleChange}
          />
          <TextField
            autoFocus
            margin="dense"
            name="address"
            label="Địa chỉ"
            fullWidth
            variant="standard"
            value={student.address}
            onChange={handleChange}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => handleClose("edit")}>Cancel</Button>
          <Button onClick={() => handleSubmit(student._id, student)}>Submit</Button>
        </DialogActions>
      </Dialog>
    </Container>
  )
}
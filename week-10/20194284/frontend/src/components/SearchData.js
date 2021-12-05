import {
  Container,
  Dialog,
  DialogTitle,
  DialogContent,
  TextField,
  DialogActions,
  Button
} from "@mui/material";
import { useEffect, useState } from 'react';
import { getStudentByID } from "../services/StudentService";

export default function SearchData({id: id , open, handleClose }) {

  const [student, setStudents] = useState(null)
  const fetchStudent = async (id) => {
    const data = await getStudentByID(id);
      setStudents(data)
  }

  useEffect(() => {
    fetchStudent()
  }, [])

  return (
    <Container>
      <Dialog open={open}>
        <DialogTitle>Thông tin sinh viên</DialogTitle>
        <DialogContent>
          {/* <TextField
            autoFocus
            margin="dense"
            id="MSSV"
            label="MSSV"
            fullWidth
            variant="standard"
            value={student.studentID}
            InputProps={{
              readOnly: true,
            }}
          /> 
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Họ và tên"
            fullWidth
            variant="standard"
            value={student.name}
            InputProps={{
              readOnly: true,
            }}
          />
          <TextField
            autoFocus
            margin="dense"
            id="lop"
            label="Lớp"
            fullWidth
            variant="standard"
            value={student.class}
            InputProps={{
              readOnly: true,
            }}
          />
          <TextField
            autoFocus
            margin="dense"
            id="khoa"
            label="Khóa"
            fullWidth
            variant="standard"
            value={student.khoa}
            InputProps={{
              readOnly: true,
            }}
          />
          <TextField
            autoFocus
            margin="dense"
            id="email"
            label="Email"
            type="email"
            fullWidth
            variant="standard"
            value={student.email}
            InputProps={{
              readOnly: true,
            }}
          />
          <TextField
            autoFocus
            margin="dense"
            id="sdt"
            label="Số điện thoại"
            fullWidth
            variant="standard"
            value={student.phoneNumber}
            InputProps={{
              readOnly: true,
            }}
          />
          <TextField
            autoFocus
            margin="dense"
            id="diaChi"
            label="Địa chỉ"
            fullWidth
            variant="standard"
            value={student.address}
            InputProps={{
              readOnly: true,
            }} */}
          {/* /> */}
        </DialogContent>
        <DialogActions>
          <Button onClick={() => handleClose("view")}>Back</Button>
        </DialogActions>
      </Dialog>
    </Container>
  )
}
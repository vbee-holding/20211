import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { useEffect, useState } from 'react';
import { Button, Typography } from '@mui/material';
import { deleteStudent, getAllStudent } from '../services/StudentService';

export default function DataTable({ handleOpen }) {
  const [students, setStudents] = useState(null)
  let count = 0;// số thứ tự sinh viên

  const fetchStudent = async () => {
    const data = await getAllStudent();
    setStudents(data)
  }

  const handleDelete = async (id) => {
    const success = await deleteStudent(id);
    if (success) {
      alert("Xóa sinh viên thành công!");
      window.location.reload();
    } else {
      alert("Xóa sinh viên thất bại!");
    }
  }

  useEffect(() => {
    fetchStudent()
  }, [])

  return (
    <Paper sx={{ width: '100%', overflow: 'hidden', marginTop: '20px' }}>
      <TableContainer sx={{ maxHeight: 530 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              <TableCell>STT</TableCell>
              <TableCell>MSSV</TableCell>
              <TableCell>Họ và tên</TableCell>
              <TableCell>Lớp</TableCell>
              <TableCell>Khóa</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Số điện thoại</TableCell>
              <TableCell>Địa chỉ</TableCell>
              <TableCell>Chỉnh sửa</TableCell>
              <TableCell>Xem thông tin</TableCell>
              <TableCell>Xóa</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {students && students.map((student) => (
              <TableRow key={student._id}>
                <TableCell>{++count}</TableCell>
                <TableCell>{student.studentCode}</TableCell>
                <TableCell>{student.name}</TableCell>
                <TableCell>{student.className}</TableCell>
                <TableCell>{student.course}</TableCell>
                <TableCell>{student.email}</TableCell>
                <TableCell>{student.phoneNumber}</TableCell>
                <TableCell>{student.address}</TableCell>
                <TableCell><Button variant="contained" onClick={() => handleOpen("edit", student)} color="warning">Chỉnh sửa</Button></TableCell>
                <TableCell><Button variant="contained" onClick={() => handleOpen("view", student)} >Chi tiết</Button></TableCell>
                <TableCell><Button variant="contained" onClick={() => handleDelete(student._id)} color="error">Xóa</Button></TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      {!students && <Typography variant="h2">Loading data....</Typography>}
    </Paper>
  );
}
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
import axios from 'axios';

export default function DataTable(props) {
  const [data, setData] = useState(null)
  let i = 0, j = 0;

  const fetchStudent = async () => {
    const result = await axios.get('http://localhost:4000/student/');
    setData(result.data.data)
  }

  const handleDelete = async (id) => {
    const result = await axios.delete("http://localhost:4000/student/" + id);
    if (result.data.success) {
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
            {data && data.map((student) => (
              <TableRow key={++j}>
                <TableCell>{++i}</TableCell>
                <TableCell>{student.studentCode}</TableCell>
                <TableCell>{student.name}</TableCell>
                <TableCell>{student.className}</TableCell>
                <TableCell>{student.course}</TableCell>
                <TableCell>{student.email}</TableCell>
                <TableCell>{student.phoneNumber}</TableCell>
                <TableCell>{student.address}</TableCell>
                <TableCell><Button variant="contained" onClick={() => { props.handleOpenEdit(student) }} color="warning">Chỉnh sửa</Button></TableCell>
                <TableCell><Button variant="contained" onClick={() => { props.handleOpenView(student) }} >Chi tiết</Button></TableCell>
                <TableCell><Button variant="contained" onClick={() => { handleDelete(student._id) }} color="error">Xóa</Button></TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      {!data && <Typography variant="h2">Loading data....</Typography>}
    </Paper>
  );
}
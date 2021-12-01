import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { useEffect, useState } from 'react';
import { Button } from '@mui/material';
import axios from 'axios';

export default function DataTable(props) {
  const [data, setData] = useState(null)

  const getStudentData = async () => {
    const result = await axios.get('http://localhost:4000/student/');
    setData(result.data.data)
    console.log(data)
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
    getStudentData()
  }, [])

  let i = 0, j = 0;

  console.log(data)
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
            {!data && <h1>Loading data....</h1>}
            {data && data.map((sv) => (
              <TableRow key={++j}>
                <TableCell>{++i}</TableCell>
                <TableCell>{sv.studentCode}</TableCell>
                <TableCell>{sv.name}</TableCell>
                <TableCell>{sv.className}</TableCell>
                <TableCell>{sv.course}</TableCell>
                <TableCell>{sv.email}</TableCell>
                <TableCell>{sv.phoneNumber}</TableCell>
                <TableCell>{sv.address}</TableCell>
                <TableCell><Button variant="contained" onClick={() => { props.handleOpenEdit(sv) }} color="warning">Chỉnh sửa</Button></TableCell>
                <TableCell><Button variant="contained" onClick={() => { props.handleOpenView(sv) }} >Chi tiết</Button></TableCell>
                <TableCell><Button variant="contained" onClick={() => { handleDelete(sv._id) }} color="error">Xóa</Button></TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
}
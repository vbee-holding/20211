import {
  Container,
  Dialog,
  DialogTitle,
  DialogContent,
  TextField,
  DialogActions,
  Button,
  Box
} from "@mui/material"

export default function ViewData({ data, open, handleClose }) {
  return (
    <Container>
      <Dialog open={open}>
        <DialogTitle>Xem thông tin sinh viên</DialogTitle>
        <DialogContent>
          <Box style={{ height: '60px', marginLeft: '40%' }}>
            <img src={data.imagePath} alt="Failed to load" width="60px" height="60px" />
          </Box>
          <TextField
            autoFocus
            margin="dense"
            id="mssv"
            label="Mã số sinh viên"
            fullWidth
            variant="standard"
            value={data.studentCode}
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
            value={data.name}
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
            value={data.className}
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
            value={data.course}
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
            value={data.email}
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
            value={data.phoneNumber}
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
            value={data.address}
            InputProps={{
              readOnly: true,
            }}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => handleClose("view")}>Back</Button>
        </DialogActions>
      </Dialog>
    </Container>
  )
}
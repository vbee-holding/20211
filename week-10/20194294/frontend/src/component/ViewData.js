import { Container, Dialog, DialogTitle, DialogContent, TextField, DialogActions, Button } from "@mui/material"
export default function ViewData(props) {
  const { data, open, handleClose } = props



  return (
    <Container>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Xem thông tin sinh viên</DialogTitle>
        <DialogContent>
          <div style={{ height: '60px', marginLeft: '40%' }}>
            <img src={data.imagePath} alt="Failed to load" width="60px" height="60px" />
          </div>
          <TextField
            autoFocus
            margin="dense"
            id="mssv"
            label="Mã số sinh viên"
            fullWidth
            variant="standard"
            defaultValue={data.studentCode}
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
            defaultValue={data.name}
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
            defaultValue={data.className}
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
            defaultValue={data.course}
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
            defaultValue={data.email}
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
            defaultValue={data.phoneNumber}
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
            defaultValue={data.address}
            InputProps={{
              readOnly: true,
            }}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={props.handleClose}>Back</Button>
        </DialogActions>
      </Dialog>
    </Container>
  )
}
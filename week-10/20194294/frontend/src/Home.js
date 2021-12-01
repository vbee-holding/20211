import { Container, Button } from "@mui/material";
import { useState } from "react";
import CreateData from "./component/CreateData";
import DataTable from "./component/DataTable";
import EditData from "./component/EditData";
import ViewData from "./component/ViewData";

export default function Home() {
    const [open, setOpen] = useState({
        edit: false,
        addNew: false,
        view: false
    })
    const [data, setData] = useState({
        view: null,
        edit: null
    })
    const handleOpenEdit = (value) => {
        setOpen({ ...open, edit: true });
        setData({ ...data, edit: value })
    };

    const handleCloseEdit = () => {
        setOpen({ ...open, edit: false });
    };

    const handleOpenAddNew = async () => {
        setOpen({ ...open, addNew: true });
    };

    const handleCloseAddNew = () => {
        setOpen({ ...open, addNew: false });
    };

    const handleOpenView = (value) => {
        setOpen({ ...open, view: true });
        setData({ ...data, view: value })
    };

    const handleCloseView = () => {
        setOpen({ ...open, view: false })
    };

    return (
        <>
            <Container>
                <Button variant="contained" style={{ marginLeft: '80%', marginTop: '2%' }} onClick={handleOpenAddNew}>Thêm mới sinh viên</Button>
            </Container>
            <DataTable handleOpenEdit={handleOpenEdit} handleOpenView={handleOpenView} />
            {data.edit && <EditData open={open.edit} handleClose={handleCloseEdit} data={data.edit} />}
            {data.view && <ViewData open={open.view} handleClose={handleCloseView} data={data.view} />}
            <CreateData open={open.addNew} handleClose={handleCloseAddNew} />
        </>
    )
}
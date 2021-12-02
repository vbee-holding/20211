import { Container, Button } from "@mui/material";
import { useState } from "react";
import CreateData from "./components/CreateData";
import DataTable from "./components/DataTable";
import EditData from "./components/EditData";
import ViewData from "./components/ViewData";

export default function Home() {
    const [open, setOpen] = useState({
        edit: false,
        create: false,
        view: false
    })
    const [data, setData] = useState(null)

    const handleOpen = (componentName, data = null) => {
        setOpen({ ...open, [componentName]: true });
        setData(data)
    }

    const handleClose = (componentName) => {
        setOpen({ ...open, [componentName]: false })
    }

    return (
        <>
            <Container>
                <Button variant="contained" style={{ marginLeft: '80%', marginTop: '2%' }} onClick={() => handleOpen("create")}>Thêm mới sinh viên</Button>
            </Container>
            <DataTable handleOpen={handleOpen} />
            {data && <EditData open={open.edit} handleClose={handleClose} data={data} setData={setData}/>}
            {data && <ViewData open={open.view} handleClose={handleClose} data={data} />}
            <CreateData open={open.create} handleClose={handleClose} />
        </>
    )
}
import { Container, Button, Box } from "@mui/material";
import axios from "axios";
import { useState } from "react";
import CreateData from "./component/CreateData";
import DataTable from "./component/DataTable";
import EditData from "./component/EditData";
import ViewData from "./component/ViewData";

export default function Home() {
    const [openEdit, setOpenEdit] = useState(false);
    const [openAddNew, setOpenAddNew] = useState(false);
    const [openView, setView] = useState(false);
    const [data, setData]= useState(null)
    const [dataView, setDataView]= useState(null)
    const handleOpenEdit = (data) => {
        setOpenEdit(true);
        setData(data)
      //  console.log(data)
    };

    const handleCloseEdit = () => {
        setOpenEdit(false);
    };

    const handleOpenAddNew = async () => {
        setOpenAddNew(true);
        
    };

    const handleCloseAddNew = () => {
        setOpenAddNew(false);
        
    };

    const handleOpenView = (data) => {
        setView(true);
        setDataView(data)
    };

    const handleCloseView = () => {
        setView(false);
    };

    return (
        <>
            <Container>
                <Button variant="contained" style={{marginLeft:'80%', marginTop:'2%'}} onClick={handleOpenAddNew}>Thêm mới sinh viên</Button>
            </Container>
            <DataTable handleOpenEdit={handleOpenEdit} handleOpenView={handleOpenView}/>
            {data&& <EditData open={openEdit} handleClose={handleCloseEdit} id={data}/>}
            {dataView && <ViewData open={openView} handleClose={handleCloseView} data={dataView}/>}
            <CreateData open={openAddNew} handleClose={handleCloseAddNew}/>
        </>
    )
}
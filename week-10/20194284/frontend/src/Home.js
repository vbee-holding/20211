
import { useState } from "react";
import DataTable from "./components/DataTable";
import EditData from "./components/EditData";

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
            <DataTable handleOpen={handleOpen} />
            {data && <EditData open={open.edit} handleClose={handleClose} data={data} setData={setData}/>}
        </>
    )
}
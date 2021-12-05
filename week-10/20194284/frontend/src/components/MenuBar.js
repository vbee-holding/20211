import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { useState } from "react";
import CreateData from './CreateData';
import SearchData from './SearchData';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: '2px 4px',
    marginTop: '20px',

    display: 'grid',
    gridTemplateColumns: '50px 400px 70px 70px',
    alignItems: 'center',
    width: '100%',
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
    width: 400,
    marginBottom: '20px',
  },
  iconButton: {
    padding: 10,
    marginLeft: '5px',
    marginBottom: '20px',
  },
  button: {
    height: 28,
    margin: 4,
    marginLeft: '30px',
    marginBottom: '20px',
    marginRight: '10px',
  },
}));

export default function CustomizedInputBase() {
  const classes = useStyles();

  const [open, setOpen] = useState({
    create: false,
    view: false
  })

  const handleOpen = (componentName, data = null) => {
      setOpen({ ...open, [componentName]: true });
  }

  const handleClose = (componentName) => {
      setOpen({ ...open, [componentName]: false })
  }
  
  return (
    <Paper component="form" className={classes.root}>
      <IconButton className={classes.iconButton} aria-label="menu">
        <MenuIcon />
      </IconButton>
      <TextField className = {classes.input}
        id="1"
        label="StudentID"
        variant="outlined"
        color="secondary"
      />
      <Button className = {classes.button} variant="contained" size="small" onClick={() => handleOpen("view")}>
          Search
      </Button>
      <Button className = {classes.button} variant="contained" size="small" onClick={() => handleOpen("create")}>
          Add +
        </Button>
      <CreateData open={open.create} handleClose={handleClose} />
      <SearchData id = {(open.view) ? document.getElementById("1").value : 20194274} open={open.view} handleClose={handleClose} />
    </Paper>

  );
}
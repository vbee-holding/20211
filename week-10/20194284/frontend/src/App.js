import { Grid } from "@mui/material";
import MenuBar from "./components/MenuBar";
import Home from "./Home";

function App() {
  return (
    <Grid container className="app">
      <MenuBar />
      <Grid container className="content">
        <Home/>
      </Grid>
    </Grid>
  );
}

export default App;

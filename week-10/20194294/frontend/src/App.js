import { Grid } from "@mui/material";
import MenuBar from "./component/MenuBar";
import Home from "./Home";
function App() {
  return (
    <Grid container className="App">
      <MenuBar />
      <Grid container className="content">
        <Home/>
      </Grid>
    </Grid>
  );
}

export default App;

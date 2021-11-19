require("dotenv").config();
const express = require("express");
const app = express();

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.listen(process.env.PORT, () => {
  console.log("Application is runnig on port 3000!");
});

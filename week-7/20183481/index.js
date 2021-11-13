const express = require("express");
const mongodb = require("mongodb");
const cors = require("cors");

const app = express();

const router = require('./routes/student');

app.use(cors());
app.use(express.json());

app.use(router);

app.listen(3000, () => {
  console.log("server started at port 3000");
});
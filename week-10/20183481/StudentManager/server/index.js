const express = require("express");
const router = require("./routes/student");
const mongoose = require("mongoose");
const bodyParser = require('body-parser');

const app = express();
const PORT = 3001;

// Static files
app.use(express.json());

// Routes
app.use("/student", router);
app.use('/image', express.static('image'));

app.use(bodyParser.json());

// connect to mongodb
mongoose
  .connect('mongodb+srv://example:a12345@cluster0.w68yn.mongodb.net/StudentManager?retryWrites=true&w=majority', {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
  .then((res) => {
    console.log("connected to mongodb");
  })
  .catch((err) => {
    console.log(err);
  });

app.listen(PORT, () => console.log(`Server running on port: http://localhost:${PORT}`));

app.get('/', (req, res) => res.send('Hello from Homepage.'));
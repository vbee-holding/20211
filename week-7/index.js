require("sinhvien").config();
const express = require("express");
const cors = require("cors");
const app = express();

app.use(express.json());

// Cors options
const corsOptions = {
    origin: "*",
};
app.use(cors(corsOptions));

// Mongoose connection
const connectDB = require("./connect");

const sinhvienModel = require("./sinhvien");

app.get("/sinhvien", async(req, res) => {
    const sinhvien = await sinhvienModel.find();
    res.send(sinhvien);
});

app.get("/sinhvien/:_id", async(req, res) => {
    const { _id } = req.params;
    try {
        const sinhvien = await sinhvienModel.findById(_id);
        res.send(sinhvien);
    } catch (error) {
        res.status(404).json({ Message: "student not found!!!" });
    }
});

app.post("/sinhvien", async(req, res) => {
    const newsinhvien = req.body;
    await sinhvienModel.create(newsinhvien);
    res.send({ Message: "student created!!!" });
});

app.put("/sinhvien/:_id", async(req, res) => {
    const _id = req.params;
    const sinhvienData = req.body;

    const updatesinhvien = await sinhvienModel.findByIdAndUpdate(
        _id, { $set: sinhvienData }, { new: true }
    );
    // res.send({ Message: "student updated!!!", updatesinhvien });
    res.send({ Message: "student updated!!!" });
});

app.delete("/sinhvien/delete/:_id", async(req, res) => {
    const _id = req.params;

    const deletesinhvien = await sinhvienModel.findByIdAndDelete(_id);
    // res.send(deletesinhvien);
    res.send({ Message: "student deleted!!!" });
});

app.listen(process.env.PORT, () =>
    connectDB()
    .then(() => console.log("Server is running..."))
    .catch((error) => console.log(error))
);
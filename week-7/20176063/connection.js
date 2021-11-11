const mongoose = require("mongoose");

const connectToDB = async () =>
  mongoose.connect(
    process.env.MONGODB_URL,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true,
    }
  );

module.exports = connectToDB;

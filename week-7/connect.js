const connectToDB = async() =>
    mongoose.connect(
        process.env.MONGODB_URL, {
            useNewUrlParser: true,
            useCreateIndex: true,
        }
    );

module.exports = connectToDB;
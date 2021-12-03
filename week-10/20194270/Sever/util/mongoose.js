
module.exports = {
    multipleMongooseToObject : function(mongooseArray) {
        return mongooseArray.map(mongoose => mongoose.toObject());
    },

    mongooseToObject : function (mongoose) {
        return mongoose.toObject();
    }
}
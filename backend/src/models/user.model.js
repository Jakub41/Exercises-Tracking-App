const mongoose = require("../utilities/dbUtility");

const schema = {
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        minlenght: 3
    },
    time : { type : Date, default: Date.now }
};

const collectionName = "user";
const userSchema = mongoose.Schema(schema);
const User = mongoose.model(collectionName, userSchema);

module.exports = User;

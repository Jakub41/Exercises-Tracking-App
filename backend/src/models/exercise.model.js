const mongoose = require("../utilities/dbUtility");

const schema = {
    username: { type: String, required: true },
    description: { type: String, required: true},
    duration: { type: Number, required: true},
    date: { type: Date, required: true},
    time : { type : Date, default: Date.now }
};

const collectionName = "exercise";
const exerciseSchema = mongoose.Schema(schema);
const Exercise = mongoose.model(collectionName, exerciseSchema);

module.exports = Exercise;

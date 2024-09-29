const mongoose = require("mongoose");
require("dotenv").config();

// const mongoURL = process.env.LOCAL_DB;
const mongoURL = process.env.DB_URL;

mongoose.connect(mongoURL, {});

const db = mongoose.connection;

db.on("connected", () => {
    console.log("MongoDB connected successfully");
});

db.on("error", () => {
    console.log("MongoDB connection failed");
});

db.on("disconnected", () => {
    console.log("MongoDB disconnected");
});

module.exports = db;

const mongoose = require("mongoose");

const connectDB = async () => {
  await mongoose.connect(process.env.MONGO_URI);
  console.log(`database hosted on:${mongoose.connection.host.blue}`);
};

module.exports = connectDB;

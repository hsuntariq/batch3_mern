const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  name: {
    type: String,
    require: [true, "Please enter the username"],
    // unique: true,
  },
  email: {
    type: String,
    require: [true, "Please enter the email"],
  },
  password: {
    type: String,
    require: [true, "Please enter the password"],
  },
});

module.exports = mongoose.model("User", userSchema);

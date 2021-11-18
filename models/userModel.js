const mongoose = require("mongoose");

const schema = mongoose.Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    // A- admin
    // C - Content writer
    enum: ["A", "C"],
    default: "C",
  },
  phoneNumber: {
    type: Number,
  },
});
module.exports = mongoose.model("User", schema, "User");

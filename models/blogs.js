const mongoose = require("mongoose");

const schema = mongoose.Schema(
  {
    author: {
      type: mongoose.Types.ObjectId,
      ref: "User",
    },
    title: {
      type: String,
      required: true,
    },
    content: {
      type: String,
    },
    approved: {
      type: String,
      //A - approved
      //N - not approved
      enum: ["A", "N"],
      default: "N",
    },
  },
  { timestamp: true }
);

module.exports = mongoose.model("Blogs", schema, "Blogs");

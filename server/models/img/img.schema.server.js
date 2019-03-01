const mongoose = require("mongoose");

var ImgSchema = mongoose.Schema(
  {
    name: String,
    data: Buffer,
    mimetype: String,
    type: String,
    dateCreated: { type: Date, default: Date.now }
  },
  { collection: "img" }
);

module.exports = ImgSchema;

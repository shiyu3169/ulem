const mongoose = require("mongoose");

var ImgSchema = mongoose.Schema(
  {
    name: String,
    data: Buffer,
    mimetype: String,
    type: String,
    event: { type: mongoose.Schema.Types.ObjectId, ref: "EventModel" },
    news: { type: mongoose.Schema.Types.ObjectId, ref: "NewsModel" },
    dateCreated: { type: Date, default: Date.now }
  },
  { collection: "img" }
);

module.exports = ImgSchema;

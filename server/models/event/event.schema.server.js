var mongoose = require("mongoose");

var EventSchema = mongoose.Schema(
  {
    title: { type: String, required: true },
    start: String,
    end: String,
    venue: String,
    address: String,
    noEndTime: Boolean,
    img: { type: mongoose.Schema.Types.ObjectId, ref: "ImgModel" },
    dateCreated: { type: Date, default: Date.now },
    dateModified: { type: Date, default: Date.now },
    updatedBy: { type: mongoose.Schema.Types.ObjectId, ref: "UserModel" }
  },
  { collection: "event" }
);

module.exports = EventSchema;

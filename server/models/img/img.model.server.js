var mongoose = require("mongoose");
var ImgSchema = require("./img.schema.server");
var ImgModel = mongoose.model("ImgModel", ImgSchema);

// Create new image
ImgModel.createImg = img => ImgModel.create(img);

// Find image by event id
ImgModel.findImgByEvent = event => ImgModel.findOne({ event });

module.exports = ImgModel;

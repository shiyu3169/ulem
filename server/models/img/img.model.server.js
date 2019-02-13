var mongoose = require("mongoose");
var ImgSchema = require("./img.schema.server");
var ImgModel = mongoose.model("ImgModel", ImgSchema);

ImgModel.createPicture = createPicture;

function createPicture(picture) {
  return ImgModel.create(picture);
}

module.exports = ImgModel;

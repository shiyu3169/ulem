var connectionString =
  "mongodb+srv://admin:good4ulem@cluster0-1upto.mongodb.net/test?retryWrites=true";

var mongoose = require("mongoose");
var db = mongoose.connect(connectionString, {
  useNewUrlParser: true,
  useCreateIndex: true
});

module.exports = db;

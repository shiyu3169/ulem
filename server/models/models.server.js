var connectionString = process.env.CONNECTION_STRING || "placeholder";

var mongoose = require("mongoose");
var db = mongoose.connect(connectionString, {
  useNewUrlParser: true,
  useCreateIndex: true
});

module.exports = db;

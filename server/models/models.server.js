var connectionString = "mongodb://127.0.0.1:27017/ulem"; // for local

if (process.env.CONNECTION_STRING) {
  // check if running remotely
  connectionString = process.env.CONNECTION_STRING; // use yours
}

var mongoose = require("mongoose");
var db = mongoose
  .connect(connectionString, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
  })
  .catch((error) => console.log("mongodb is not available"));

module.exports = db;

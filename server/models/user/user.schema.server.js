var mongoose = require("mongoose");

var UserSchema = mongoose.Schema(
  {
    username: { type: String, required: true },
    password: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    admin: { type: Boolean, default: false },
    dateCreated: { type: Date, default: Date.now }
  },
  { collection: "user" }
);

module.exports = UserSchema;

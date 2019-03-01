var mongoose = require("mongoose");
var UserSchema = require("./user.schema.server");
var UserModel = mongoose.model("UserModel", UserSchema);

UserModel.createUser = createUser;
UserModel.findUserById = findUserById;
UserModel.findUserByCredentials = findUserByCredentials;
UserModel.findUsers = findUsers;
UserModel.findUserByUsername = findUserByUsername;
UserModel.updateUser = updateUser;
UserModel.deleteUser = deleteUser;
UserModel.delete;

function createUser(user) {
  return UserModel.create(user);
}

function findUsers() {
  return UserModel.find()
    .sort({ firstName: 1 })
    .select("-password");
}

function findUserById(uid) {
  return UserModel.findById(uid);
}

function findUserByCredentials(username, password) {
  return UserModel.findOne({ username: username, password: password });
}

function findUserByUsername(username) {
  return UserModel.findOne({ username: username });
}

function updateUser(uid, user) {
  return UserModel.updateOne({ _id: uid }, user);
}

function deleteUser(uid) {
  return UserModel.remove({ _id: uid });
}

module.exports = UserModel;

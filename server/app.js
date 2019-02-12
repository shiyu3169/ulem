module.exports = function(app) {
  require("./services/user.service.server")(app);
  require("./models/models.server");
};

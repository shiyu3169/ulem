module.exports = function(app) {
  require("./services/user.service")(app);
  require("./services/event.service")(app);
  require("./services/img.service")(app);
  require("./models/models.server");
};

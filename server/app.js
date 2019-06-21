module.exports = function(app) {
  require('./services/user.service')(app);
  require('./services/event.service')(app);
  require('./services/img.service')(app);
  require('./services/contact.service')(app);
  require('./services/payment.service')(app);
  require('./models/models.server');
};

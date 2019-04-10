module.exports = function(app) {
  // Mailgun config
  var API_KEY = process.env.API_KEY || "...";
  var DOMAIN = process.env.DOMAIN || "...";
  var mailgun = require("mailgun-js")({ apiKey: API_KEY, domain: DOMAIN });
  // Send a contact email via mailgun
  app.post("/api/contact", (req, res) => {
    const data = req.body;
    const message = {
      from: `${data.name} <${data.email}>`,
      to: "swang@ulem.org",
      subject: data.subject,
      text: data.content
    };
    mailgun.messages().send(message, (error, body) => {
      if (error) {
        console.log(error);
        res.json(error);
      } else {
        res.sendStatus(200);
      }
    });
  });
};

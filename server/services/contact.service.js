module.exports = function(app) {
  // Mailgun config
<<<<<<< HEAD
  var API_KEY = "...";
  var DOMAIN = "...";
=======
  var API_KEY = "048ce0c30501216db6066076474ea1c7-9ce9335e-7a63dfd1";
  var DOMAIN =
    "https://api.mailgun.net/v3/sandbox9077a9ad9cce4de2a098087e6c7eb683.mailgun.org";
>>>>>>> 165241fab4f0bc5f74ece53090a001a4f8825ae4
  var mailgun = require("mailgun-js")({ apiKey: API_KEY, domain: DOMAIN });
  // Send a contact email via mailgun
  app.post("/api/contact", (req, res) => {
    const data = req.body;
    const message = {
      from: `${data.name} <${data.email}>`,
      to: "shiyu3169@gmail.com",
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

module.exports = function(app) {
  // Mailgun config
  var API_KEY = "ae037c8dc4d27a1e78f40312d635d1fe-9ce9335e-82c4efde";
  var DOMAIN = "sandbox76fd8f1b6f9c41a7a9a5638414447e86.mailgun.org";
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

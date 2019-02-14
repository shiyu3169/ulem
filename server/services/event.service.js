module.exports = function(app) {
  const eventModel = require("../models/event/event.model.server");

  // Create New Event
  app.post("/api/event", (req, res) => {
    const event = req.body;
    eventModel.createEvent(event).then(data => {
      res.json(data);
    });
  });

  // Get Events
  app.get("/api/events/:page", (req, res) => {
    const page = parseInt(req.params["page"]);
    eventModel.findEvents(page).then(data => {
      res.json(data);
    });
  });

  // Get Top Events
  app.get("/api/events/top", (req, res) => {
    eventModel.findTopEvents().then(data => {
      res.json(data);
    });
  });

  // Get All Events
  app.get("/api/events", (req, res) => {
    eventModel.findAllEvents().then(data => {
      res.json(data);
    });
  });

  // Count Number of Events
  app.get("/api/event/length", (req, res) => {
    eventModel.countEvents().then(data => {
      res.json(data);
    });
  });

  // Get event by id
  app.get("/api/event/:id", (req, res) => {
    const id = req.params["id"];
    eventModel.findEventById(id).then(data => {
      res.json(data);
    });
  });

  // Update event by id
  app.post("/api/event/:id", (req, res) => {
    const id = req.params["id"];
    const event = req.body;
    eventModel.updateEvent(id, event).then(data => {
      res.json(data);
    });
  });
};

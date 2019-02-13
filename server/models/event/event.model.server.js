var mongoose = require("mongoose");
var EventSchema = require("./event.schema.server");
var EventModel = mongoose.model("EventModel", EventSchema);

// Insert new event
EventModel.createEvent = event => EventModel.create(event);

// Find events in this page
EventModel.findEvents = page => {
  const skip = (page - 1) * 20;
  return EventModel.find()
    .sort({ start: -1 })
    .skip(skip)
    .limit(20);
};

// Update event by id
EventModel.updateEvent = (id, event) =>
  EventModel.updateOne({ _id: id }, event);

// Find event by id
EventModel.findEventById = id => EventModel.findById(id);

// Count events
EventModel.countEvents = () => EventModel.count();

module.exports = EventModel;

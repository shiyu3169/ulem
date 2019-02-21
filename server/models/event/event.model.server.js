var mongoose = require("mongoose");
var EventSchema = require("./event.schema.server");
var EventModel = mongoose.model("EventModel", EventSchema);

// Insert new event
EventModel.createEvent = event => EventModel.create(event);

// Find all events
EventModel.findAllEvents = () =>
  EventModel.find()
    .populate("img")
    .exec();

// Find upcoming 3 events
EventModel.findTopEvents = () =>
  EventModel.find({ img: { $exists: true } })
    .sort({ start: -1 })
    .limit(3)
    .populate("img")
    .exec();

// Find events in this page
EventModel.findEvents = page => {
  const skip = (page - 1) * 20;
  return EventModel.find()
    .sort({ start: -1 })
    .skip(skip)
    .limit(20)
    .populate("updatedBy", "username")
    .exec();
};

// Update event by id
EventModel.updateEvent = (id, event) =>
  EventModel.updateOne({ _id: id }, event);

// Find event by id
EventModel.findEventById = id =>
  EventModel.findById(id)
    .populate("img")
    .exec();

// Count events
EventModel.countEvents = () => EventModel.countDocuments();

// Delete events
EventModel.deleteEvent = id => EventModel.deleteOne({ _id: id });

module.exports = EventModel;

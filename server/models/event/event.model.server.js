var mongoose = require("mongoose");
var EventSchema = require("./event.schema.server");
var EventModel = mongoose.model("EventModel", EventSchema);

EventModel.createEvent = event => EventModel.create(event);

EventModel.findEvents = page => {
  const skip = (page - 1) * 20;
  return EventModel.find()
    .sort({ start: -1 })
    .skip(skip)
    .limit(20);
};

EventModel.countEvents = () => EventModel.count();

module.exports = EventModel;

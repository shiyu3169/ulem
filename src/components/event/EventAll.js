import React, { Component } from "react";
import EventCard from "./EventCard";

export default class EventAll extends Component {
  render() {
    return (
      <div>
        <h2 className="font-red mt-4">All Events</h2>
        {this.props.events.map(event => (
          <EventCard key={event._id} event={event} />
        ))}
      </div>
    );
  }
}

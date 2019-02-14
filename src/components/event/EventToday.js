import React, { Component } from "react";
import EventCard from "./EventCard";

export default class EventToday extends Component {
  render() {
    return (
      <React.Fragment>
        <h2 className="font-red mt-4">
          Events on {this.props.date.toDateString()}
        </h2>
        {this.props.events.map(event => (
          <EventCard key={event._id} event={event} />
        ))}
      </React.Fragment>
    );
  }
}

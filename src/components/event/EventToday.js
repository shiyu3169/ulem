import React, { Component } from "react";
import EventCard from "./EventCard";

export default class EventToday extends Component {
  render() {
    return (
      <React.Fragment>
        <h2 className="font-red mt-4">
          {this.props.events.length} Event(s) on{" "}
          {this.props.date.toDateString()}
        </h2>
        {this.props.events.map(event =>
          <EventCard key={event._id} id={event._id} />
        )}
      </React.Fragment>
    );
  }
}

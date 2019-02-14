import React, { Component } from "react";
import InputGroup from "../layout/InputGroup";
import Axios from "axios";

export default class EventNew extends Component {
  state = {
    noEndTime: false,
    title: "",
    start: "",
    end: "",
    venue: "",
    address: "",
    img: ""
  };

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onSubmit = e => {
    e.preventDefault();
    const { title, start, end, venue, address, noEndTime } = this.state;
    const event = { title, start, end, venue, address, noEndTime };
    if (event.noEndTime) {
      event.end = "";
    }
    this.createEvent(event);
    this.setState({
      noEndTime: false,
      title: "",
      start: "",
      end: "",
      venue: "",
      address: ""
    });
    this.props.showList();
  };

  onCancel = () => {
    this.setState({
      noEndTime: false,
      title: "",
      start: "",
      end: "",
      venue: "",
      address: ""
    });
    this.props.showList();
  };

  onCheckBox = e => {
    this.setState({
      [e.target.name]: e.target.checked
    });
  };

  // Create new event
  createEvent = event => {
    Axios.post("/api/event", event);
  };

  // upload new image
  onUpload = () => {};

  render() {
    return (
      <React.Fragment>
        <h4>Adding New Event</h4>
        <div className="container mt-4">
          <form onSubmit={this.onSubmit}>
            <InputGroup
              label="Title"
              placeholder="Enter title here"
              required
              id="title"
              name="title"
              value={this.state.title}
              onChange={this.onChange}
            />
            <div className="input-group">
              <input
                id="noEndTime"
                name="noEndTime"
                type="checkbox"
                onChange={this.onCheckBox}
              />
              <label htmlFor="noEndTime">No End Time</label>
            </div>
            <InputGroup
              label="Start date / time"
              required
              id="start"
              name="start"
              onChange={this.onChange}
              type="datetime-local"
              value={this.state.start}
            />
            {!this.state.noEndTime && (
              <InputGroup
                label="End date / time"
                required
                id="end"
                onChange={this.onChange}
                name="end"
                type="datetime-local"
                value={this.state.end}
              />
            )}
            <InputGroup
              label="Venue name"
              id="venue"
              name="venue"
              onChange={this.onChange}
              value={this.state.venue}
            />
            <InputGroup
              label="Address"
              id="address"
              name="address"
              value={this.state.address}
              onChange={this.onChange}
            />
            <button
              type="button"
              onClick={this.onCancel}
              className="btn btn-lg btn-outline-danger">
              Cancel
            </button>
            <button
              type="submit"
              className="btn btn-lg btn-outline-success float-right">
              Submit
            </button>
          </form>
        </div>
      </React.Fragment>
    );
  }
}

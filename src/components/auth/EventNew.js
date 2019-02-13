import React, { Component } from "react";
import InputGroup from "../layout/InputGroup";
import Axios from "axios";

export default class EventNew extends Component {
  state = {
    allDayEvent: "",
    noEndTime: false,
    title: "",
    start: "",
    end: "",
    venue: "",
    address: ""
  };

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onSubmit = e => {
    e.preventDefault();
    const { title, start, end, venue, address, img } = this.state;
    const event = { title, start, end, venue, address, img };
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

  createEvent = event => {
    Axios.post("/api/event", event).then(res => {
      console.log(res.data);
    });
  };

  render() {
    return (
      <React.Fragment>
        <h4>Adding New Event</h4>
        <div className="container mt-4">
          <form onSubmit={this.onSubmit} id="primary">
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
                onClick={this.onCheckBox}
              />
              <label htmlFor="allDayEvent">No End Time</label>
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
              label="
                Venue name"
              id="venue"
              name="venue"
              onChange={this.onChange}
              value={this.state.venue}
            />
            <InputGroup
              label="
                Address"
              id="address"
              name="address"
              value={this.state.address}
              onChange={this.onChange}
            />
          </form>
          <form
            action="api/img/upload"
            method="post"
            encType="multipart/form-data"
            accept=".png, .jpg, .jpeg">
            <div className="form-group">
              <label>
                <strong>Image</strong>
              </label>
              <div className="input-group">
                <input type="file" className="form-control" />
                <div className="input-group-append">
                  <button type="submit" className="btn btn-outline-secondary">
                    Upload
                  </button>
                </div>
              </div>
            </div>
          </form>
          <button
            type="button"
            onClick={this.onCancel}
            className="btn btn-lg btn-outline-danger">
            Cancel
          </button>
          <button
            type="submit"
            form="primary"
            className="btn btn-lg btn-outline-success float-right">
            Submit
          </button>
        </div>
      </React.Fragment>
    );
  }
}

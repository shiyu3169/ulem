import React, { Component } from "react";
import Axios from "axios";
import Pages from "../layout/Pages";

export default class EventList extends Component {
  state = {
    length: 0,
    events: [],
    page: 1
  };
  countEvents = () => {
    Axios.get("/api/event/length").then(res => {
      this.setState({
        length: parseInt(res.data)
      });
    });
  };

  getEvents = page => {
    Axios.get(`/api/events/${page}`).then(res => {
      this.setState({
        events: res.data
      });
    });
  };

  changePage = page => {
    this.setState({
      page
    });
  };

  componentDidMount() {
    this.countEvents();
    this.getEvents(this.state.page);
  }

  render() {
    return (
      <React.Fragment>
        <h4>
          Events
          <button
            onClick={this.props.showAdding}
            className="btn btn-outline-danger ml-4">
            New Event
          </button>
        </h4>
        <div className="container">
          <table className="table">
            <thead>
              <tr>
                <th>Title</th>
                <th>Start Time</th>
                <th>End Time</th>
              </tr>
            </thead>
            <tbody>
              {this.state.events.map(event => (
                <tr key={event._id}>
                  <td>{event.title}</td>
                  <td>{event.start}</td>
                  <td>{event.end}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <Pages
          length={this.state.length}
          page={this.state.page}
          changePage={this.changePage}
        />
      </React.Fragment>
    );
  }
}

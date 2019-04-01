import React, { Component } from "react";
import Calendar from "react-calendar";
import EventDes from "./EventDes";
import Axios from "axios";
import EventToday from "./EventToday";
import loading from "../../img/loading.gif";
import moment from "moment";

export default class Events extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: this.props.location.state
        ? this.makeDate(this.props.location.state.date)
        : new Date(),
      events: [],
      dates: [],
      newEvents: []
    };
  }

  makeDate = dateStr => {
    const date = dateStr.split("T")[0];
    const dateArray = date.split("-");
    const year = dateArray[0];
    const month = parseInt(dateArray[1]) - 1;
    const day = dateArray[2];
    return new Date(year, month, day);
  };

  onChange = date => {
    this.setState({ date });
  };

  onPick = event => {
    const date = moment(event.start).startOf("day").toDate();
    this.setState({ date: date });
  };

  onSelect = e => {
    this.setState({
      [e.target.name]: e.target.checked
    });
  };

  getEvents = () => {
    Axios.get("/api/events").then(res => {
      this.setState(
        {
          events: res.data
        },
        () => {
          this.getDates();
          this.filterOldEvents(res.data);
        }
      );
    });
  };

  // Get All Upcoming Events
  filterOldEvents = () => {
    // Today at 00:00
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    // Get New Events
    const newEvents = this.state.events.filter(event => {
      return moment(event.start) >= today;
    });
    // Set new Events into State
    this.setState({ newEvents: newEvents });
  };

  getDates = () => {
    const dates = this.state.events.map(event => {
      return moment(event.start).startOf("day").format();
    });
    this.setState({
      dates
    });
  };

  componentDidMount() {
    this.getEvents();
  }

  tileClassName = ({ date, view }) => {
    return view === "month" &&
    this.state.dates.includes(moment(date).startOf("day").format())
      ? "strong"
      : "date-border";
  };

  filterEvents = (events, date) => {
    return events.filter(event => {
      return (
        moment(event.start).startOf("day").format() ===
        moment(date).startOf("day").format()
      );
    });
  };

  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-xl-3">
            {this.state.dates.length
              ? <div>
                  <h2 className="font-red mt-4">Events Calendar</h2>
                  <Calendar
                    onChange={this.onChange}
                    value={this.state.date}
                    tileClassName={this.tileClassName}
                    className="border"
                  />
                  <p className="mt-2">
                    <i className="far fa-square" /> = Date with Event
                  </p>
                </div>
              : <img className="center" src={loading} alt="loading" />}
            <div>
              <h2 className="font-red mt-4">Upcoming Events</h2>
              <ul className="list-group">
                {this.state.newEvents.map(event =>
                  <li
                    onClick={this.onPick.bind(this, event)}
                    className="list-group-item cursor"
                    key={event._id}
                  >
                    {event.title}
                  </li>
                )}
              </ul>
            </div>
          </div>
          <div className="col-xl-5">
            {
              <EventToday
                date={this.state.date}
                events={this.filterEvents(this.state.events, this.state.date)}
              />
            }
          </div>
          <div className="col-xl-4 ">
            <EventDes />
          </div>
        </div>
      </div>
    );
  }
}

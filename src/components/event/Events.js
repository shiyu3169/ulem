import React, { Component } from "react";
import Calendar from "react-calendar";
import EventDes from "./EventDes";
import Axios from "axios";
import EventToday from "./EventToday";

export default class Events extends Component {
  state = {
    date: new Date(),
    events: [],
    dates: []
  };

  onChange = date => {
    this.setState({ date });
  };

  getEvents = () => {
    Axios.get("/api/events").then(res => {
      this.setState(
        {
          events: res.data
        },
        () => {
          this.getDates();
        }
      );
    });
  };

  getDates = () => {
    const dates = this.state.events.map(event => {
      return event.start.split("T")[0];
    });
    this.setState({
      dates
    });
  };

  dateToStr(date) {
    let str = "";
    str += date.getFullYear();
    str += "-";
    let month = date.getMonth() + 1;
    if (month < 10) {
      month = "0" + month.toString();
    } else {
      month = month.toString();
    }
    str += month;
    str += "-";
    let dateStr = date.getDate();
    if (dateStr < 10) {
      dateStr = "0" + dateStr.toString();
    } else {
      dateStr = dateStr.toString();
    }
    str += dateStr;
    return str;
  }

  componentDidMount() {
    this.getEvents();
  }

  tileClassName = ({ date, view }) => {
    return view === "month" && this.state.dates.includes(this.dateToStr(date))
      ? "strong"
      : null;
  };

  filterEvents = (events, date) => {
    const dateStr = this.dateToStr(date);
    return events.filter(event => {
      return event.start.split("T")[0] === dateStr;
    });
  };

  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-4 mt-5">
            {this.state.dates.length && (
              <Calendar
                className="fixed-pos"
                onChange={this.onChange}
                value={this.state.date}
                tileClassName={this.tileClassName}
              />
            )}
          </div>
          <div className="col-lg-4">
            <EventToday
              date={this.state.date}
              events={this.filterEvents(this.state.events, this.state.date)}
            />
          </div>
          <div className="col-lg-4 ">
            <EventDes />
          </div>
        </div>
      </div>
    );
  }
}

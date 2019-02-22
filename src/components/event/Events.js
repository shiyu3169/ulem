import React, { Component } from "react";
import Calendar from "react-calendar";
import EventDes from "./EventDes";
import Axios from "axios";
import EventToday from "./EventToday";
import loading from "../../img/loading.gif";
import EventAll from "./EventAll";

export default class Events extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: this.props.location.state
        ? this.makeDate(this.props.location.state.date)
        : new Date(),
      events: [],
      dates: [],
      showAll: false
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
          <div className="col-lg-4">
            {this.state.dates.length ? (
              <div className="fixed-pos">
                <h2 className="font-red mt-4">Events Calendar</h2>
                <Calendar
                  onChange={this.onChange}
                  value={this.state.date}
                  tileClassName={this.tileClassName}
                />
                <p className="mt-2">
                  <i className="far fa-square" /> = Date with Event
                </p>
                <input
                  type="checkbox"
                  name="showAll"
                  onChange={this.onSelect}
                />{" "}
                Show all events
              </div>
            ) : (
              <img className="center" src={loading} alt="loading" />
            )}
          </div>
          <div className="col-lg-4">
            {this.state.showAll && <EventAll events={this.state.events} />}
            {!this.state.showAll && (
              <EventToday
                date={this.state.date}
                events={this.filterEvents(this.state.events, this.state.date)}
              />
            )}
          </div>
          <div className="col-lg-4 ">
            <EventDes />
          </div>
        </div>
      </div>
    );
  }
}

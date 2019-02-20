import React, { Component } from "react";
import { Link } from "react-router-dom";
import loading from "../../img/loading.gif";

export default class EventSlides extends Component {
  componentDidUpdate(prevProps) {
    // Typical usage (don't forget to compare props):
    if (this.props.events !== prevProps.events) {
      window.$("#carousel-2").carousel({
        interval: 2400,
        pause: "false"
      });
    }
  }

  render() {
    const { events } = this.props;
    return (
      <React.Fragment>
        <Link to="/events" className="text-decoration">
          <h3 className="btn-outline-danger rounded p-2 cursor">
            Upcoming Events
            <i className="fas fa-calendar-alt float-right" />
          </h3>
        </Link>
        {events.length ? (
          <div
            id="carousel-2"
            className="carousel slide event-carousel"
            data-ride="carousel"
          >
            <ol className="carousel-indicators">
              <li
                data-target="#carousel-2"
                data-slide-to="0"
                className="active"
              />
              <li data-target="#carousel-2" data-slide-to="1" />
              <li data-target="#carousel-2" data-slide-to="2" />
            </ol>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <Link
                  to={{
                    pathname: "/events",
                    state: { date: events[0].start }
                  }}
                >
                  <div
                    style={{
                      background: `url(data:${
                        events[0].img.mimeType
                      };base64,${new Buffer(events[0].img.data).toString(
                        "base64"
                      )}) no-repeat top center/cover`,
                      height: "600px"
                    }}
                  />
                </Link>
              </div>
              <div className="carousel-item ">
                <Link
                  to={{
                    pathname: "/events",
                    state: { date: events[1].start }
                  }}
                >
                  <div
                    style={{
                      background: `url(data:${
                        events[1].img.mimeType
                      };base64,${new Buffer(events[1].img.data).toString(
                        "base64"
                      )}) no-repeat top center/cover`,
                      height: "600px"
                    }}
                  />
                </Link>
              </div>
              <div className="carousel-item ">
                <Link
                  to={{
                    pathname: "/events",
                    state: { date: events[2].start }
                  }}
                >
                  <div
                    style={{
                      background: `url(data:${
                        events[2].img.mimeType
                      };base64,${new Buffer(events[2].img.data).toString(
                        "base64"
                      )}) no-repeat top center/cover`,
                      height: "600px"
                    }}
                  />
                </Link>
              </div>
            </div>
            <a
              className="carousel-control-prev"
              href="#carousel-2"
              role="button"
              data-slide="prev"
            >
              <span className="carousel-control-prev-icon" aria-hidden="true" />
              <span className="sr-only">Previous</span>
            </a>
            <a
              className="carousel-control-next"
              href="#carousel-2"
              role="button"
              data-slide="next"
            >
              <span className="carousel-control-next-icon" aria-hidden="true" />
              <span className="sr-only">Next</span>
            </a>
          </div>
        ) : (
          <img className="center" src={loading} alt="loading" />
        )}
        <br />
        <Link
          className="btn btn-block btn-lg btn-outline-danger link"
          to="/events"
        >
          Event Calendar
        </Link>
      </React.Fragment>
    );
  }
}

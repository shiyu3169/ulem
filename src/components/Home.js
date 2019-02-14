import React, { Component } from "react";
import centennial from "../img/logo.PNG";
import { Link } from "react-router-dom";
import { TwitterTimelineEmbed } from "react-twitter-embed";
import Card from "./layout/Card";
import Youtube from "./layout/Youtube";
import Axios from "axios";
import loading from "../img/loading.gif";

export default class Home extends Component {
  state = {
    events: []
  };

  componentDidMount() {
    this.getTopEvents();
    window.$(".carousel").carousel({
      interval: 1800
    });
  }

  getTopEvents = async () => {
    const res = await Axios.get("/api/events/top");
    this.setState({
      events: res.data
    });
  };

  render() {
    const { events } = this.state;
    return (
      <div>
        <div className="container">
          <div className="full-width">
            <Link to="/centennial">
              <img
                src={centennial}
                alt="centennial"
                className="img-fluid cursor center"
              />
            </Link>
          </div>
          <div className="row">
            <div className="col-md-8">
              <Link to="/events" className="text-decoration">
                <h3 className="btn-outline-danger rounded p-2 cursor">
                  Upcoming Events
                  <i className="fas fa-calendar-alt float-right" />
                </h3>
              </Link>
              {events.length ? (
                <div
                  id="carouselExampleIndicators"
                  className="carousel slide"
                  data-ride="carousel">
                  <ol className="carousel-indicators">
                    <li
                      data-target="#carouselExampleIndicators"
                      data-slide-to="0"
                      className="active"
                    />
                    <li
                      data-target="#carouselExampleIndicators"
                      data-slide-to="1"
                    />
                    <li
                      data-target="#carouselExampleIndicators"
                      data-slide-to="2"
                    />
                  </ol>
                  <div className="carousel-inner">
                    <div className="carousel-item active">
                      <Link
                        to={{
                          pathname: "/events",
                          state: { date: events[0].start }
                        }}>
                        <img
                          className="crop"
                          alt="slide 1"
                          src={`data:${
                            events[0].img.mimeType
                          };base64,${new Buffer(events[0].img.data).toString(
                            "base64"
                          )}`}
                        />
                      </Link>
                    </div>
                    <div className="carousel-item ">
                      <Link
                        to={{
                          pathname: "/events",
                          state: { date: events[1].start }
                        }}>
                        <img
                          className="crop"
                          alt="slide 1"
                          src={`data:${
                            events[1].img.mimeType
                          };base64,${new Buffer(events[1].img.data).toString(
                            "base64"
                          )}`}
                        />
                      </Link>
                    </div>
                    <div className="carousel-item ">
                      <Link
                        to={{
                          pathname: "/events",
                          state: { date: events[2].start }
                        }}>
                        <img
                          className="crop"
                          alt="slide 1"
                          src={`data:${
                            events[2].img.mimeType
                          };base64,${new Buffer(events[2].img.data).toString(
                            "base64"
                          )}`}
                        />
                      </Link>
                    </div>
                  </div>
                  <a
                    className="carousel-control-prev"
                    href="#carouselExampleIndicators"
                    role="button"
                    data-slide="prev">
                    <span
                      className="carousel-control-prev-icon"
                      aria-hidden="true"
                    />
                    <span className="sr-only">Previous</span>
                  </a>
                  <a
                    className="carousel-control-next"
                    href="#carouselExampleIndicators"
                    role="button"
                    data-slide="next">
                    <span
                      className="carousel-control-next-icon"
                      aria-hidden="true"
                    />
                    <span className="sr-only">Next</span>
                  </a>
                </div>
              ) : (
                <img className="center" src={loading} alt="loading" />
              )}
              <br />
              <Link
                className="btn btn-block btn-lg btn-outline-danger link"
                to="/events">
                Event Calendar
              </Link>
            </div>
            <div className="col-md-4 col-11">
              <a
                href="https://twitter.com/theULEM"
                className="link"
                rel="noopener noreferrer"
                target="_blank">
                <h3 className="btn-outline-danger rounded p-2 nav-link-white">
                  Recent Tweets
                  <i className="fab fa-twitter float-right" />
                </h3>
              </a>
              <TwitterTimelineEmbed
                sourceType="profile"
                screenName="theULEM"
                noHeader
                noFooter
                options={{ height: 700 }}
              />
            </div>
          </div>
        </div>
        <br />
        <div className="fixed-bg">
          <br />
          <div className="container">
            <div className="card-deck">
              <Card
                title="Train for Employment"
                text="Need job skills? Interested in learning a new skill? Let us help you!"
                link="/program"
                icon="fas fa-graduation-cap fa-2x "
              />
              <Card
                title="Sponsors"
                text="They can never be thanked enough!"
                link="/sponsor"
                icon="fas fa-money-bill fa-2x"
              />
              <Card
                title="Our Impact"
                text="ULEM strives to empower communities and change lives every day."
                link="/impact"
                icon="fas fa-thumbs-up fa-2x"
              />
            </div>
            <br />
            <div className="card-deck">
              <Card
                title="Our Auxiliaries"
                text="Interested in directly making an impact at the Urban League?"
                link="/auxiliaries"
                icon="fas fa-building fa-2x"
              />
              <Card
                title="Become a Member"
                text="Interested in joining the Urban League of Eastern Massachusetts?"
                link="/member"
                icon="fas fa-users fa-2x"
              />
              <Card
                title="Stay in Touch"
                text="Socialize and stay updated on what we are doing through social media!"
                link="/contact"
                icon="fas fa-envelope fa-2x"
              />
            </div>
          </div>
          <br />
        </div>
        <br />
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <h3 className="btn-outline-danger rounded p-2 cursor">
                News
                <i className="far fa-newspaper float-right" />
              </h3>
              <small className="float-right mb-1">Feb. 7, 2019</small>
              <img
                className="img-fluid"
                src="http://www.ypnulem.org/uploads/I%20AM%20Empowered%20Scholarship.png"
                alt="news"
              />
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias
                repellendus adipisci amet expedita temporibus libero pariatur
                totam error impedit. Quod cum totam ut reiciendis velit sapiente
                expedita blanditiis fugiat ducimus.
              </p>
            </div>
            <div className="col-md-6">
              <h3 className="btn-outline-danger rounded p-2 cursor">
                ULEM Youtube
                <i className="fab fa-youtube fa-lg float-right" />
              </h3>
              <Youtube />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

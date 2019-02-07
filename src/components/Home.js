import React, { Component } from "react";
import centennial from "../logo.PNG";
import { Link } from "react-router-dom";
import { TwitterTimelineEmbed } from "react-twitter-embed";
import Card from "./layout/Card";
import Youtube from "./layout/Youtube";
export default class Home extends Component {
  componentDidMount() {
    window.$(".carousel").carousel({
      interval: 1800
    });
  }

  slide1 = {
    background: `url("http://www.ypnulem.org/uploads/photos/o/1546923553_Join%20Week%202019-5.jpg")`,
    backgroundRepeat: "no-repeat, repeat",
    backgroundPosition: "top center"
  };

  slide2 = {
    background: `url("http://www.ypnulem.org/uploads/photos/o/1546923693_ULEM%202019%20Annual%20Meeting.png")`,
    backgroundRepeat: "no-repeat, repeat",
    backgroundPosition: "top center"
  };

  slide3 = {
    background: `url("http://www.ypnulem.org/uploads/photos/o/1546923608_Taking%20It%20To%20The%20Streets%202019.jpeg")`,
    backgroundRepeat: "no-repeat, repeat",
    backgroundPosition: "top center"
  };

  render() {
    return (
      <div>
        <div className="container">
          <div className="full-width">
            <img
              src={centennial}
              alt="centennial"
              class="img-fluid cursor center"
            />
          </div>
          <div className="row">
            <div className="col-md-8">
              <h3 className="btn-outline-danger rounded p-2 cursor">
                Upcoming Events
                <i class="fas fa-calendar-alt float-right" />
              </h3>
              <div
                id="carouselExampleIndicators"
                class="carousel slide"
                data-ride="carousel">
                <ol class="carousel-indicators">
                  <li
                    data-target="#carouselExampleIndicators"
                    data-slide-to="0"
                    class="active"
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
                <div class="carousel-inner">
                  <div class="carousel-item active crop" style={this.slide1} />
                  <div class="carousel-item crop" style={this.slide2} />
                  <div class="carousel-item crop" style={this.slide3} />
                </div>
                <a
                  class="carousel-control-prev"
                  href="#carouselExampleIndicators"
                  role="button"
                  data-slide="prev">
                  <span class="carousel-control-prev-icon" aria-hidden="true" />
                  <span class="sr-only">Previous</span>
                </a>
                <a
                  class="carousel-control-next"
                  href="#carouselExampleIndicators"
                  role="button"
                  data-slide="next">
                  <span class="carousel-control-next-icon" aria-hidden="true" />
                  <span class="sr-only">Next</span>
                </a>
              </div>
              <br />
              <button className="btn btn-block btn-lg btn-outline-danger">
                <Link className="link" to="/">
                  Event Calendar
                </Link>
              </button>
            </div>
            <div className="col-md-4">
              <h3 className="btn-outline-danger rounded p-2 nav-link-white">
                Recent Tweets
                <i class="fab fa-twitter float-right" />
              </h3>
              <TwitterTimelineEmbed
                sourceType="profile"
                screenName="theULEM"
                noHeader
                noFooter
                options={{ height: 500 }}
              />
            </div>
          </div>
        </div>
        <br />
        <div className="fixed-bg">
          <br />
          <div className="container">
            <div class="card-deck">
              <Card
                title="Train for Employment"
                text="Need job skills? Interested in learning a new skill? Let us help you!"
                link="/program"
              />
              <Card
                title="Sponsors"
                text="They can never be thanked enough!"
                link="/sponsor"
              />
              <Card
                title="Our Impact"
                text="ULEM strives to empower communities and change lives every day."
                link="/impact"
              />
            </div>
            <br />
            <div class="card-deck">
              <Card
                title="Our Auxiliaries"
                text="Interested in directly making an impact at the Urban League?"
                link="/auxiliaries"
              />
              <Card
                title="Become a Member"
                text="Interested in joining the Urban League of Eastern Massachusetts?"
                link="/member"
              />
              <Card
                title="Stay in Touch"
                text="Socialize and stay updated on what we are doing through social media!"
                link="/contact"
              />
            </div>
          </div>
        </div>
        <br />
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <h3 className="btn-outline-danger rounded p-2 cursor">
                News
                <i class="far fa-newspaper float-right" />
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
                <i class="fab fa-youtube fa-lg float-right" />
              </h3>
              <Youtube />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

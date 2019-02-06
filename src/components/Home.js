import React, { Component } from "react";
import ulem from "../ulem.png";
import centennial from "../logo.PNG";
import { Link } from "react-router-dom";
import { TwitterTimelineEmbed } from "react-twitter-embed";
import Navbar from "./layout/Navbar";
import Card from "./layout/Card";
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
          <header className="blog-header py-3">
            <div className="row flex-nowrap justify-content-between align-items-center">
              <div className="col-4 pt-1" />
              <div className="col-4 text-center">
                <img src={ulem} alt="ulem" class="img-fluid" />
              </div>
              <div className="col-4 d-flex justify-content-end align-items-center">
                <i className="fas fa-search" />
              </div>
            </div>
          </header>
          <Navbar />
          <div className="full-width">
            <img
              src={centennial}
              alt="centennial"
              class="img-fluid cursor center"
            />
          </div>

          <div className="row">
            <div className="col-md-8">
              <h3 className="btn-outline-danger rounded p-2">
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
          <div className="container">
            <div className="row">
              <div className="col-md-4">
                <Card />
              </div>
              <div className="col-md-4">
                <div class="card">
                  <div class="card-body">
                    <h5 class="card-title">Sponsors</h5>
                    <p class="card-text">They can never be thanked enough!</p>
                    <br />
                    <a href="#" class="btn btn-dark">
                      Read More
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div class="card">
                  <div class="card-body">
                    <h5 class="card-title">Our Impact</h5>
                    <p class="card-text">
                      ULEM strives to empower communities and change lives every
                      day.
                    </p>
                    <a href="#" class="btn btn-dark">
                      Read More
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <br />
            <div className="row">
              <div className="col-md-4">
                <div class="card">
                  <div class="card-body">
                    <h5 class="card-title">Our Auxiliaries</h5>
                    <p class="card-text">
                      Interested in directly making an impact at the Urban
                      League?
                    </p>
                    <a href="#" class="btn btn-dark">
                      Read More
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div class="card">
                  <div class="card-body">
                    <h5 class="card-title">Become a Member</h5>
                    <p class="card-text">
                      Interested in joining the Urban League of Eastern
                      Massachusetts?
                    </p>
                    <a href="#" class="btn btn-dark">
                      Read More
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div class="card">
                  <div class="card-body">
                    <h5 class="card-title">Stay in Touch</h5>
                    <p class="card-text">
                      Socialize and stay updated on what we are doing through
                      social media!
                    </p>
                    <a href="#" class="btn btn-dark">
                      Read More
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <main className="container">
          <div className="row">
            <div className="col-md-8">
              <h1>News</h1>
              <img
                src="http://www.ypnulem.org/uploads/I%20AM%20Empowered%20Scholarship.png"
                alt=""
                className="img-fluid"
              />
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro
                consequatur facilis ullam sapiente tempore alias accusamus
                incidunt maiores. Mollitia sunt nemo esse consequuntur ipsum
                adipisci aspernatur excepturi alias. Dolores, libero.
              </p>
            </div>
            <div className="col-md-4" />
          </div>
        </main>
      </div>
    );
  }
}

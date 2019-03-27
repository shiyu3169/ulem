import React, { Component } from "react";
import { Link } from "react-router-dom";
import msimbo from "../../img/MSIMBOFlyer.png";
import digiul from "../../img/DigiUL.png";
import ulemBuilding from "../../img/ulemBuilding.JPG";
import marathonBanner from "../../img/ULEM-MarathonBanner.png";
import banner100 from "../../img/Banner100.jpg";
import $ from "jquery";
import "popper.js";
import "bootstrap";

export default class TopSlides extends Component {
  componentDidMount() {
    $(".top-carousel").carousel({
      interval: 2400
    });
  }

  render() {
    return (
      <div
        id="carouselExampleControls"
        className="carousel slide top-carousel mb-3"
        data-ride="carousel"
      >
        <ol className="carousel-indicators">
          <li
            data-target="#carouselExampleControls"
            data-slide-to="0"
            className="active"
          />
          <li data-target="#carouselExampleControls" data-slide-to="1" />
          <li data-target="#carouselExampleControls" data-slide-to="2" />
          <li data-target="#carouselExampleControls" data-slide-to="3" />
          <li data-target="#carouselExampleControls" data-slide-to="4" />
        </ol>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <Link to="/about" className="link-white">
              <div
                className="top-slide"
                style={{
                  background: `url(${ulemBuilding}) no-repeat top center/cover`
                }}
              >
                <div className="text-center">
                  <h1
                    className="link-white"
                    style={{
                      paddingTop: "23%",
                      color: "white",
                      textShadow: "2px 2px 5px red"
                    }}
                  >
                    <strong>Empowering Communities. Changing Lives.</strong>
                  </h1>
                  <h3
                    className="font-white"
                    style={{ textShadow: "2px 2px #ff0000" }}
                  >
                    From Experiment. To Experience. To Exposure.
                  </h3>
                </div>
              </div>
            </Link>
          </div>
          <div className="carousel-item">
            <Link to="/centennialIntro">
              <div className="top-slide d-none d-lg-block">
                <img src={banner100} alt="100th" width="100%" height="100%" />
              </div>
              <div
                className="top-slide d-lg-none"
                style={{
                  background: `url(${banner100}) no-repeat top center/cover`
                }}
              />
            </Link>
          </div>
          <div className="carousel-item">
            <Link to="/program">
              <div
                className="top-slide"
                style={{
                  background: `url(${digiul}) no-repeat top center/cover`
                }}
              />
            </Link>
          </div>
          <div className="carousel-item">
            <Link to="/program">
              <div
                className="top-slide"
                style={{
                  background: `url(${msimbo}) no-repeat top center/cover`
                }}
              />
            </Link>
          </div>
          <div className="carousel-item">
            <Link to="/marathon">
              <div
                className="top-slide"
                style={{
                  background: `url(${marathonBanner}) no-repeat top center/cover`
                }}
              />
            </Link>
          </div>
        </div>
        <a
          className="carousel-control-prev"
          href="#carouselExampleControls"
          role="button"
          data-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="sr-only">Previous</span>
        </a>
        <a
          className="carousel-control-next"
          href="#carouselExampleControls"
          role="button"
          data-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="sr-only">Next</span>
        </a>
      </div>
    );
  }
}

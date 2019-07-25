import React, { Component } from "react";
import msimbo from "../../img/MSIMBOFlyer.png";
import digiul from "../../img/DigiUL.png";
import ulemBuilding from "../../img/ulemBuilding.JPG";
import marathonBanner from "../../img/ULEM-MarathonBanner.png";
import banner100 from "../../img/Banner100.png";
import jobBanner from "../../img/jobBanner.png";
import logoBanner from "../../img/logoBanner.jpg";

import $ from "jquery";
import "popper.js";
import "bootstrap";
import TopSlide from "./TopSlide";

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
          <li data-target="#carouselExampleControls" data-slide-to="5" />
          <li data-target="#carouselExampleControls" data-slide-to="6" />
        </ol>
        <div className="carousel-inner">
          <TopSlide
            img={ulemBuilding}
            to="/about"
            active="active"
            h1=" Empowering Communities. Changing Lives."
            h3="From Experiment To Experience To Exposure"
            x="center"
            y="top"
          />
          <TopSlide img={banner100} to="/program" x="center" y="center" />
          <TopSlide img={logoBanner} to="/sponsor" x="center" y="center" />
          <TopSlide img={digiul} to="/program" x="center" y="top" />
          <TopSlide img={msimbo} to="/program" x="center" y="top" />
          <TopSlide img={marathonBanner} to="/marathon" x="center" y="center" />
          <TopSlide
            img={jobBanner}
            href="https://www.jobcase.com/ulem"
            x="center"
            y="bottom"
          />
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

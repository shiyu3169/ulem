import React, { Component } from "react";
import { Link } from "react-router-dom";
import msimbo from "../../img/MSIMBOFlyer.png";
import digiul from "../../img/DigiUL.png";
import ulemBuilding from "../../img/ulemBuilding.JPG";

export default class TopSlides extends Component {
  componentDidMount() {
    window.$(".top-carousel").carousel({
      interval: 4200,
      pause: "false"
    });
  }

  render() {
    return (
      <div
        id="carouselExampleControls"
        className="carousel slide top-carousel mb-3"
        data-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <Link to="/about" className="link-white">
              <div
                style={{
                  background: `url(${ulemBuilding}) no-repeat top center/cover`,
                  height: "70vh",
                  backgroundPosition: "center TOP",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover"
                }}
              >
                <div className="text-center">
                  <h1
                    className="link-white"
                    style={{
                      paddingTop: "23%",
                      color: "white",
                      textShadow: "2px 2px #ff0000"
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
            <Link to="/program">
              <div
                style={{
                  backgroundImage: `url(${digiul})`,
                  height: "70vh",
                  backgroundPosition: "center TOP",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover"
                }}
              />
            </Link>
          </div>
          <div className="carousel-item">
            <Link to="/program">
              <div
                style={{
                  background: `url(${msimbo}) no-repeat top center/cover`,
                  height: "70vh",
                  backgroundPosition: "center TOP",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "100% 100%"
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
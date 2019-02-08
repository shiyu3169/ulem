import React, { Component } from "react";
import ulem100 from "../../img/ulem100.png";
import { HashLink as Link } from "react-router-hash-link";
export default class Footer extends Component {
  render() {
    return (
      <footer className="container-fluid bg-danger mt-5 pt-4">
        <div className="row">
          <div className="col-md-2 text-center">
            <img
              src={ulem100}
              className="img-fluid"
              id="footer-img-height"
              alt=""
            />
          </div>
          <div className="col-md-2" />
          <div className="col-md-3">
            <h5 className="font-weight-bold text-uppercase mb-4 font-white">
              About
            </h5>
            <ul className="list-unstyled">
              <li>
                <p>
                  <Link className="font-white" to="/about#mission">
                    Missions & Overview
                  </Link>
                </p>
              </li>
              <li>
                <p>
                  <Link className="font-white" to="/about#milestone">
                    Our Milestones
                  </Link>
                </p>
              </li>
              <li>
                <p>
                  <Link className="font-white" to="/about#leadership">
                    Leadership
                  </Link>
                </p>
              </li>
              <li>
                <p>
                  <Link className="font-white" to="/about#board">
                    Board of Directors
                  </Link>
                </p>
              </li>
            </ul>
          </div>

          <div className="col-md-3">
            <h5 className="font-weight-bold text-uppercase mb-4 font-white">
              Address
            </h5>
            <ul className="list-unstyled">
              <li>
                <p className="font-white">
                  <i className="fas fa-home mr-3" /> 88 Warren Street, Roxbury,
                  MA 02119
                </p>
              </li>
              <li>
                <p className="font-white">
                  <i className="fas fa-envelope mr-3" /> info@example.com
                </p>
              </li>
              <li>
                <p className="font-white">
                  <i className="fas fa-phone mr-3" /> + 01 617 442 4519
                </p>
              </li>
              <li>
                <p className="font-white">
                  <i className="fas fa-print mr-3" /> + 01 617 442 0562
                </p>
              </li>
            </ul>
          </div>
          <div className="col-md-2 text-center">
            <h5 className="font-weight-bold text-uppercase mb-4 font-white">
              Follow Us
            </h5>
            <div className="row">
              <div className="col-md-6 text-center mb-5">
                <a
                  href="https://www.facebook.com/theulem/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-white">
                  <i className="fab fa-facebook fa-3x" />
                </a>
              </div>
              <div className="col-md-6 text-center mb-5">
                <a
                  href="https://twitter.com/theULEM"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-white">
                  <i className="fab fa-twitter-square fa-3x" />
                </a>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6 text-center mb-5">
                <a
                  href="https://www.linkedin.com/company/urban-league-of-eastern-massachusetts/about/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-white">
                  <i className="fab fa-linkedin fa-3x" />
                </a>
              </div>
              <div className="col-md-6 text-center mb-5">
                <a
                  href="https://www.instagram.com/theulem/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-white">
                  <i className="fab fa-instagram fa-3x" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center font-white">© 2019 Copyright: ULEM</div>
      </footer>
    );
  }
}

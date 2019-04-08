import React, { Component } from "react";
import { Link } from "react-router-dom";
import ulem from "../../img/ulem.png";
import $ from "jquery";

export default class Navbar extends Component {
  collapse() {
    $(".collapse").collapse("hide");
  }
  render() {
    return (
      <React.Fragment>
        <div className="container">
          <header className="blog-header py-3">
            <div className="row flex-nowrap justify-content-between align-items-center">
              <div className="col-md-4" />
              <div className="col-md-4 text-center">
                <Link to="/">
                  <img src={ulem} alt="ulem" className="img-fluid" />
                </Link>
              </div>
              <div className="col-md-4" />
            </div>
          </header>
        </div>
        <div />
        <nav className="navbar navbar-expand-lg sticky ulem-bg-primary">
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="fas fa-bars" />
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav nav-margin">
              <li className="nav-item" onClick={this.collapse}>
                <Link className="nav-link" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item dropdown">
                <span
                  className="nav-link dropdown-toggle"
                  data-toggle="dropdown"
                  role="button"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  About
                </span>
                <div className="dropdown-menu" onClick={this.collapse}>
                  <Link className="nav-link text-dark" to="/about">
                    About ULEM
                  </Link>
                  <Link className="nav-link text-dark" to="/leadership">
                    Leadership
                  </Link>
                  <Link className="nav-link text-dark" to="/board">
                    Board of Directors
                  </Link>
                  <Link className="nav-link text-dark" to="/staff">
                    Our Staff
                  </Link>
                  <Link className="nav-link text-dark" to="/impact">
                    Our Impact
                  </Link>
                  <Link className="nav-link text-dark" to="/contact">
                    Contact Us
                  </Link>
                </div>
              </li>
              <li className="nav-item" onClick={this.collapse}>
                <Link className="nav-link" to="/program">
                  Programs & Services
                </Link>
              </li>
              <li className="nav-item" onClick={this.collapse}>
                <Link className="nav-link" to="/events">
                  Events
                </Link>
              </li>
              <li className="nav-item dropdown">
                <span
                  className="nav-link dropdown-toggle"
                  data-toggle="dropdown"
                  role="button"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Support
                </span>
                <div className="dropdown-menu">
                  <Link
                    className="nav-link text-dark"
                    to="/membership"
                    onClick={this.collapse}
                  >
                    Become A Member
                  </Link>
                  <Link
                    className="nav-link text-dark"
                    to="/sponsor"
                    onClick={this.collapse}
                  >
                    Sponsor
                  </Link>
                  <Link
                    className="nav-link text-dark"
                    to="/auxiliaries"
                    onClick={this.collapse}
                  >
                    Our Auxiliaries
                  </Link>
                  <span
                    className="nav-link dropdown-toggle text-dark"
                    data-toggle="dropdown"
                    role="button"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Donate
                  </span>
                  <div className="dropdown-menu">
                    <Link
                      className="nav-link text-dark"
                      to="/howToDonate"
                      onClick={this.collapse}
                    >
                      How to Donate
                    </Link>
                    <Link
                      className="nav-link text-dark"
                      to="/donate"
                      onClick={this.collapse}
                    >
                      Donate Now
                    </Link>
                  </div>
                </div>
              </li>
              <li className="nav-item" onClick={this.collapse}>
                <Link className="nav-link" to="/marathon">
                  ULEM Marathon Team
                </Link>
              </li>
              <li className="nav-item dropdown">
                <span
                  className="nav-link dropdown-toggle"
                  data-toggle="dropdown"
                  role="button"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Centennial
                </span>
                <div className="dropdown-menu" onClick={this.collapse}>
                  <Link className="nav-link text-dark" to="/centennialIntro">
                    Celebration
                  </Link>
                  <Link className="nav-link text-dark" to="/centennial">
                    Milestone
                  </Link>
                  <Link
                    className="nav-link text-dark"
                    to="/centennialMembership"
                  >
                    Centennial Membership
                  </Link>
                </div>
              </li>
              <li className="nav-item dropdown">
                <span
                  className="nav-link dropdown-toggle"
                  data-toggle="dropdown"
                  role="button"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Employment Opportunities
                </span>
                <div className="dropdown-menu" onClick={this.collapse}>
                  <a
                    className="nav-link text-dark"
                    href="https://www.jobcase.com/ulem"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Opportunities
                  </a>
                  <a
                    className="nav-link text-dark"
                    href="https://www.jobcase.com/ulem_signup?"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Jobseekers
                  </a>
                  <a
                    className="nav-link text-dark"
                    href="https://www.jobcase.com/ulem_featured_employer?"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Corporate Partners
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </nav>
      </React.Fragment>
    );
  }
}

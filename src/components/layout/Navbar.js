import React, { Component } from "react";
import { Link } from "react-router-dom";
export default class Navbar extends Component {
  render() {
    return (
      <nav class="navbar navbar-expand-lg">
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation">
          <i class="fas fa-bars" />
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav nav-margin">
            <li class="nav-item">
              <Link className="nav-link nav-link" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item dropdown">
              <span
                className="nav-link dropdown-toggle nav-link"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false">
                About
              </span>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <Link className="dropdown-item nav-link" to="#">
                  Mission and Overview
                </Link>
                <div className="dropdown-divider" />
                <Link className="dropdown-item nav-link" to="#">
                  Our Milestones
                </Link>
                <div className="dropdown-divider" />
                <Link className="dropdown-item nav-link" to="#">
                  Leadership
                </Link>
                <div className="dropdown-divider" />
                <Link className="dropdown-item nav-link" to="#">
                  Board of Directors
                </Link>
              </div>
            </li>
            <li className="nav-item dropdown">
              <span
                className="nav-link dropdown-toggle nav-link"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false">
                Programs & Services
              </span>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <Link className="dropdown-item nav-link" to="#">
                  Workforce Development Training Programs
                </Link>
                <div className="dropdown-divider" />
                <Link className="dropdown-item  nav-link " to="#">
                  Support Services
                </Link>
                <div className="dropdown-divider" />
                <Link className="dropdown-item nav-link" to="#">
                  Certifications
                </Link>
              </div>
            </li>
            <li class="nav-item">
              <Link className="nav-link nav-link" to="/">
                Events
              </Link>
            </li>
            <li class="nav-item">
              <Link className="nav-link nav-link" to="/">
                Donate
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

import React, { Component } from "react";
import { HashLink as Link } from "react-router-hash-link";

export default class MarathonNav extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg sub-sticky bg-light">
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
              <Link className="sub-nav" to="/marathon">
                About Us
              </Link>
            </li>
            <li className="nav-item" onClick={this.collapse}>
              <Link className="sub-nav" to="/marathon">
                Runners
              </Link>
            </li>
            <li className="nav-item" onClick={this.collapse}>
              <Link className="sub-nav" to="/marathon">
                Sponsors
              </Link>
            </li>
            <li className="nav-item" onClick={this.collapse}>
              <Link className="sub-nav" to="/marathon">
                Volunteers
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

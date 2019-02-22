import React, { Component } from "react";

export default class MarathonNav extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg sub-sticky bg-dark">
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
              <a className="sub-nav" href="#about">
                About Us
              </a>
            </li>
            <li className="nav-item" onClick={this.collapse}>
              <a
                className="sub-nav"
                href="https://charityteamsruns.wufoo.com/forms/zmft5wr102cuhb/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Application for Runners
              </a>
            </li>
            <li className="nav-item" onClick={this.collapse}>
              <a className="sub-nav" href="#sponsors">
                Sponsors
              </a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

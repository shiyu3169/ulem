import React, { Component } from "react";

export default class MarathonNav extends Component {
  render() {
    return (
      <nav className="navbar sub-sticky bg-dark">
        <ul className="nav-margin list-inline">
          <li className="list-inline-item mr-4" onClick={this.collapse}>
            <a className="sub-nav" href="#about">
              About Us
            </a>
          </li>
          <li className="list-inline-item mr-4" onClick={this.collapse}>
            <a className="sub-nav" href="#application">
              Application for Runners
            </a>
          </li>
          <li className="list-inline-item" onClick={this.collapse}>
            <a className="sub-nav" href="#sponsors">
              Sponsors
            </a>
          </li>
        </ul>
      </nav>
    );
  }
}

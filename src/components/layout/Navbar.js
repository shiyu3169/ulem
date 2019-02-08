import React, { Component } from "react";
import { Link } from "react-router-dom";
import ulem from "../../ulem.png";
export default class Navbar extends Component {
  collapse() {
    window.$(".collapse").collapse("hide");
  }
  render() {
    return (
      <React.Fragment>
        <div className="container">
          <header className="blog-header py-3">
            <div className="row flex-nowrap justify-content-between align-items-center">
              <div className="col-4 pt-1" />
              <div className="col-4 text-center">
                <img src={ulem} alt="ulem" className="img-fluid" />
              </div>
              <div className="col-4 d-flex justify-content-end align-items-center" />
            </div>
          </header>
        </div>
        <div />
        <nav className="navbar navbar-expand-lg sticky bg-danger">
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation">
            <i className="fas fa-bars" />
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav nav-margin">
              <li className="nav-item" onClick={this.collapse}>
                <Link className="nav-link" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item" onClick={this.collapse}>
                <Link className="nav-link" to="/about">
                  About
                </Link>
              </li>
              <li className="nav-item" onClick={this.collapse}>
                <Link className="nav-link" to="/program">
                  Programs & Services
                </Link>
              </li>
              <li className="nav-item" onClick={this.collapse}>
                <Link className="nav-link nav-link" to="/events">
                  Events
                </Link>
              </li>
              <li className="nav-item" onClick={this.collapse}>
                <Link className="nav-link nav-link" to="/donate">
                  Donate
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </React.Fragment>
    );
  }
}

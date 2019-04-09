import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class TopSlide extends Component {
  render() {
    return (
      <div className={`carousel-item ${this.props.active}`}>
        {this.props.to &&
          <Link to={this.props.to}>
            <div
              className="top-slide"
              style={{
                background: `url(${this.props.img}) no-repeat ${this.props
                  .y} ${this.props.x}/cover`
              }}
            >
              <div
                className="text-center"
                style={{
                  paddingTop: "20%",
                  color: "white",
                  textShadow: "2px 2px 5px red"
                }}
              >
                <h3 className="hoverToShow">Click for more information</h3>
                <h1 className="link-white">
                  {this.props.h1}
                </h1>
                <h3
                  className="font-white"
                  style={{ textShadow: "2px 2px #ff0000" }}
                >
                  {this.props.h3}
                  <br />
                  <br />
                </h3>
              </div>
            </div>
          </Link>}
        {this.props.href &&
          <a href={this.props.href} target="_blank" rel="noopener noreferrer">
            <div
              className="top-slide"
              style={{
                background: `url(${this.props.img}) no-repeat ${this.props
                  .y} ${this.props.x}/cover`
              }}
            >
              <div
                className="text-center"
                style={{
                  paddingTop: "25%",
                  color: "white",
                  textShadow: "2px 2px 5px red"
                }}
              >
                <h3 className="hoverToShow">Click for more information</h3>
                <h1 className="link-white">
                  {this.props.h1}
                </h1>
                <h3
                  className="font-white"
                  style={{ textShadow: "2px 2px #ff0000" }}
                >
                  {this.props.h3}
                  <br />
                  <br />
                </h3>
              </div>
            </div>
          </a>}
      </div>
    );
  }
}

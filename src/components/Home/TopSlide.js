import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class TopSlide extends Component {
  render() {
    return (
      <div className={`carousel-item ${this.props.active}`}>
        <Link to={this.props.to}>
          <div
            className="top-slide"
            style={{
              background: `url(${this.props.img}) no-repeat ${this.props
                .y} ${this.props.x}/cover`
            }}
          >
            <div className="text-center">
              <h1
                className="link-white"
                style={{
                  paddingTop: "23%",
                  color: "white",
                  textShadow: "2px 2px 5px red"
                }}
              >
                {this.props.h1}
              </h1>
              <h3
                className="font-white"
                style={{ textShadow: "2px 2px #ff0000" }}
              >
                {this.props.h3}
                <br />
                <br />
                <span className="hoverToShow">Click for more information</span>
              </h3>
            </div>
          </div>
        </Link>
      </div>
    );
  }
}

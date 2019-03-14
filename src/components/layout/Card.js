import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Card extends Component {
  state = {
    show: false
  };

  mouseOver = () => {
    this.setState({
      show: true
    });
  };

  mouseOut = () => {
    this.setState({
      show: false
    });
  };
  render() {
    const { title, text, link, icon } = this.props;
    return (
      <Link
        to={link}
        className="card link-no-style border mb-2 mt-2"
        onMouseOver={this.mouseOver}
        onMouseOut={this.mouseOut}
      >
        <div className="card-body">
          <div className="text-center">
            <i className={`ulem-text-primary ${icon}`} />
          </div>
          <br />
          <h5 className="card-title text-center text-center transition">
            <strong>{title}</strong>
          </h5>
          <p
            className="card-text transition text-center"
            style={{ opacity: this.state.show ? 1 : 0 }}
          >
            {text}
          </p>
        </div>
        <footer className="container mb-2" />
      </Link>
    );
  }
}

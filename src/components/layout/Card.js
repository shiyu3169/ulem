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
      <div
        className="card"
        onMouseOver={this.mouseOver}
        onMouseOut={this.mouseOut}>
        <div className="card-body">
          <div className="text-center">
            <i className={icon} />
          </div>
          <h5
            className="card-title text-center text-center transition"
            style={{
              opacity: this.state.show ? 0 : 1
            }}>
            <strong>{title}</strong>
          </h5>
          <p
            className="card-text transition text-center"
            style={{ opacity: this.state.show ? 1 : 0 }}>
            {text}
          </p>
        </div>
        <footer className="container mb-2">
          <Link to={link} className="btn btn-outline-danger center">
            Read More
          </Link>
        </footer>
      </div>
    );
  }
}

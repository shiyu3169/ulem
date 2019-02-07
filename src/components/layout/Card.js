import React, { Component } from "react";

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
    const { title, text, link } = this.props;
    return (
      <div
        className="card"
        onMouseOver={this.mouseOver}
        onMouseOut={this.mouseOut}>
        <div className="card-body">
          <h5 className="card-title text-center">{title}</h5>
          <p
            className="card-text transition text-center"
            style={{ opacity: this.state.show ? 1 : 0 }}>
            {text}
          </p>
        </div>
        <footer class="container mb-2">
          <a href={link} className="btn btn-outline-danger center">
            Read More
          </a>
        </footer>
      </div>
    );
  }
}

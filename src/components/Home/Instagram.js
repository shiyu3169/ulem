import React, { Component } from "react";

export default class Instagram extends Component {
  render() {
    return (
      <div className="mr-5">
        <a
          className="link"
          href="https://www.instagram.com/theulem/"
          rel="noopener noreferrer"
          target="_blank"
        >
          <h3 className="btn-outline-danger rounded p-2 cursor">
            ULEM Instagram
            <i className="fab fa-instagram fa-lg float-right" />
          </h3>
        </a>
        <div id="curator-feed" />
      </div>
    );
  }
}

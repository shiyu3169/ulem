import React, { Component } from "react";

export default class Instagram extends Component {
  componentDidMount() {
    /* curator-feed */
    let i,
      e,
      d = document,
      s = "script";
    i = d.createElement("script");
    i.async = 1;
    i.src =
      "https://cdn.curator.io/published/69fcc34b-8235-482b-8bd6-bb0cf90b45b4.js";
    e = d.getElementsByTagName(s)[0];
    e.parentNode.insertBefore(i, e);
  }
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

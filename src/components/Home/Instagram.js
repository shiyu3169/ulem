import React, { Component } from "react";

export default class Instagram extends Component {
  render() {
    return (
      <React.Fragment>
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

        <iframe
          src="https://snapwidget.com/embed/663214"
          class="snapwidget-widget"
          allowtransparency="true"
          frameborder="0"
          scrolling="no"
          title="instagram"
          style={{ border: "none", overflow: "hidden", width: "100%" }}
        />
        <div
          style={{
            font:
              "10px/14px 'Roboto','Helvetica Neue',Arial,Helvetica,sans-serif",
            fontWeight: 400,
            width: "100%",
            textAlign: "right"
          }}
        />
      </React.Fragment>
    );
  }
}

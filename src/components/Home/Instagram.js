import React, { Component, Fragment } from "react";

export default class Instagram extends Component {
  render() {
    return (
      <Fragment>
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
          src="//lightwidget.com/widgets/b5fa1f3fa9ca5bfbb0000608b4fa4962.html"
          scrolling="no"
          allowtransparency="true"
          className="lightwidget-widget "
          title="instagram"
          style={{ width: "100%", border: 0, overflow: "hidden" }}
        />
      </Fragment>
    );
  }
}

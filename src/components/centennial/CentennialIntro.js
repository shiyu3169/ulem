import React, { Component } from "react";
import centennial from "../../img/logo.PNG";
export default class CentennialIntro extends Component {
  render() {
    return (
      <div className="container">
        <img
          src={centennial}
          alt="centennial"
          className="img-fluid cursor center"
        />
        <h1>Coming Soon</h1>
      </div>
    );
  }
}

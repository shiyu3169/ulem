import React, { Component } from "react";
import Milestone from "./about/Milestone";
import centennial from "../img/logo.PNG";
export default class Centennial extends Component {
  render() {
    return (
      <div className="container">
        <img
          src={centennial}
          alt="centennial"
          className="img-fluid cursor center"
        />
        <Milestone />
      </div>
    );
  }
}

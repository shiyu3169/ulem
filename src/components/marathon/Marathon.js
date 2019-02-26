import React, { Component } from "react";
import MarathonNav from "./MarathonNav";
import MarathonAbout from "./MarathonAbout";
import MarathonBanner from "../../img/ULEM-MarathonBanner2.png";
export default class Marathon extends Component {
  render() {
    return (
      <div>
        <MarathonNav />
        <img
          src={MarathonBanner}
          alt="Marathon"
          className="img-fluid"
          width="100%"
        />
        <div className="container">
          <MarathonAbout />
        </div>
      </div>
    );
  }
}

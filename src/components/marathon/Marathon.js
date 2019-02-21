import React, { Component } from "react";
import MarathonNav from "./MarathonNav";

export default class Marathon extends Component {
  render() {
    return (
      <div>
        <MarathonNav />
        <img
          src="http://www.msdacademy.org/wp-content/uploads/2018/04/Boston-marathon-web-banner.jpg"
          alt="Marathon"
          className="img-fluid"
          width="100%"
        />
      </div>
    );
  }
}

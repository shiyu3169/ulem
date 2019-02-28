import React, { Component } from "react";
import { TwitterTimelineEmbed } from "react-twitter-embed";

export default class Twitter extends Component {
  render() {
    return (
      <div>
        <TwitterTimelineEmbed
          sourceType="profile"
          screenName="theULEM"
          noHeader
          noFooter
          options={{ height: 700 }}
        />
      </div>
    );
  }
}

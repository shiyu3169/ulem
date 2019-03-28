import React, { Component } from "react";
import { Link } from "react-router-dom";
export default class BgVideo extends Component {
  render() {
    return (
      <div className="embed-responsive embed-responsive-16by9">
        <div className="video-background">
          <div className="video-foreground">
            <iframe
              src="https://www.youtube.com/embed/NdxADLogYqU?autoplay=1&mute=1&controls=0&loop=1&modestbranding=1&rel=0&showinfo=0"
              frameBorder="0"
              allowFullScreen
              allow="autoplay"
              title="program"
            />
          </div>
        </div>
        <div id="vidtop-content">
          <div className="vid-info">
            <h2 className="vid-text">
              All of ULEM’s workforce development programs are at no cost to
              participants. Brief descriptions are below, but for details, we
              encourage you to attend an information session. Information
              sessions are held every Tuesday and Wednesday at 1pm. No RSVP is
              required.
            </h2>
            <Link to="/interest" className="btn ulem-btn-primary btn-lg mt-5">
              Interest in Job Training
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

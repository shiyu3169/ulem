import React, { Component } from "react";
import Axios from "axios";
import $ from "jquery";
// Components
import Card from "../layout/Card";
import Youtube from "../layout/Youtube";
import TopSlides from "./TopSlides";
import EventSlides from "./EventSlides";
import Instagram from "./Instagram";
import Twitter from "./Twitter";
import ImageModal from "../layout/ImageModal";
// Image
import covid1 from "../../img/modal-4-9-2020.png";

export default class Home extends Component {
  state = {
    events: [],
  };

  componentDidMount() {
    this.getTopEvents();
    $("#home").modal("show");
  }

  getTopEvents = async () => {
    const res = await Axios.get("/api/events/top");
    this.setState({
      events: res.data,
    });
  };

  render() {
    const { events } = this.state;
    return (
      <>
        <TopSlides />
        <div className="container">
          <div className="row">
            <div className="col-md-7 mb-2">
              <EventSlides events={events} />
            </div>
            <div className="col-1 d-md-none" />
            <div className="col-md-5 col-10">
              <a
                href="https://twitter.com/theULEM"
                className="link"
                rel="noopener noreferrer"
                target="_blank"
              >
                <h3 className="btn-outline-danger rounded p-2 nav-link-white">
                  Recent Tweets
                  <i className="fab fa-twitter float-right" />
                </h3>
              </a>
              <Twitter />
            </div>
          </div>
        </div>
        <br />
        <div className="fixed-bg">
          <br />
          <div className="container">
            <div className="card-deck">
              <Card
                title="Train for Employment"
                text="Need job skills? Interested in learning a new skill? Let us help you!"
                link="/program"
                icon="fas fa-graduation-cap fa-2x "
              />
              <Card
                title="Sponsors"
                text="They can never be thanked enough!"
                link="/sponsor"
                icon="fas fa-money-bill fa-2x"
              />
              <Card
                title="Our Impact"
                text="ULEM strives to empower communities and change lives every day."
                link="/impact"
                icon="fas fa-thumbs-up fa-2x"
              />
            </div>
            <div className="card-deck">
              <Card
                title="Our Auxiliaries"
                text="Interested in directly making an impact at the Urban League?"
                link="/auxiliaries"
                icon="fas fa-building fa-2x"
              />
              <Card
                title="Interest in Job Training"
                text="Interested in joining the Urban League of Eastern Massachusetts?"
                link="/interest"
                icon="fas fa-users fa-2x"
              />
              <Card
                title="Contact Us"
                text="Socialize and stay updated on what we are doing through social media!"
                link="/contact"
                icon="fas fa-envelope fa-2x"
              />
            </div>
          </div>
          <br />
        </div>
        <br />
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <Instagram />
            </div>
            <div className="col-md-6">
              <a
                href="https://www.youtube.com/user/theULEMRoxbury"
                target="_blank"
                className="link"
                rel="noopener noreferrer"
              >
                <h3 className="btn-outline-danger rounded p-2 cursor">
                  ULEM Youtube
                  <i className="fab fa-youtube fa-lg float-right" />
                </h3>
              </a>

              <Youtube />
            </div>
          </div>
        </div>
        <ImageModal id="home" img={covid1} />
      </>
    );
  }
}

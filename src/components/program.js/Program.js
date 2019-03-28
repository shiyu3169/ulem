import React, { Component } from "react";
import Programs from "./Programs";
import Services from "./Services";
import Certification from "./Certification";
import BgVideo from "./BgVideo";

export default class Program extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <aside className="col-md-2">
            <div className="sticky-side">
              <h4>Programs & Services</h4>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  <a href="#program" className="nav-link-red">
                    Workforce Development Training Programs
                  </a>
                </li>
                <li className="list-group-item">
                  <a href="#service" className="nav-link-red">
                    Support Services
                  </a>
                </li>
                <li className="list-group-item">
                  <a href="#certification" className="nav-link-red">
                    Certifications
                  </a>
                </li>
              </ul>
            </div>
          </aside>
          <main className="col-md-10">
            <section>
              <BgVideo />
            </section>
            <Programs />
            <div className="fixed-job my-5" />
            <Services />
            <div className="fixed-training my-5" />
            <Certification />
          </main>
        </div>
      </div>
    );
  }
}

import React, { Component } from "react";
import Programs from "./Programs";
import Services from "./Services";
import Certification from "./Certification";

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
              <p>
                All of ULEM’s workforce development programs are at no cost to
                participants. Brief descriptions are below, but for details, we
                encourage you to attend an information session. Information
                sessions are held every Tuesday and Wednesday at 1pm. No RSVP is
                required.
              </p>
            </section>
            <Programs />
            <Services />
            <Certification />
          </main>
        </div>
      </div>
    );
  }
}

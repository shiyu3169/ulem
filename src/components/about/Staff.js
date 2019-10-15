import React, { Component } from "react";
import banner from "../../img/staff-banner.png";
export default class Staff extends Component {
  render() {
    return (
      <div>
        <img src={banner} alt="banner" className="full-width" />
        <div className="container">
          <h1 className="ulem-text-primary my-4">Our Staff</h1>
          <section className="mb-4">
            <h5 className="ulem-text-primary">
              <strong>Executive Office</strong>
            </h5>
            <table id="table-1">
              <tbody>
                <tr>
                  <td>Dr. J. Keith Motley,</td>
                  <td>Consultant</td>
                </tr>
                <tr>
                  <td>Jacquie George</td>
                  <td>Vice President of Finance</td>
                </tr>
                <tr>
                  <td>Rick Iacobucci</td>
                  <td>Vice President of Development</td>
                </tr>
                <tr>
                  <td>Natalie Haywood</td>
                  <td>Executive Assistant</td>
                </tr>
              </tbody>
            </table>
          </section>
          <section className="mb-4">
            <h5 className="ulem-text-primary">
              <strong>Workforce Development Department</strong>
            </h5>
            <table>
              <tbody>
                <tr>
                  <td>William Watkins</td>
                  <td>Director of Workforce Development</td>
                </tr>
                <tr>
                  <td>Debra Ames</td>
                  <td>Front Desk Receptionist</td>
                </tr>
                <tr>
                  <td>Betzaida Guzman</td>
                  <td>Workforce Development Coordinator/Data Specialist</td>
                </tr>
                <tr>
                  <td>Sydney Janey</td>
                  <td>Workforce Development Instructor - DigiUL</td>
                </tr>
                <tr>
                  <td>Robert LaCourt</td>
                  <td>Workforce Development, Outreach Worker</td>
                </tr>
                <tr>
                  <td>Alvin Peters</td>
                  <td>Social Media Specialist</td>
                </tr>
                <tr>
                  <td>Othneil Uter</td>
                  <td>IT Manager</td>
                </tr>
                <tr>
                  <td>Shiyu Wang</td>
                  <td>Workforce Development Instructor - MSIMBO</td>
                </tr>
              </tbody>
            </table>
          </section>
          <section className="staff-width mb-4">
            <h5 className="ulem-text-primary">
              <strong>
                Office of Violence Against Woman Domestic/Sexual Violence
                Program
              </strong>
            </h5>
            <table id="table-3">
              <tbody>
                <tr>
                  <td>Traci Jackson Antoine</td>
                  <td>
                    Executive Director, OVW Domestic/Sexual Violence Program
                  </td>
                </tr>
                <tr>
                  <td>Tonya Kibbe</td>
                  <td>
                    Assistant Coordinator, OVW Domestic/Sexual Violence Program
                  </td>
                </tr>
              </tbody>
            </table>
          </section>
        </div>
      </div>
    );
  }
}

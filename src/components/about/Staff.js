import React, { Component } from "react";

export default class Staff extends Component {
  render() {
    return (
      <div className="container">
        <h1 className="ulem-text-primary my-4">Our Staff</h1>
        <section className="mb-5">
          <h5 className="ulem-text-primary">Executive Office</h5>
          <table id="table-1">
            <tbody>
              <tr>
                <td>Darnell L. Williams</td>
                <td>President and Chief Executive Officer</td>
              </tr>
              <tr>
                <td>Jacquie George</td>
                <td>VP of Finance</td>
              </tr>
              <tr>
                <td>Rick Iacobucci</td>
                <td>Director of Development</td>
              </tr>
              <tr>
                <td>Denise Turner</td>
                <td>Development Associate</td>
              </tr>
            </tbody>
          </table>
        </section>
        <section className="mb-5">
          <h5 className="ulem-text-primary">
            Workforce Development Department
          </h5>
          <table>
            <tbody>
              <tr>
                <td>William Watkins</td>
                <td>Director of Worforce Development</td>
              </tr>
              <tr>
                <td>Debra Ames</td>
                <td>Front Desk Receptionist</td>
              </tr>
              <tr>
                <td>JacQuie Cairo-Williams</td>
                <td>Program Coordinator, Mature Workers Skills Program</td>
              </tr>
              <tr>
                <td>Bezaida Guzman</td>
                <td>Workforce Development Coordinator/Data</td>
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
                <td>Lynette Reid</td>
                <td>Case Manager, Mature Worker Skills Program</td>
              </tr>
              <tr>
                <td>Othneil Utter</td>
                <td>IT Manager</td>
              </tr>
              <tr>
                <td>Shiyu Wang</td>
                <td>Workforce Development Instructor - MSIMBO</td>
              </tr>
              <tr>
                <td>Granger Williams</td>
                <td>Case Manager, Workforce Development</td>
              </tr>
            </tbody>
          </table>
        </section>
        <section className="staff-width mb-5">
          <h5 className="ulem-text-primary">
            Office of Violence Against Woman Domestic/Sexual Violence Program
          </h5>
          <table id="table-3">
            <tbody>
              <tr>
                <td>Traci, Jackson Antoine</td>
                <td>Director, OVW Domestic/Sexual Violence Program</td>
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
    );
  }
}

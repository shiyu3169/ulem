import React, { Component } from "react";
import centennial from "../../img/logo.PNG";
import { Link } from "react-router-dom";
import centennialForm from "../../download/Centennial_SponsorshipOpportunities+ReplyForm-toFill.pdf";
export default class CentennialIntro extends Component {
  render() {
    return (
      <div className="container">
        <img
          src={centennial}
          alt="centennial"
          className="img-fluid cursor center"
        />
        <h1 className="ulem-text-primary my-5">100 YEARS IN THE MAKING</h1>
        <section className="mb-5">
          <h3>
            THE URBAN LEAGUE OF EASTERN MA IS CELEBRATING 100 YEARS OF SERVING
            METROPOLITIAN BOSTON
          </h3>
          <p>
            One hundred years ago, local business and civic leaders of diverse
            backgrounds and ethnicity created what was known as the Boston Urban
            League. In 1919, the League brought together individuals that were
            doing similar work to share in one large appeal to help individuals
            move from dependency to self-sufficiency. While our role in the
            community has not changed throughout the years, we continue to bring
            together the resources to thousands of individuals and families
            seeking to live out the American Dream of life, liberty and the
            pursuit of happiness. This historic centennial offers an
            unparalleled opportunity to commemorate a milestone of the civil
            rights movement and to explore its relevance to the issues of
            diversity and inclusion today.
          </p>
          <p>For more information download the sponsorship packet below:</p>
          <a className="btn ulem-btn-primary" href={centennialForm} download>
            Download
          </a>
        </section>
        <section className="mb-5">
          <h3>OUR HISTORY</h3>
          <p>
            A lot has happened at Urban League of Eastern MA and in our
            community over the past 100 years.{" "}
            <Link to="/centennial">Click here</Link> to see a timeline of what
            we’ve accomplished together.
          </p>
        </section>
        <section class="mb-5">
          <h3>CELEBRATE WITH US</h3>
          <p>
            We have a lot of reasons to celebrate this year!{" "}
            <Link to="/events">Click here</Link> to see our all our events.
          </p>
        </section>
        <section class="mb-5">
          <h3 className="text-center ulem-text-primary">
            100th Centennial Honorary Committee
          </h3>
          <div className="my-4">
            <h5 className="text-center">
              ULEM 100th Honorary Committee Co-Chairs{" "}
            </h5>
            <ul>
              <li>
                Co-Chair: Honorable Marc H. Morial, President and CEO, National
                Urban League
              </li>
              <li>
                Co-Chair: Honorable Charlie D. Baker, Governor, Commonwealth of
                Massachusetts
              </li>
              <li>
                Co-Chair: Honorable Martin J. Walsh, Mayor, City of Boston
              </li>
            </ul>
          </div>
          <div className="mb-4">
            <h5 className="text-center">
              ULEM 100th Honorary Committee Members (as of this writing)
            </h5>
            <ul>
              <li>Honorable Robert DeLeo, Massachusetts House Speaker</li>
              <li>Honorable Maura T. Healey, Massachusetts Attorney General</li>
              <li>Honorable Elizabeth Warren, Massachusetts U.S. Senator</li>
              <li>
                Honorable Katherine Clark, Massachusetts, U.S. Congresswoman
              </li>
              <li>Honorable Joseph Kennedy, Massachusetts, US Congressman</li>
              <li>Honorable Nick Collins, Massachusetts State Senator</li>
              <li>
                Honorable, Carolos Gonzalez, Massachusetts State Representative
                & Chairman of the Black & Latino Caucus
              </li>
              <li>
                Honorable Russell Holmes, Massachusetts State Representative
              </li>
              <li>Honorable Liz Miranda, Massachusetts State Representative</li>
              <li>
                Honorable Chynah Tyler, Massachusetts State Representative
              </li>
              <li>
                Honorable Bud L. Williams, Massachusetts State Representative
              </li>
              <li>
                Honorable Andrea Campbell, President, Boston City Councilor
              </li>
              <li>Honorable Kim Janey, Boston City Councilor</li>
              <li>Honorable Michelle Wu, At-Large, Boston City Councilor</li>
              <li>Bishop William E. Dickerson, II, Greater Love Tabernacle</li>
              <li>
                Daniel Joyce, Chief Executive Officer, Moors & Cabot, Inc.
              </li>
              <li>Barry M. Maloney, President, Worcester State University</li>
              <li>Jim Rooney, President, Greater Boston Chamber of Commerce</li>
              <li>Kenneth Green, Chief of Police, MBTA</li>
              <li>
                Honorable Steve Grossman, former Massachusetts State Treasurer
              </li>
              <li>William G. Gross, Commissioner, Boston Police Department</li>
            </ul>
          </div>
          <div className="mb-4">
            <h5 className="text-center">
              ULEM 100th Centennial Former President’s and Chief Executive
              Officers
            </h5>
            <ul>
              <li>Dr. Joan Wallace Benjamin</li>
              <li>Barbara E. Edelin</li>
              <li>Honorable, Shirley Owen-Hicks</li>
              <li>Honorable, Mel King</li>
              <li>Emory Jackson</li>
            </ul>
          </div>
          <div className="mb-4">
            <h5 className="text-center">
              ULEM 100th Centennial Board of Directors{" "}
            </h5>
            <p>
              Joseph D. Feaster, Jr., Esq. Chairman, Counselor at Law, McKenzie
              & Associates, P.C. Brenda Cole, Immediate Past Vice-Chair, Vice
              President, Harvard Pilgrim Health Care Mark Walker, Vice Chair,
              Sr. Vice President, Credit Product Manager, Citizens Bank Derek
              Brooks, Secretary, Lead, GRB, Market Development, Comcast
            </p>
            <table>
              <tbody>
                <tr>
                  <td>Donnie Bedney</td>
                  <td>Regional Director, Press Ganey</td>
                </tr>
                <tr>
                  <td>Gary Carroway</td>
                  <td>Senior Executive, UPS</td>
                </tr>
                <tr>
                  <td>Petrina Martin Cherry</td>
                  <td>Vice President, BMC Healthnet Plan/Well Sense Health</td>
                </tr>
                <tr>
                  <td>Steve Duncan</td>
                  <td>Senior Vice President, State Street Corporation</td>
                </tr>
                <tr>
                  <td>Dorthea Jones </td>
                  <td>National Urban League Guild Board Member</td>
                </tr>
                <tr>
                  <td>Johnny Green</td>
                  <td>News Director, CBS-TV4</td>
                </tr>
                <tr>
                  <td>Andrea Kershaw</td>
                  <td>Regional Vice President, Enterprise Holdings</td>
                </tr>
                <tr>
                  <td>Deloris Pettis</td>
                  <table>Risk & Audit Consultant</table>
                </tr>
                <tr>
                  <td>Marian Green-Robinson</td>
                  <td>Branch Manager, Branch Officer, Eastern Bank</td>
                </tr>
                <tr>
                  <td>Malik A. Smith</td>
                  <td>Wealth Advisor, Alex Brown</td>
                </tr>
                <tr>
                  <td>Nadine Spriggs</td>
                  <td>
                    President, Urban League of Eastern Massachusetts, Guild
                  </td>
                </tr>
                <tr>
                  <td>Rachelle Villarson</td>
                  <td>Director, Suffolk County Sheriff’s Department</td>
                </tr>
                <tr>
                  <td>Charles Stewart</td>
                  <td>President & Owner, M & S Communications Group</td>
                </tr>
                <tr>
                  <td>Liz Walker</td>
                  <td>President, Urban League of Eastern Massachusetts, YPN</td>
                </tr>
                <tr>
                  <td>Marques A. Williams</td>
                  <td>Senior Manager Business Development, Aramark</td>
                </tr>
                <tr>
                  <td>Ericka Wilson-Kerr</td>
                  <td>Regional Sales Director, CVS</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="mb-4">
            <h5 className="text-center">
              ULEM 100th Centennial Board Chairs Emeritus
            </h5>
            <ul>
              <li>
                Joyce London Ford, ret. Chief U.S. Magistrate Judge-District of
                Massachusetts
              </li>
              <li>
                Samuel J. Gerson, former President, Filenes Basement, (deceased)
              </li>
              <li>Quincy Miller, President and Vice Chairman, Eastern Bank</li>
              <li>Jeff Musman, Esq., Managing Partner, Seyfarth Shaw</li>
              <li>
                George A. Russell, Jr., ret. Senior Vice President, State Street
                Corporation
              </li>
              <li>Richard Taylor, Chairman, Taylor Smith Group</li>
            </ul>
          </div>
          <div className="mb-4">
            <h5 className="text-center">
              ULEM 100th Centennial Advisory Committee Members
            </h5>
            <ul>
              <li>Gary Carroway, Chair, Centennial Committee</li>
              <li>Scott Baker, President, SkyCom Couriers</li>
              <li>
                David Casey, Vice president, workforce Strategies and Chief
                Diversity Officer, CVS
              </li>
              <li>
                Dawn-Frazier-Bohnert, Senior Vice President and Chief Diversity
                Officer, Liberty Mutual
              </li>
              <li>Sam Kennedy, President/CEO, Boston Red Sox</li>
              <li>
                Vincent G. Lorporchio, Senior Vice President Corporate
                Communications, Fidelity Investments
              </li>
              <li>Mary Jo Meisner, Senior Executive and Community Leader</li>
              <li>
                Dr. Larry Dunham, Director, Diversity & Multicultural Affairs,
                Boston University
              </li>
              <li>
                David Gibbons, Executive Director, Massachusetts Convention
                Center Authority
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-center">
              ULEM 100th Centennial Planning Staff
            </h4>
            <table>
              <tbody>
                <tr>
                  <td>Darnell L. Williams</td>
                  <td>President and Chief Executive Officer</td>
                </tr>
                <tr>
                  <td>Traci Jackson Antoine</td>
                  <td>
                    Executive Director, OVW Domestic/Sexual Violence Program
                  </td>
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
                  <td>Workforce Development Instructor</td>
                </tr>
                <tr>
                  <td>Tonya Kibbe </td>
                  <td>
                    Assistant Coordinator, OVW Domestic/Sexual Violence Program
                  </td>
                </tr>
                <tr>
                  <td>Robert LaCourt</td>
                  <td>Workforce Development, Outreach Worker</td>
                </tr>
                <tr>
                  <td>Alvin Peters</td>
                  <td>Social Media</td>
                </tr>
                <tr>
                  <td>Lynette Reid</td>
                  <td>Case Manager, Mature Worker Skills Program</td>
                </tr>
                <tr>
                  <td>Granger Williams</td>
                  <td>Case Manager, Workforce Development</td>
                </tr>
                <tr>
                  <td>JacQuie Cairo-Williams</td>
                  <td>Program Coordinator, Mature Workers Skills Program</td>
                </tr>
                <tr>
                  <td>Othneil Uter</td>
                  <td>IT Manager</td>
                </tr>
                <tr>
                  <td>Shiyu Wang</td>
                  <td>Workforce Development Program Coordinator/Instructor</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </div>
    );
  }
}

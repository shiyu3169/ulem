import React, { Component } from "react";
import about from "../../img/about.png";

export default class About extends Component {
  render() {
    return (
      <div>
        <img src={about} alt="about" className="full-width" />
        <section className="container">
          <h1 className="ulem-text-primary mt-4">Missions & Overview</h1>
          <p>
            The Urban League of Eastern Massachusetts (ULEM) is a 501c3
            nonprofit organization and one of the oldest affiliates within the
            National Urban League movement. Since 1919, the doors opened to the
            at-large Boston community and surrounding metropolitan area
            residents, ULEM has been employing a multi-point strategy to deliver
            services and programs which aim to increase self-reliance,
            specifically in the area of workforce and economic development.
          </p>
          <p>
            The mission of the Urban League of Eastern Massachusetts is to
            enable adults in Eastern MA to overcome racial, social barriers,
            economic inequities, sexual and domestic violence to employment and
            economic development opportunities. For 100 years, ULEM’s programs
            and services have given hope to participants and made a lasting,
            impactful statement in the community.
          </p>
          <p>
            Focusing on this overarching goal leads us to provide opportunities
            for every person that walks through our door to realize economic
            empowerment through necessary- and mid-level skills training,
            certifications, internships, and job placements.
          </p>
          <p>
            Offering programs and services at no cost to every participant, we
            facilitate an array of skills-training classes and workshops which
            cover a variety of job skills and expertise; servicing the
            unemployed and underemployed, and pull together resource from both
            the non-profit and corporate partners. All program participants
            receive case management services, inclusive of domestic/sexual
            violence victim awareness, and employment placement assistance. ULEM
            also operates an Employment Resource Center, which is available to
            anyone who needs computer access to attain employment.
          </p>
          <p>
            The programs and services offered are supported by two annual
            projects: (1) Jobs Rebuild Boston Community Conference and Career
            Fair and (2) the Diversity & Inclusion Breakfast. Additional to the
            programs mentioned above, the League offers two auxiliary groups:
            the Urban League of Eastern MA Guild and the Young Professionals
            Network of the Urban League of Eastern MA, both groups have open
            membership, facilitate events and workshops and serve the community
            in alignment with ULEM’s mission and strategic goals.
          </p>
          <p>
            Holistically, through the three channels, the ULEM – along with its
            auxiliaries: the ULEM Guild and YPN-ULEM – serves thousands of
            people annually.
          </p>
        </section>
      </div>
    );
  }
}

import React, { Component } from "react";
import jobcase from "../../img/jobcase.png";

export default class Services extends Component {
  render() {
    return (
      <section id="service">
        <h1 className="font-red mt-4 mb-4">Support Services</h1>
        <h4>Employment Resource Center</h4>
        <p>
          The Employment Resource Center (ERC) is open Monday through Friday
          between 10am and 4:30pm. This computer lab is available for employment
          purposes only. Within the ERC, additional support is available to not
          just enrolled program participants, but anyone who visits ULEM for
          support. Everyone who utilizes the ERC must complete an intake form.
          The ERC provides:{" "}
        </p>
        <ul className="list-no-style">
          <li>
            <i className="fas fa-headset mr-2 font-red" />
            Assistance with basic online job searching
          </li>
          <li>
            <i className="fas fa-headset mr-2 font-red" />
            Support for additional cover letter and resume changes
          </li>
          <li>
            <i className="fas fa-headset mr-2 font-red" />
            Information on any newly listed positions by posting them on the job
            board
          </li>
        </ul>
        <p>In general, the ERC serves 600+ people annually.</p>
        <hr />
        <h4>Online Local Jobs Portal</h4>
        <p>ULEM provides a resource for:</p>
        <ul>
          <li>
            <strong>- job seekers</strong> to find local jobs, to apply online,
            & get answers to work questions
          </li>
          <li>
            <strong>- residents</strong> to share help, support, and tips as a
            community
          </li>
          <li>
            <strong>- employers</strong> to connect with local prospective
            applicants and to build awareness of their jobs
          </li>
        </ul>
        <p>
          Follow this link to search jobs or browse the community, to ask a
          question, and more:
        </p>
        <p>
          <a target="_blank" href="www.jobcase.com/ulem">
            www.jobcase.com/ulem
          </a>
        </p>
        <p>
          This portal is provided by a generous donation from Jobcase{" "}
          <img src={jobcase} height="40px" alt="jobcse" />
        </p>
        <hr />
        <h4>Job Placement</h4>
        <p>
          Job Placement assistance is available to all participants enrolled in
          our workforce development programs. Depending on the program,
          participants meet with the Job Placement Specialist weekly or as
          needed. Participants receive job descriptions and contact information
          for available positions that best suit their skill set and educational
          background. They are also prepared for job interview(s) through
          one-on-one meetings, in addition to their classroom training in job
          readiness. Participants are offered ongoing support up to 12 months.
        </p>
        <hr />
        <h4>Case Management</h4>
        <p>
          Case Management Services are available to all participants enrolled in
          our WFD programs. Case Management is the most significant asset and
          strongest component of ULEM’s programs, according to feedback received
          from partners and employers. We believe this is because our staff is
          reflective of the constituents that we serve and are able to provide
          resources to overcome obstacles to employment. ULEM’s case manager
          also does follow-up and tracking of the participants’ placements once
          they have completed a program. Our efforts help participants develop
          concrete support and employment plans extending far beyond the time
          they spend training with us. With our referrals and support,
          participants are able to take clearly defined steps toward moving out
          of poverty through employment. We provide post-job placement support
          for up to 24 months.
        </p>
        <hr />
        <h4>Domestic/Sexual Violence Support</h4>
        <p>
          Domestic/Sexual Abuse and Violence support is available to anyone
          seeking support. This culturally sensitive service is offered in
          direct response to the need for information, resources, and support
          regarding domestic and sexual violence in the heart of the African
          American/people of color community. Led by Reverend Traci Jackson
          Antoine, this service is in collaboration with the following service
          providers: Casa Myrna, Center for Hope and Healing, and Safe Havens
          Interfaith Partnership. The collaboration also includes 2 Boston
          Police Officers and consultants.{" "}
        </p>
        <p>
          In serving victims, perpetrators, and anyone else who enters the ULEM
          doors, ULEM addresses the issue of violence prevention in our
          communities in significant ways. Of note:
        </p>
        <ul className="list-no-style">
          <li>
            <i className="fas fa-info-circle  mr-2 font-red" />
            Getting a job boosts self-esteem, while also elevating someone's
            financial status. Poverty and a lack of income are major
            contributors towards violence.
          </li>
          <li>
            <i className="fas fa-info-circle mr-2 font-red" />
            Those who seek to remove themselves from violent
            environments/situations by way of getting a job are getting the
            necessary pre-employment skills and certifications at ULEM.
            Obtaining those skills help people to gain independence, while
            assisting in breaking the cycle of violence.
          </li>
          <li>
            <i className="fas fa-info-circle  mr-2 font-red" />
            ULEM will soon become a vital access point for information, support,
            and referrals.​
          </li>
          <li>
            <i className="fas fa-info-circle  mr-2 font-red" />
            Victims will see ULEM, a trusted, culturally specific institution
            take a leadership role in speaking out against violence.
          </li>
          <li>
            <i className="fas fa-info-circle  mr-2 font-red" />
            Victims will know more about violence and prevention, will recognize
            red flags and warning signs, and will seek help earlier.
          </li>
          <li>
            <i className="fas fa-info-circle  mr-2 font-red" />
            Victims will experience a more coherent and coordinated community
            response to violence as stronger relationships among ULEM and our
            partners
          </li>
        </ul>
        <p>
          <strong>THIS SERVICE IS COMPLETELY CONFIDENTIAL.</strong>
        </p>
      </section>
    );
  }
}

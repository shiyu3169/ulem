import React from "react";
import NoHandShake from "../../download/NoHandShake.pdf";

const Responce = () => {
  return (
    <div>
      <h1 className="section-title" name="response">
        RESPONSE
      </h1>
      <p>Dear Urban League Family, Client-Guests, and Friends:</p>
      <p>
        Due to the spread of the coronavirus (COVID-19) and as health concerns
        continue to grow, we want to reassure you that your Urban League is
        taking every precaution to promote a safe and healthy environment for
        our staff, volunteers, and client-guests. Our team has implemented an
        agency-wide response while adhering to recommendations by local health
        agencies and government officials.
      </p>
      <p>
        We are committed to being your provider of choice by ensuring the safety
        and well-being of everyone we serve.
      </p>
      <h2>Our Response:</h2>
      <p>
        In alignment with the Center for Disease Control and Prevention's (CDC)
        levels of risk-assessment for faith-based and community organizations,
        we will activate the following three-tier response:
      </p>
      <h2 style={{ color: "red" }}>
        Level 1- Preparedness (Sporadic Transmission Level)
      </h2>
      <h2>ULEM Response: Monitoring and Education</h2>
      <ul>
        <li>
          Continue to inform staff and the general public regarding the level of
          threat to our local community along with preventative resources.
        </li>
        <li>
          Engage in workplace illness prevention for our employees and ancillary
          workforce by encouraging common-sense health precautions recommended
          by CDC.
        </li>
        <li>
          In addition to our daily standard custodial services, we increased the
          frequency of cleaning throughout the day with an attentive focus on
          high-traffic areas.
        </li>
      </ul>
      <h2 style={{ color: "red" }}>
        Level 2 - Minimal/Moderate (Cluster Transmission Level)
      </h2>
      <h2>ULEM Response: Social Distancing</h2>
      <ul>
        <li>
          Implement a "social distancing" policy that will stop or slow the
          spread of highly contagious diseases such as the coronavirus. Our
          social distancing response may include reduced exposure to internal
          and external high-traffic events, strict domestic and international
          travel requirements for Urban League staff, limited attendance at
          community gatherings, and elimination of handshaking.{" "}
          <a href={NoHandShake} download>
            View handshake policy flyer here.
          </a>
        </li>
        <li>
          Prepare our team and community for the potential transition to a
          virtual service delivery model (Level 3), which may include limiting
          and/or canceling face-to-face meetings, events and traditional case
          management services.
        </li>
        <li>
          The Urban League will continue to operate and our main office will
          remain open until further notice.
        </li>
      </ul>
      <h2 style={{ color: "red" }}>
        Level 3 - Substantial (Population Transmission Level)
      </h2>
      <h2>ULEM Response: Virtual Service Delivery</h2>
      <ul>
        <li>
          The Urban League's offices will close to the public and in accordance
          with our emergency preparedness plan. Program and service delivery
          will be conducted through a virtual model.
        </li>
      </ul>
      <h2>
        For the latest updates on our response to the coronavirus, visit
        www.ulem.org/covid19.
      </h2>
      <h2 style={{ color: "red" }}>Tips and Resources</h2>
      <p>
        Please refer to the{" "}
        <a href="https://www.cdc.gov/coronavirus/2019-ncov/index.html">
          Centers for Disease Control and Prevention{" "}
        </a>
        ,{" "}
        <a href="https://www.mass.gov/orgs/department-of-public-health">
          Massachusetts Department of Public Health{" "}
        </a>{" "}
        and the{" "}
        <a href="https://www.boston.gov/departments/public-health-commission">
          City of Boston Department of Public Health
        </a>{" "}
        for continuous updates.
      </p>
    </div>
  );
};

export default Responce;

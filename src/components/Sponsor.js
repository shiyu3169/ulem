import React, { Component } from "react";
import sponsorPng from "../img/sponsor.png";
import sponsorPng2 from "../img/sponsor2.png";
import sponsorPng3 from "../img/sponsor3.png";
import donor from "../img/major-donors.png";
import gala from "../img/gala.png";
import career from "../img/career.png";
export default class Sponsor extends Component {
  render() {
    return (
      <div className="container">
        <h1 className="font-red mt-4">Sponsors</h1>
        <p>
          Sponsors – whether in-kind or financial – help ULEM to remain an
          essential part of greater Boston’s community fabric. It is with the
          support of all of our sponsors, that ULEM is able to operate daily.
          ULEM is fortunate to have sponsors that support our programs, annual
          signature fundraising events, and auxiliary organizations. If
          interested in sponsoring a ULEM program or event, please send an email
          to development@ulem.org.
        </p>
        <h4>2018 Equal Opportunity & Diversity Breakfast</h4>
        <img src={sponsorPng} className="center img-fluid" alt="sponsor1" />
        <img src={sponsorPng2} className="center img-fluid" alt="sponsor2" />
        <img src={sponsorPng3} className="center img-fluid" alt="sponsor3" />
        <h4>Major Donors 2016-2017</h4>
        <img src={donor} className="center img-fluid" alt="donor1" />
        <h4>Gala Donors 2017</h4>
        <img src={gala} className="center img-fluid" alt="donor2" />
        <div className="text-center mt-4 mb-4">
          <h4>SUPPORTERS</h4>
          <ul className="list-no-style list-group">
            <li>Entercom New England</li>
            <li>Cruz Construction</li>
            <li>Loporchio Family</li>
            <li>Rockland Trust</li>
            <li>Boston Red Sox Foundation</li>
            <li>Federal Home Loan Bank</li>
            <li>Skycom/RTD Logistics</li>
            <li>Ahold/Stop & Shop</li>
          </ul>
          <h4>DONORS</h4>
          <ul className="list-no-style list-group">
            <li>Bender Family</li>
            <li>Boston University</li>
            <li>Boston Media Center - BMC</li>
            <li>Mass Housing</li>
            <li>Turner Construction</li>
            <li>United Steelworkers</li>
            <li>Harry Miller Company</li>
            <li>Boston Housing Authority</li>
            <li>Boston Private Comm. Investment</li>
            <li>Mass League Comm. Health</li>
            <li>Owens Companies</li>
            <li>ULEM Guild</li>
            <li>WBZTV/CBS</li>
          </ul>
        </div>
        <h4>2016 Career Fair Major Sponsors</h4>
        <img src={career} className="center img-fluid" alt="career1" />
      </div>
    );
  }
}

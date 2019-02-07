import React, { Component } from "react";
import Donating from "../ulem2.jpg";
import Amazon from "../amazon.jpg";

export default class Donate extends Component {
  render() {
    return (
      <div className="container">
        <h1 className="font-red mt-4">Donate</h1>
        <p>
          <strong>
            ULEM operates by the grace of a combination of grants, contracts,
            and donations. Every dollar donated to the Urban League of Eastern
            Massachusetts is used to support programs, overhead, and salaries.
            In order to run this agency, ULEM must raise at least $2.5 million
            annually. That is how we provide workforce development training to
            the under- and unemployed at no cost to them.
          </strong>
        </p>
        <p>
          <strong>lease take a moment to view our impact video:​</strong>
        </p>
        <div class="embed-responsive embed-responsive-16by9">
          <iframe
            class="embed-responsive-item"
            src="https://www.youtube.com/embed/6kxMIPWEKF8"
            allowfullscreen
          />
        </div>
        <p>
          After watching it, you may be inclined to make a donation by clicking
          the image below:​
        </p>
        <a href="https://interland3.donorperfect.net/weblink/weblink.aspx?name=ulem&id=1">
          <img className="center" src={Donating} alt="donate" />
        </a>
        <p>
          <strong>
            In addition to donations of any amount, ULEM also accepts planned
            gifts and company stocks. Please note that if you give us a gift,
            your company may also offer an employee match. That’s a great way to
            double your gift! Please contact the development department at
            development@ulem.org or 617.442.4519 x235 to get more information. ​
          </strong>
        </p>
        <p>
          <strong>Thank you in advance! ​</strong>
        </p>
        <a href="https://smile.amazon.com/ch/23-7349132">
          <img className="center" src={Amazon} alt="amazon" />
        </a>
      </div>
    );
  }
}

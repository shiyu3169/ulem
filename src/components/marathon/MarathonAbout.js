import React from "react";
import charity from "../../img/charity.jpg";
import ulem from "../../img/ULEM Logo.jpg";
export default function MarathonAbout() {
  return (
    <section id="about">
      <h1 className="font-red mt-4">About Us</h1>
      <p>
        Run for The Urban League of Eastern Massachusetts Team in the 2020
        Boston Marathon(r) on Monday, April 20, 2020
      </p>
      <img src={ulem} alt="ulem" className="img-fluid" />

      <p className="mt-3">
        We are currently accepting applications for runners on a rolling basis.
        Applicants that require a bib will be asked to raise a minimum of $8,500
        for the foundation. Qualified runners that already have a bib are
        welcome to join our team and are asked to raise a minimum of $2,000.
      </p>

      <section id="sponsors">
        <a
          href="https://charityteamsruns.wufoo.com/forms/z9j4g8b0kmy29y/"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-block ulem-btn-primary btn-lg"
        >
          Fill out the application here
        </a>
        <h1 className="font-red mt-4">Sponsors</h1>
        <img
          src={charity}
          alt="charity"
          className="img-fluid  mx-auto d-block"
        />
      </section>
      <section id="application">
        <h1 className="font-red mt-4">Become a Runner</h1>
        <p>Some of the advantages of being a part of the team include:</p>
        <ul className="list-no-style">
          <li>
            <i className="fas fa-angle-right mr-2 font-red" />
            An official bib into the 2020 Boston Marathon(r)
          </li>
          <li>
            <i className="fas fa-angle-right mr-2 font-red" />A team singlet and
            running swag
          </li>
          <li>
            <i className="fas fa-angle-right mr-2 font-red" />
            Access to team meetings
          </li>
          <li>
            <i className="fas fa-angle-right mr-2 font-red" />
            Coaching and guidance from CharityTeams.com
          </li>
          <li>
            <i className="fas fa-angle-right mr-2 font-red" />A full and
            personalized 20-week training plan for every level of running by
            RRCA certified coaches
          </li>
          <li>
            <i className="fas fa-angle-right mr-2 font-red" />
            The opportunity to participate in organized weekly group runs on the
            Boston Marathon(r) course complete with aid station support
          </li>
          <li>
            <i className="fas fa-angle-right mr-2 font-red" />
            The opportunity to participate in Tuesday night hill workouts and
            speed workouts
          </li>
          <li>
            <i className="fas fa-angle-right mr-2 font-red" />
            CharityTeams weekly communications and monthly meetings with guest
            speakers
          </li>
          <li>
            <i className="fas fa-angle-right mr-2 font-red" />
            Fundraising support
          </li>
          <li>
            <i className="fas fa-angle-right mr-2 font-red" />
            An opportunity to participate in the CharityTeams Superhero 17 and
            the CharityTeams Hop21 themed runs
          </li>
          <li>
            <i className="fas fa-angle-right mr-2 font-red" />
            Access to incentive prizes for fundraising
          </li>
          <li>
            <i className="fas fa-angle-right mr-2 font-red" />
            Discounts on running gear
          </li>
          <li>
            <i className="fas fa-angle-right mr-2 font-red" />A private team bus
            to the starting line on Marathon Monday and much more!
          </li>
        </ul>
        <a
          href="https://charityteamsruns.wufoo.com/forms/z9j4g8b0kmy29y/"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-block ulem-btn-primary btn-lg"
        >
          Fill out the application here
        </a>
      </section>
    </section>
  );
}

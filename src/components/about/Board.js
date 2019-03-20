import React from "react";
import meeting from "../../img/Meeting_Boardroom-Leaderboard.png";
export default function Board() {
  return (
    <div>
      <img src={meeting} alt="meeting" className="full-width" />
      <div className="container">
        <h1 className="ulem-text-primary mt-4">
          <strong>Board of Directors</strong>
        </h1>
        <section className="my-5">
          <p>
            <strong className="ulem-text-primary">Executive Committee:</strong>
          </p>
          <p>
            <strong>Joseph D. Feaster, Jr.</strong>., Chairman; Counselor at Law
            Feaster Enterprises, c/o McKenzie & Assoc., P.C.
          </p>
          <p>
            <strong>Mark Walker</strong>, Vice Chair; Sr. VP, Credit Product
            Manager, Citizens Bank
          </p>
          <p>
            <strong>Derek Brooks</strong>, Secretary; Lead, GBR Market
            Development, Comcast
          </p>
          <p>
            <strong>Gary Calloway</strong>, Centennial Chair; Senior Executive,
            UPS
          </p>
          <p>
            <strong>Petrina Martin Cherry</strong>, Development Chair; Vice
            President, BMC Healthnet Plan/Well Sense Health Plan
          </p>
          <p>
            <strong>Rachelle Villarson</strong>, Strategic Planning Chair; Human
            Resources, Suffolk County Sherriff’s Office
          </p>
        </section>
        <section className="mb-5">
          <p>
            <strong className="ulem-text-primary">Members of the Board:</strong>
          </p>
          <p>
            <strong>Scott Baker</strong>, President, SkyCom Courier
          </p>
          <p>
            <strong>Donnie Bedney</strong>, Regional Director, Press Ganey
          </p>
          <p>
            <strong>Steve Duncan</strong>, Senior Vice President, State Street
            Corporation
          </p>
          <p>
            <strong>Marian Green-Robinson</strong>, Vice President, Eastern Bank
          </p>
          <p>
            <strong>Johnny Green</strong>, News Director, CBS-TV4
          </p>
          <p>
            <strong>Dorthea Jones</strong>, Secretary, National Council of Urban
            League Guilds
          </p>
          <p>
            <strong>Andrea Kershaw</strong>, Regional Vice President, Enterprise
            Holdings
          </p>
          <p>
            <strong>Deloris Pettis</strong>, Risk & Audit Consultant, Pettis
            Consulting
          </p>
          <p>
            <strong>Malik A. Smith</strong>, Wealth Advisor, Alex Brown
          </p>
          <p>
            <strong>Nadine Spriggs</strong>, President, Urban League Guild
          </p>
          <p>
            <strong>Charles Stewart</strong>, President & Owner, M & S
            Communications Group
          </p>
          <p>
            <strong>Liz Walker, President</strong>, Young Professionals Network
          </p>
          <p>
            <strong>Marques A. Williams</strong>, Sr. Mgr, Business Development,
            Aramark
          </p>
          <p>
            <strong>Ericka Wilson-Kerr</strong>, Regional Sales Director, CVS
          </p>
        </section>
        <section className="mb-5">
          <p>
            <strong className="ulem-text-primary">
              Board Chairs Emeritus:
            </strong>
          </p>
          <p>
            <strong>Hon. Joyce London Alexander</strong>, Chief Magistrate
            Judge, US District Court
          </p>
          <p>
            <strong>Samuel J. Gerson</strong>, Chairman and Chief executive,
            Filene’s Basement (deceased)
          </p>
          <p>
            <strong>Quincy Miller</strong>, President, Eastern Bank
          </p>
          <p>
            <strong>Jeff Musman</strong>, Esq., Managing Partner, Seyfarth Shaw
          </p>
          <p>
            <strong>George A. Russell, Jr.</strong>, Executive Vice President,
            State Street Corporation
          </p>
          <p>
            <strong>Richard Taylor</strong>, Chairman, Taylor Smith Group
          </p>
        </section>
      </div>
    </div>
  );
}

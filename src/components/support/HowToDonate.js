import React, { Component } from "react";
import { Link } from "react-router-dom";
export default class HowToDonate extends Component {
  render() {
    return (
      <div className="container my-5">
        <Link className="btn ulem-btn-primary btn-block btn-lg" to="/donate">
          <strong>DONATE NOW</strong>
        </Link>
        <hr />
        <section>
          <h3 className="text-center mb-4">WAYS TO GIVE</h3>
          <div class="box">
            <div className="row py-5 px-5">
              <div className="col-md-2 text-center">
                <i class="fab fa-internet-explorer fa-3x" />
              </div>
              <div className="col-md-10">
                <h5>
                  <strong>GIVE ONLINE</strong>
                </h5>
                <p>
                  Donors may make an online pledge or gift via credit card on
                  our Online Giving page. The best and simplest way to give.{" "}
                  <Link to="/donate">Donate Now</Link>
                </p>
              </div>
            </div>
            <div className="row pb-5 px-5">
              <div className="col-md-2 text-center">
                <i class="fas fa-gift fa-3x" />
              </div>
              <div className="col-md-10">
                <h5>
                  <strong>ANNUAL FUND</strong>
                </h5>
                <p>
                  Essential to the agency's operating budget, the annual fund
                  helps to make up the difference between cost of tranings and
                  the actual day-to-day cost of running the League and serving
                  community. We hope that our supporters will make the annual
                  fund a philanthropic priority.
                </p>
              </div>
            </div>
            <div className="row pb-5 px-5">
              <div className="col-md-2 text-center">
                <i class="fas fa-hand-holding-usd fa-3x" />
              </div>
              <div className="col-md-10">
                <h5>
                  <strong>ENDOWMENT</strong>
                </h5>
                <p>
                  An endowment can be compared to a saving account or other
                  financial assets that generate income through wise investment
                  of the princepal. Long-term growth of the endowment will help
                  satisfy future needs of the league. Income earned from the
                  endowment is usde to support the agency's operating budget.
                </p>
              </div>
            </div>
            <div className="row pb-5 px-5">
              <div className="col-md-2 text-center">
                <i class="fas fa-gifts fa-3x" />
              </div>
              <div className="col-md-10">
                <h5>
                  <strong>MATCHING GIFTS</strong>
                </h5>
                <p>
                  Many employers sponsor matching gift programs and will match
                  any charitable contributions or volunteer hours made by their
                  employees.
                </p>
              </div>
            </div>
            <div className="row pb-5 px-5">
              <div className="col-md-2 text-center">
                <i class="fas fa-calendar-check fa-3x" />
              </div>
              <div className="col-md-10">
                <h5>
                  <strong>PLANNED GIVING</strong>
                </h5>
                <p>
                  The Board of Directors honors everyone who includes ULEM as a
                  beneficiary in their will or estate plans. Deferred gifts of
                  privately held stock, charitable trust, life insurance, and
                  land are also considered planned gifts
                </p>
              </div>
            </div>

            <div className="row pb-5 px-5">
              <div className="col-md-2 text-center">
                <i class="fas fa-money-check-alt fa-3x" />
              </div>
              <div className="col-md-10">
                <h5>
                  <strong>MAIL A CHECK</strong>
                </h5>
                <p>
                  Donors can mail a check donation to the school. Checks should
                  be payable to "Urban League of Eastern MA" and mailed to Urban
                  League of Eastern MA
                </p>
                <div className="pl-4">
                  <p className="my-0">ULEM, 88 Warren St.</p>
                  <p className="my-0">Boston, MA 02119</p>
                </div>
              </div>
            </div>
            <div className="row pb-5 px-5">
              <div className="col-md-2 text-center">
                <i class="fas fa-phone fa-3x" />
              </div>
              <div className="col-md-10">
                <h5>
                  <strong>PHONE IN A GIFT</strong>
                </h5>
                <p>
                  Donors can make a credit card gift via phone by calling
                  Development at (617)442-4519.
                </p>
              </div>
            </div>
            <div className="row pb-5 px-5">
              <div className="col-md-2 text-center">
                <i class="fas fa-file-invoice-dollar fa-3x" />
              </div>
              <div className="col-md-10">
                <h5>
                  <strong>STOCK TRANSFER</strong>
                </h5>
                <p>
                  Gifts of stock are another way to support the needs of the
                  school and provide tax wise benefits. Instructions on donating
                  stock are located on our Stock Tranfer Instructions page.
                </p>
              </div>
            </div>
            <div className="row pb-5 px-5">
              <div className="col-md-2 text-center">
                <i class="fas fa-box fa-3x" />
              </div>
              <div className="col-md-10">
                <h5>
                  <strong>IN KIND GIFT</strong>
                </h5>
                <p>
                  There are sometimes opportunities to make an in-kind donation
                  for a special project or need at ULEM. Please contact
                  development at (617)442-4519 to discuss your in-kind gift
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

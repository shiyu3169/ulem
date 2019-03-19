import React, { Component } from "react";
import MembershipCard from "./MembershipCard";

export default class Membership extends Component {
  render() {
    return (
      <div className="container">
        <h2 className="pt-3 ulem-text-primary">BECOME A MEMBER TODAY!</h2>
        <p>
          The Urban League of Eastern MA received support from individuals and
          corporations in the community through our membership program. Our
          members are invited to events such as our Anual Equal Opportunity Day
          Luncheon and Black History Month Celebrations. Platinum Lifetime
          Members are listed on our website and acknowledged at ULEM events. All
          membership contributions are 100% tax-deductible.
        </p>
        <p>
          You can become a member by making a secure online payment through
          Square
        </p>
        <div className="text-center">
          <h3 className="ulem-text-primary pt-5">MEMBERSHIP LEVELS</h3>
          <p>
            <strong>
              EACH MEMBERSHIP LEVEL SUPPORTS THE BUILDING OF RESERVE FUNDS AND
              INFRASTRUCTURE OF THE URBAN LEAGUE AND ALL OF ITS PROGRAMS.
            </strong>
          </p>
        </div>
        <div className="row membership-1st-row">
          <div className="col-md-4">
            <MembershipCard
              header="Platinum"
              title="Chairman's Club"
              price="1,000"
              li1="&bull; Listing on website"
              li2="&bull; Certificate of Membership"
              li3="&bull; Annual Meeting and event program listing"
              li4="&bull; ULEM commemorative gift"
              li5="&bull; NUL lapel pin"
              li6="&bull; Event discounts"
              li7="&bull; ULEM newsletter"
              purchase="https://squareup.com/store/theulem/item/platinum"
            />
          </div>
          <div className="col-md-4">
            <MembershipCard
              header="Gold"
              title="President Club"
              price="500"
              year="/YR"
              li1="&bull; Listing on website"
              li2="&bull; Certificate of Membership"
              li3="&bull; Annual Meeting and event program listing"
              li4="&bull; ULEM commemorative gift"
              li5="&bull; NUL lapel pin"
              purchase="https://squareup.com/store/theulem/item/gold-legacy-circle-of-believers"
            />
          </div>
          <div className="col-md-4">
            <MembershipCard
              header="Silver"
              title="CHURCH & SMALL BUSINESS Membership"
              price="350"
              year="/YR"
              li1="&bull; Name ULEM as a partner in bulletins and company publications"
              li2="&bull; Event discounts"
              li3="&bull; ULEM newsletter"
              purchase="https://squareup.com/store/theulem/item/silver-church-small-business-memberships"
            />
          </div>
        </div>
        <div className="row my-5 membership-2nd-row">
          <div className="col-md-4">
            <MembershipCard
              header="Bronze"
              title="Heritage Club"
              price="100"
              year="/YR"
              li1="&bull; Certificate of Membership"
              li2="&bull; Member listing"
              li3="&bull; ULEM commemorative gift"
              li4="&bull; NUL lapel pin"
              li5="&bull; Event discounts"
              li6="&bull; ULEM newsletter"
              purchase="https://squareup.com/store/theulem/item/bronze"
            />
          </div>
          <div className="col-md-4">
            <MembershipCard
              header="Basic"
              title="Legacy"
              price="45"
              year="/YR"
              li1="&bull; Membership card"
              li2="&bull; Member listing"
              li3="&bull; UL ink pen and magnet"
              li4="&bull; ULEM newsletter"
              purchase="https://squareup.com/store/theulem/item/our-basic-membership-individual-member"
            />
          </div>
          <div className="col-md-4">
            <MembershipCard
              header="Students & Senior"
              title="STUDENTS & SENIOR MEMBER 60+"
              price="25"
              year="/YR"
              li1="&bull; Membership card"
              li2="&bull; Member listing"
              li3="&bull; ULEM newsletter"
              purchase="https://squareup.com/store/theulem/item/for-our-senior-members-senior-member"
            />
          </div>
        </div>
      </div>
    );
  }
}

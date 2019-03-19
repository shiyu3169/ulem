import React, { Component } from "react";
import MembershipCard from "./../membership/MembershipCard";
export default class CentennialMembership extends Component {
  render() {
    return (
      <div className="container text-center">
        <h2 className="ulem-text-primary mt-5">CENTENNIAL MEMBERSHIP</h2>
        <p>
          <strong>
            CENTENNIAL MEMBERSHIP LEVELS SUPPORTS THE BUILDING OF RESERVE FUNDS
            AND INFRASTRUCTURE OF THE URBAN LEAGUE AND ALL OF ITS PROGRAMAS AND
            ALSO INCLUDE TICKETS OUR 100TH ANNIVERSARY BENEFIT CONCERT FEATURING
            JEFFERY OSBORNE
          </strong>
        </p>
        <div className="row centennial-membership-1st-row">
          <div className="col-md-4">
            <MembershipCard
              title="ULEM LEGACY VIP CENTENNIAL MEMBER"
              price="1,919"
              year="/YR"
              purchase="https://squareup.com/store/theulem/item/legacy-vip-centennial-member"
              li1="&bull; Centennial Membership for 2019-2020"
              li2="&bull; (2) VIP Reception Tickets"
              li3="&bull; (2) Premier Level Tickets"
              li4="&bull; Name recognition as VIP Legacy Centennial Member"
            />
          </div>
          <div className="col-md-4">
            <MembershipCard
              title="LIFETIME CENTENNIAL MEMBER"
              price="1,000"
              year="/YR"
              purchase="https://squareup.com/store/theulem/item/lifetime-centennial-member"
              li1="&bull; Centennial Membership for 2019-2020"
              li2="&bull; (4) Premier Level Tickets"
              li3="&bull; Name recognition as Lifetime Centennial Member"
              li4={
                <strong>
                  Current ULEM Platinum Lifetime Members will receive two (2)
                  VIP Reception tickets upon renewal of membership
                </strong>
              }
            />
          </div>
          <div className="col-md-4">
            <MembershipCard
              title="SUPPORTING CENTENNIAL MEMBER"
              price="500"
              year="/YR"
              purchase="https://squareup.com/store/theulem/item/supporting-centennial-member"
              li1="&bull; Centennial Membership for 2019-2020"
              li2="&bull; (2) Premier Level Tickets"
              li3="&bull; Name recognition as Supporting Centennial Member"
              li4={
                <strong>
                  Upgrade membership to VIP for $150 and receive one (1) ticket
                  to VIP reception.
                </strong>
              }
            />
          </div>
        </div>
        <div className="row my-5 centennial-membership-2nd-row">
          <div className="col-md-4">
            <MembershipCard
              title="ULEM 'FRIEND' CENTENNIAL MEMBER"
              price="250"
              year="/YR"
              purchase="https://squareup.com/store/theulem/item/friend-centennial-member"
              li1="&bull; Centennial Membership for 2019-2020"
              li2="&bull; (2) Prime Level Tickets"
              li3="&bull; Name recognition as 'Friend' Centennial Member"
            />
          </div>
          <div className="col-md-4">
            <MembershipCard
              title="CENTENNIAL COMMUNITY MEMBER"
              price="125"
              year="/YR"
              purchase="https://squareup.com/store/theulem/item/centennial-community-member"
              li1="&bull; Centennial Membership for 2019-2020"
              li2="&bull; (1) Prime Level Tickets"
              li3="&bull; Name recognition as Centennial Community Member"
            />
          </div>
          <div className="col-md-4">
            <MembershipCard
              title="CENTENNIAL PATRON"
              price="75"
              year="/YR"
              purshase="https://squareup.com/store/theulem/item/centennial-patron"
              li1="&bull; Name recognition as Centennial Community Member"
            />
          </div>
        </div>
        <p>
          <strong>All memberships are renewable annually.</strong>
        </p>
        <p>
          This is a benefit concert which means that every ticket sold benefits
          the Urban Leage of Easten MA directly. General admission tickets begin
          at $35 and can be purchased at Hard Rock Rocksino in Northfield Park
          box office
        </p>
      </div>
    );
  }
}

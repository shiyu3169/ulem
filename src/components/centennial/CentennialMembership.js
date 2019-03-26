import React, { Component } from "react";
import MembershipCard from "./../membership/MembershipCard";
import banner from "../../img/centennial-membeship-banner.png";
export default class CentennialMembership extends Component {
  render() {
    return (
      <div>
        <img src={banner} alt="banner" className="full-width" />
        <div className="container text-center">
          <h2 className="ulem-text-primary mt-5">CENTENNIAL MEMBERSHIP</h2>
          <p>
            <strong>
              CENTENNIAL MEMBERSHIP LEVELS SUPPORTS THE BUILDING OF RESERVE
              FUNDS AND INFRASTRUCTURE OF THE URBAN LEAGUE AND ALL OF ITS
              PROGRAMAS AND ALSO INCLUDE TICKETS TO OUR 100TH ANNIVERSARY GALA.
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
                li3="&bull; (2) Centennial Gala Tickets"
                li4="&bull; Name recognition as VIP Legacy Centennial Member"
              />
            </div>
            <div className="col-md-4">
              <MembershipCard
                title="LIFETIME MEMBER"
                price="1,000"
                year="/YR"
                purchase="https://squareup.com/store/theulem/item/lifetime-centennial-member"
                li1="&bull; Centennial Membership for 2019-2020"
                li2="&bull; (2) Centennial Gala Tickets"
                li3="&bull; Name recognition as Lifetime Member"
                li4={
                  <strong>
                    Upgrade membership for $300 to receive two (2) tickets to
                    VIP reception
                  </strong>
                }
              />
            </div>
            <div className="col-md-4">
              <MembershipCard
                title="SUPPORTING MEMBER"
                price="500"
                year="/YR"
                purchase="https://squareup.com/store/theulem/item/supporting-centennial-member"
                li1="&bull; Centennial Membership for 2019-2020"
                li2="&bull; (1) Centennial Gala Ticket"
                li3="&bull; Name recognition as Supporting Member"
                li4={
                  <strong>
                    Upgrade membership for $150 to receive one (1) ticket to VIP
                    reception
                  </strong>
                }
              />
            </div>
          </div>
          <div className="row my-5 centennial-membership-2nd-row">
            <div className="col-md-4">
              <MembershipCard
                title="ULEM 'FRIEND' MEMBER"
                price="250"
                year="/YR"
                purchase="https://squareup.com/store/theulem/item/friend-centennial-member"
                li1="&bull; Centennial Membership for 2019-2020"
                li2="&bull; (1) Centennial Gala Tickets"
                li3="&bull; Name recognition as 'Friend' Member"
                li4={
                  <strong>
                    Upgrade membership for $200 to receive one (1) ticket to VIP
                    reception
                  </strong>
                }
              />
            </div>
            <div className="col-md-4">
              <MembershipCard
                title="COMMUNITY MEMBER"
                price="119"
                year="/YR"
                purchase="https://squareup.com/store/theulem/item/centennial-community-member"
                li1="&bull; Centennial Membership for 2019-2020"
                li2="&bull; Name recognition as Centennial Community Member"
                li3={
                  <strong>
                    Upgrade membership for $100 to receive one (1) Centennial
                    Gala Ticket
                  </strong>
                }
              />
            </div>
            <div className="col-md-4">
              <MembershipCard
                title="PATRON"
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
            This is a benefit concert which means that every ticket sold
            benefits the Urban Leage of Easten MA directly. General admission
            tickets begin at $200 and can be purchased at Urban League of
            Eastern MA.
          </p>
        </div>
      </div>
    );
  }
}

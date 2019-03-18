import React, { Component } from 'react'
import MembershipCard from './../membership/MembershipCard';
export default class CentennialMembership extends Component {
  render() {
    return (
      <div className="container text-center">
          <h2 className="ulem-text-primary mt-5">CENTENNIAL MEMBERSHIP</h2>
          <div className="row centennial-membership-1st-row">
            <div className="col-md-4">
              <MembershipCard 
                 title="ULEM LEGACY VIP CENTENNIAL MEMBER"
                 price="1,250"
                 year="/YR"
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
                li1="&bull; Centennial Membership for 2019-2020"
                li2="&bull; (4) Premier Level Tickets"
                li3="&bull; Name recognition as Lifetime Centennial Member"
                li4={<strong>Current ULEM Platinum Lifetime Members will receive two (2) VIP Reception tickets upon renewal of membership</strong>}
              />
            </div>
            <div className="col-md-4">
              <MembershipCard 
                title="SUPPORTING CENTENNIAL MEMBER"
                price="500"
                year="/YR"
                li1="&bull; Centennial Membership for 2019-2020"
                li2="&bull; (2) Premier Level Tickets"
                li3="&bull; Name recognition as Supporting Centennial Member"
                li4={<strong>Upgrade membership to VIP for $150 and receive one (1) ticket to VIP reception.</strong>}
              />
            </div>
          </div>
          <div className="row my-5 centennial-membership-2nd-row">
            <div className="col-md-4">
              <MembershipCard 
                title="ULEM 'FRIEND' CENTENNIAL MEMBER"
                price="250"
                year="/YR"
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
                li1="&bull; Name recognition as Centennial Community Member"
              />
            </div>
          </div>
      </div>
    )
  }
}

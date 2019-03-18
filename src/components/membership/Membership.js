import React, { Component } from 'react'
import MembershipCard from './MembershipCard';

export default class Membership extends Component {
  render() {
    return (
        <div className="container">
            <h2 className="pt-3 ulem-text-primary">
                BECOME A MEMBER TODAY!
            </h2>
            <p>
                The Urban League of Eastern MA received support from
                individuals and corporations in the community through our
                membership program. Our members are invited to events such
                as our Anual Equal Opportunity Day Luncheon and Black
                History Month Celebrations. Platinum Lifetime Members are
                listed on our website and acknowledged at ULEM events. All
                membership contributions are 100% tax-deductible.
            </p>
            <p>
                You can become a member by making a secure online payment
                through Square
            </p>
            <div className="text-center">
                <h3 className="ulem-text-primary pt-5">
                    MEMBERSHIP LEVELS
                </h3>
                <p>
                    <strong>
                        EACH MEMBERSHIP LEVEL SUPPORTS THE BUILDING OF
                        RESERVE FUNDS AND INFRASTRUCTURE OF THE URBAN LEAGUE
                        AND ALL OF ITS PROGRAMS.
                    </strong>
                </p>
            </div>
            <div className="row">
                <div className="col-md-3">
                    <MembershipCard
                        header="Platinum"
                        title="LIFETIME MEMBERSHIP"
                        price="1,000"
                        li1="&bull; Listing on website"
                        li2="&bull; Certificate of Membership"
                        li3="&bull; Annual Meeting and event program listing"
                        li4="&bull; ULEM commemorative gift"
                        li5="&bull; NUL lapel pin"
                        li6="&bull; Event discounts"
                        li7="&bull; Quarterly newsletter"
                        purchase="https://squareup.com/store/theulem/item/platinum"
                    />
                </div>
                <div className="col-md-3">
                    <MembershipCard
                        header="Gold"
                        title="LEGACY CIRCLE OF BELIEVERS"
                        price="500"
                        year="/YR"
                        li1="&bull; Listing on website"
                        li2="&bull; Certificate of Membership"
                        li3="&bull; Annual Meeting and event program listing"
                        li4="&bull; ULEM commemorative gift"
                        li5="&bull; NUL lapel pin"
                    />
                </div>
                <div className="col-md-3">
                    <MembershipCard
                        header="Silver"
                        title="CHURCH & SMALL BUSINESS MEMBERSHIPS"
                        price="350"
                        year="/YR"
                        li1="&bull; Name ULEM as a partner in bulletins and company publications"
                        li2="&bull; (2) evenings or 1/2 Saturday meetings per year"
                        li3="&bull; Event discounts"
                        li4="&bull; Quarterly newsletter"
                    />
                </div>
                <div className="col-md-3">
                    <MembershipCard
                        header="Bronze"
                        title="BRONZE"
                        price="100"
                        year="/YR"
                        li1="&bull; Certificate of Membership"
                        li2="&bull; Member listing"
                        li3="&bull; ULEM commemorative gift"
                        li4="&bull; NUL lapel pin"
                        li5="&bull; Event discounts"
                        li6="&bull; Quarterly newsletter"
                    />
                </div>
            </div>
            <div className="row mt-lg">
                <div className="col-md-4">
                    <MembershipCard
                        header="Our basic membership"
                        title="INDIVIDUAL MEMBER"
                        price="35"
                        year="/YR"
                        li1="&bull; Membership card"
                        li2="&bull; Member listing"
                        li3="&bull; UL ink pen and magnet"
                        li4="&bull; Quarterly newsletter"
                    />
                </div>
                <div className="col-md-4">
                    <MembershipCard
                        header="For our senior members 60+"
                        title="SENIOR MEMBER"
                        price="25"
                        year="/YR"
                        li1="&bull; Membership card"
                        li2="&bull; Member listing"
                        li3="&bull; Quarterly newsletter"
                    />
                </div>
                <div className="col-md-4">
                    <MembershipCard
                        header="For high school and college students"
                        title="STUDENT MEMBER"
                        price="25"
                        year="/YR"
                        li1="&bull; Membership card"
                        li2="&bull; Member listing"
                        li3="&bull; Quarterly newsletter"
                    />
                </div>
            </div>
        </div>
    );
  }
}

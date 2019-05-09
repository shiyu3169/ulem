import React, { Component } from "react";
import Donating from "../../img/ulem2.jpg";
import Amazon from "../../img/amazon.jpg";

export default class Donate extends Component {
    render() {
        return (
            <div className="container-fluid">
                <h1 className="font-red mt-4">Donate</h1>
                <div className="row">
                    <div className="col-md-6">
                        <div className="embed-responsive embed-responsive-16by9">
                            <iframe
                                title="donate"
                                className="embed-responsive-item"
                                src="https://www.youtube.com/embed/6kxMIPWEKF8?autoplay=1"
                                allowFullScreen
                                allow="autoplay"
                            />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <p className="mt-4">
                            ULEM operates by the grace of a combination of
                            grants, contracts, and donations. Every dollar
                            donated to the Urban League of Eastern Massachusetts
                            is used to support programs, overhead, and salaries.
                            In order to run this agency, ULEM must raise at
                            least $2.5 million annually. That is how we provide
                            workforce development training to the under- and
                            unemployed at no cost to them.
                        </p>
                        <p>
                            <strong>
                                You may be inclined to make a donation by
                                clicking the image below:​
                            </strong>
                        </p>
                        <a
                            target="_blank"
                            href="https://squareup.com/store/theulem"
                            rel="noopener noreferrer"
                        >
                            <img
                                className="center img-fluid border"
                                src={Donating}
                                alt="donate"
                            />
                        </a>
                        <p>
                            In addition to donations of any amount, ULEM also
                            accepts planned gifts and company stocks. Please
                            note that if you give us a gift, your company may
                            also offer an employee match. That’s a great way to
                            double your gift! Please contact the development
                            department at development@ulem.org or 617.442.4519
                            x235 to get more information. ​
                        </p>
                        <p>Thank you in advance!</p>
                        <a href="https://smile.amazon.com/ch/23-7349132">
                            <img
                                className="center img-fluid border"
                                src={Amazon}
                                alt="amazon"
                            />
                        </a>
                    </div>
                </div>
            </div>
        );
    }
}

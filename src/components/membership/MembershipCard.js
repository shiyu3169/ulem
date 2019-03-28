import React, { Component } from "react";

export default class MembershipCard extends Component {
  render() {
    return (
      <div className="text-center mt-5">
        <header className="ulem-bg-primary py-1">
          {this.props.header}
        </header>
        <div className="ulem-bg-dark card-content">
          <p className="pt-3 m-0">
            <strong>
              {this.props.title}
            </strong>
          </p>
          <div>
            $<span className="card-number-lg">{this.props.price}</span>
            {this.props.year}
          </div>
          <p>
            <strong>
              {this.props.renewal}
            </strong>
          </p>
          <ul className="font-tiny p-2 mb-0">
            <li>
              {this.props.li1}
            </li>
            <li>
              {this.props.li2}
            </li>
            <li>
              {this.props.li3}
            </li>
            <li>
              {this.props.li4}
            </li>
            <li>
              {this.props.li5}
            </li>
            <li>
              {this.props.li6}
            </li>
            <li>
              {this.props.li7}
            </li>
            <li>
              {this.props.li8}
            </li>
            <li>
              {this.props.li9}
            </li>
          </ul>
        </div>
        <div className="ulem-bg-dark">
          <a
            target="_blank"
            rel="noopener noreferrer"
            className="btn ulem-btn-primary btn-round mb-3"
            href={this.props.purchase}
          >
            Purchase
          </a>
        </div>
      </div>
    );
  }
}

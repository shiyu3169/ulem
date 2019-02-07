import React from "react";

export default function AboutMenu() {
  return (
    <div className="sticky-side">
      <h4>About</h4>
      <ul className="list-group list-group-flush">
        <li className="list-group-item  list-group-item-action">
          <a href="#mission" className="nav-link-red">
            Missions & Overview
          </a>
        </li>
        <li className="list-group-item  list-group-item-action">
          <a href="#milestone" className="nav-link-red">
            Our Milestones
          </a>
        </li>
        <li className="list-group-item  list-group-item-action">
          <a href="#leadership" className="nav-link-red">
            Leadership
          </a>
        </li>
        <li className="list-group-item  list-group-item-action">
          <a href="#board" className="nav-link-red">
            Board of Directors
          </a>
        </li>
      </ul>
    </div>
  );
}

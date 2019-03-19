import React from "react";

export default function AboutMenu() {
  return (
    <div className="sticky-side">
      <h4>About</h4>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">
          <a href="#mission" className="nav-link-red">
            Missions & Overview
          </a>
        </li>
        {/* <li className="list-group-item">
          <a href="#milestone" className="nav-link-red">
            Our Milestones
          </a>
        </li> */}
        <li className="list-group-item">
          <a href="#leadership" className="nav-link-red">
            Leadership
          </a>
        </li>
        <li className="list-group-item">
          <a href="#board" className="nav-link-red">
            Board of Directors
          </a>
        </li>
      </ul>
    </div>
  );
}

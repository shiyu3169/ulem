import React from "react";
import Axios from "axios";

export default function AdminMenu({ changeBol }) {
  const logout = () => {
    Axios.post("/api/logout").then(() => {
      this.props.history.push("/");
    });
  };

  const onEvents = () => {
    changeBol("showEvents", true);
    changeBol("showNews", false);
  };

  const onNews = () => {
    changeBol("showEvents", false);
    changeBol("showNews", true);
  };

  return (
    <div className="sticky-side">
      <ul className="list-group list-group-flush mb-4">
        <li className="list-group-item">
          <span onClick={onEvents} className="nav-link-red cursor">
            Events
          </span>
        </li>
        <li className="list-group-item">
          <span onClick={onNews} className="nav-link-red cursor">
            News
          </span>
        </li>
      </ul>
      <button onClick={logout} className="btn btn-lg btn-outline-danger">
        Logout
      </button>
    </div>
  );
}

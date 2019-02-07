import React, { Component } from "react";
import AboutMenu from "./AboutMenu";
import Missions from "./Missions";
import Milestone from "./Milestone";
import Leadership from "./Leadership";
import Board from "./Board";

export default class About extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <aside className="col-md-2">
            <AboutMenu />
          </aside>
          <main className="col-md-10">
            <Missions />
            <Milestone />
            <Leadership />
            <Board />
          </main>
        </div>
      </div>
    );
  }
}

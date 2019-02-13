import React, { Component } from "react";
import EventNew from "./EventNew";
import EventList from "./EventList";

export default class Event extends Component {
  state = {
    showAdding: false,
    showList: true
  };

  showAdding = () => {
    this.changeBol("showAdding", true);
    this.changeBol("showList", false);
  };

  showList = () => {
    this.changeBol("showAdding", false);
    this.changeBol("showList", true);
  };

  changeBol = (state, bol) => {
    this.setState({
      [state]: bol
    });
  };

  render() {
    return (
      <div>
        {this.state.showList && <EventList showAdding={this.showAdding} />}
        {this.state.showAdding && <EventNew showList={this.showList} />}
      </div>
    );
  }
}

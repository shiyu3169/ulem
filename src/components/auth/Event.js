import React, { Component } from "react";
import EventNew from "./EventNew";
import EventList from "./EventList";
import EventUpdate from "./EventUpdate";

export default class Event extends Component {
  state = {
    showAdding: false,
    showList: true,
    showEditing: false,
    id: ""
  };

  showAdding = () => {
    this.setState({
      showAdding: true,
      showList: false,
      showEditing: false
    });
  };

  showList = () => {
    this.setState({
      showAdding: false,
      showList: true,
      showEditing: false
    });
  };

  showEditing = id => {
    this.setState({
      showAdding: false,
      showList: false,
      showEditing: true,
      id
    });
  };

  render() {
    return (
      <div>
        {this.state.showList && (
          <EventList
            showAdding={this.showAdding}
            showEditing={this.showEditing}
            user={this.props.user}
          />
        )}
        {this.state.showAdding && (
          <EventNew showList={this.showList} user={this.props.user} />
        )}
        {this.state.showEditing && (
          <EventUpdate
            showList={this.showList}
            id={this.state.id}
            user={this.props.user}
          />
        )}
      </div>
    );
  }
}

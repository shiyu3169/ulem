import React, { Component } from "react";

export default class Stone extends Component {
  style = {
    background: `url(${this.props.img})`,
    backgroundRepeat: "no-repeat, repeat",
    backgroundPosition: "top center"
  };
  render() {
    return (
      <li className={this.props.inverted}>
        <div class="timeline-badge danger">
          <i class="glyphicon glyphicon-floppy-disk" />
        </div>
        <div class="timeline-panel">
          <div class="timeline-heading">
            <h4 class="timeline-title">{this.props.date}</h4>
          </div>
          <div class="timeline-body">
            <div className="crop" style={this.style} />
          </div>
        </div>
      </li>
    );
  }
}
